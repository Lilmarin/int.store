import React, { useState, useRef, useEffect } from "react";
import { I18n } from "aws-amplify/utils";

const ModalModifyQr = (props) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [circleSize, setCircleSize] = useState(200); // Tamaño del círculo
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1); // Estado para el zoom
  const [imgRes, setImgRes] = useState(null);

  const handlePointerDown = (e) => {
    setDragging(true);
    setStartPosition({
      x: e.clientX - imagePosition.x,
      y: e.clientY - imagePosition.y,
    });
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;

    let newX = e.clientX - startPosition.x;
    let newY = e.clientY - startPosition.y;

    // Ajuste para que la imagen no se mueva completamente fuera del círculo
    const container = containerRef.current.getBoundingClientRect();
    const image = imageRef.current.getBoundingClientRect();

    // Asegura que la imagen no se salga completamente del contenedor por la derecha o izquierda
    if (newX > container.width / 2) newX = container.width / 2;
    if (newX + image.width < container.width / 2)
      newX = container.width / 2 - image.width;

    // Asegura que la imagen no se salga completamente por arriba o abajo
    if (newY > container.height / 2) newY = container.height / 2;
    if (newY + image.height < container.height / 2)
      newY = container.height / 2 - image.height;

    setImagePosition({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const handleSizeChange = (change) => {
    setCircleSize((size) => {
      const newSize = size + change;
      if (newSize >= 100 && newSize <= 300) {
        return newSize;
      }
      return size;
    });
  };

  const handleZoomChange = (change) => {
    setZoom((prevZoom) => {
      const newZoom = Math.max(0.5, prevZoom + change); // Ajusta el zoom entre 0.5 y 5
      return newZoom;
    });
  };

  const handleAccept = () => {
    const container = containerRef.current;
    const image = imageRef.current;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const diameter = circleSize;
    const radius = diameter / 2;

    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const imageWidth = image.naturalWidth * zoom;
    const imageHeight = image.naturalHeight * zoom;

    const scaleX = imageWidth / containerWidth;
    const scaleY = imageHeight / containerHeight;

    // Coordenadas del centro del círculo en el contenedor
    const circleCenterX = containerWidth / 2;
    const circleCenterY = containerHeight / 2;

    // Coordenadas del círculo en la imagen escalada
    const imageCircleX = (circleCenterX - imagePosition.x) * scaleX;
    const imageCircleY = (circleCenterY - imagePosition.y) * scaleY;

    // Ajustamos el tamaño del canvas al tamaño del círculo
    canvas.width = diameter;
    canvas.height = diameter;

    ctx.drawImage(
      image,
      imageCircleX - radius * scaleX, // Posición X ajustada en la imagen
      imageCircleY - radius * scaleY, // Posición Y ajustada en la imagen
      diameter * scaleX, // Ancho del área recortada
      diameter * scaleY, // Alto del área recortada
      0,
      0,
      diameter,
      diameter,
    );

    const dataUrl = canvas.toDataURL("image/png");
    props.setSelectedImage(dataUrl);
    props.onClose();
  };

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [dragging]);

  return (
    <div className="relative flex h-full w-full flex-col gap-2 overflow-hidden rounded-lg px-5">
      <section className="flex h-[40px] items-center justify-center">
        <p className="pt-1 text-[20px] font-bold">{I18n.get("AjustImage")}</p>
      </section>
      <section className="flex flex-row gap-2">
        <button
          onClick={() => handleSizeChange(10)}
          className="w-[100px] rounded-[32px] bg-primary-40 text-[14px] text-white hover:bg-primary-50"
        >
          Circulo +
        </button>
        <button
          onClick={() => handleSizeChange(-10)}
          className="w-[100px] rounded-[32px] bg-primary-40 text-[14px] text-white hover:bg-primary-50"
        >
          Circulo -
        </button>
      </section>
      <section className="relative flex h-[325px] w-full items-center overflow-auto border">
        <div
          className="relative h-full w-full overflow-auto"
          ref={containerRef}
        >
          <img
            src={props.selectedImage}
            alt="QR"
            ref={imageRef}
            style={{
              transform: `scale(${zoom}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
              transformOrigin: "0 0",
              userSelect: "none", // Evita la selección de la imagen en la mayoría de los navegadores
              touchAction: "none", // Deshabilita los gestos táctiles predeterminados
              WebkitUserDrag: "none", // Desactiva el arrastre en navegadores WebKit
              cursor: "default", // Cambia el cursor al estado por defecto
              WebkitUserSelect: "none", // Específico para Safari para evitar la selección
              WebkitTouchCallout: "none", // Evita el menú contextual en Safari
              WebkitTapHighlightColor: "rgba(0,0,0,0)", // Elimina el resaltado al tocar en Safari
              pointerEvents: "auto", // Permite que la imagen reciba eventos, pero sin selección
              width: "100%", // Asegura que la imagen abarque todo el contenedor
              height: "100%", // Asegura que la imagen abarque todo el contenedor
            }}
            className="absolute"
          />
          <div
            className="absolute cursor-pointer rounded-full border-2 border-white"
            style={{
              width: circleSize,
              height: circleSize,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "50%",
              userSelect: "none", // Evita la selección de texto
              outline: "none", // Elimina el borde de enfoque
            }}
            onPointerDown={handlePointerDown} // Inicia el arrastre cuando se hace clic en el círculo
          ></div>
        </div>
      </section>
      <button
        className="h-[44px] rounded-[32px] bg-[#585DCC] text-white hover:bg-[#2A2FAB]"
        onClick={handleAccept}
      >
        {I18n.get("Acept")}
      </button>
      <button
        className="mb-1 h-[40px] rounded-[32px] bg-white text-black shadow-md hover:bg-gray-20"
        onClick={props.onClose}
      >
        {I18n.get("Cancel")}
      </button>
    </div>
  );
};

export default ModalModifyQr;
