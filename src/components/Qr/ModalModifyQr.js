import React, { useState, useRef, useEffect } from "react";
import { I18n } from "aws-amplify/utils";

const ModalModifyQr = (props) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [circlePosition, setCirclePosition] = useState({ x: 55, y: 60 });
  const [circleSize, setCircleSize] = useState(200); // Tamaño del círculo
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartPosition({
      x: e.clientX - circlePosition.x,
      y: e.clientY - circlePosition.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    let newX = e.clientX - startPosition.x;
    let newY = e.clientY - startPosition.y;

    // Limitar el movimiento dentro del contenedor
    const maxX = containerRect.width - circleSize;
    const maxY = containerRect.height - circleSize;

    newX = Math.min(Math.max(newX, 0), maxX);
    newY = Math.min(Math.max(newY, 0), maxY);

    setCirclePosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const adjustCirclePosition = (newSize) => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    let newX = circlePosition.x;
    let newY = circlePosition.y;

    // Asegurarse de que el círculo se mantenga dentro del contenedor
    const maxX = containerRect.width - newSize;
    const maxY = containerRect.height - newSize;

    if (newX > maxX) newX = maxX;
    if (newY > maxY) newY = maxY;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;

    setCirclePosition({ x: newX, y: newY });
  };

  const handleSizeChange = (change) => {
    setCircleSize((size) => {
      const newSize = size + change;
      if (newSize >= 200 && newSize <= 310) {
        adjustCirclePosition(newSize);
        return newSize;
      }
      return size;
    });
  };

  const handleAccept = () => {
    const container = containerRef.current;
    const image = imageRef.current;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Tamaño del círculo desde el estado
    const diameter = circleSize;
    const radius = diameter / 2;

    // Tamaño del contenedor
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    // Tamaño de la imagen
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;

    // Escalar el tamaño del círculo a la imagen
    const scale = imageWidth / containerWidth;
    const scaledDiameter = diameter * scale;
    const scaledRadius = scaledDiameter / 2;

    // Posición del círculo en la imagen
    const x = circlePosition.x * scale + scaledRadius;
    const y = circlePosition.y * scale + scaledRadius;

    // Recortar la imagen
    canvas.width = scaledDiameter;
    canvas.height = scaledDiameter;
    ctx.drawImage(
      image,
      x - scaledRadius,
      y - scaledRadius,
      scaledDiameter,
      scaledDiameter,
      0,
      0,
      scaledDiameter,
      scaledDiameter,
    );

    // Convertir la imagen a base64
    const dataUrl = canvas.toDataURL("image/png");

    // Enviar la imagen a la función que la necesita
    props.setSelectedImage(dataUrl);
    props.onClose(); // Cierra el modal si tienes una función para ello
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className="fixed flex h-full w-full flex-col items-center justify-center">
      <div className="relative flex h-[490px] w-[350px] flex-col gap-2 overflow-hidden rounded-lg border bg-[#EBEBEB] px-5 shadow-md">
        <section className="flex h-[40px] items-center justify-center">
          <p className="pt-1 text-[20px] font-bold">{I18n.get("AjustImage")}</p>
        </section>
        <section
          className="relative h-[325px] w-full border"
          ref={containerRef}
        >
          <img
            src={props.selectedImage}
            alt="QR"
            ref={imageRef}
            className="h-full w-full "
          />
          <div
            className="absolute cursor-pointer rounded-full border-2 border-white"
            style={{
              width: circleSize,
              height: circleSize,
              top: circlePosition.y,
              left: circlePosition.x,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "50%",
            }}
            onMouseDown={handleMouseDown}
          ></div>
        </section>
        <div className="absolute right-1 top-40 flex flex-col gap-2 text-[24px] text-black">
          <button onClick={() => handleSizeChange(10)}>+</button>
          <button onClick={() => handleSizeChange(-10)}>-</button>
        </div>
        <button
          className="h-[44px] rounded-[32px] bg-[#585DCC] text-white hover:bg-[#2A2FAB]"
          onClick={handleAccept}
        >
          {I18n.get("Acept")}
        </button>
        <button
          className="h-[40px] rounded-[32px] bg-[#585DCC] text-white hover:bg-[#2A2FAB]"
          onClick={props.onClose}
        >
          {I18n.get("Cancel")}
        </button>
      </div>
    </div>
  );
};

export default ModalModifyQr;
