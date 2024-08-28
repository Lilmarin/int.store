import { I18n } from "aws-amplify/utils";
import { useEffect, useRef, useState } from "react";
import upload from "../../Img/upload.svg";
import axios from "axios";
import iconQR from "../../Img/icons/qr_code.svg";
import "./Qr.css";

const QrGenerate = (props) => {
  const [fileImageTemp, setFileImageTemp] = useState(null);
  const [urlTemp, setUrlTemp] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  // Estado para zoom y posición
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (fileImageTemp && urlTemp) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [fileImageTemp, urlTemp]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileImageTemp(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Manejadores de eventos para zoom y arrastre
  const handleWheel = (e) => {
    e.preventDefault();
    setZoom((prevZoom) => Math.max(1, prevZoom + e.deltaY * -0.001));
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const containerRect = container.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    // Nuevas posiciones basadas en el arrastre
    let newX = e.clientX - startPosition.x;
    let newY = e.clientY - startPosition.y;

    // Limitar el movimiento dentro del contenedor
    const maxX = Math.max(0, (imageRect.width - containerRect.width) / 2);
    const maxY = Math.max(0, (imageRect.height - containerRect.height) / 2);

    newX = Math.min(Math.max(newX, -maxX), maxX);
    newY = Math.min(Math.max(newY, -maxY), maxY);

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleCleanData = () => {
    setFileImageTemp(null);
    setUrlTemp("");
    props.setUrl("");
    props.setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleGenerateQR = () => {
    // Crear un canvas para dibujar la imagen ajustada
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Definir el tamaño del canvas
    const container = containerRef.current;
    const image = imageRef.current;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Dibujar la imagen ajustada en el canvas
    ctx.drawImage(
      image,
      position.x - (image.width * (zoom - 1)) / 2,
      position.y - (image.height * (zoom - 1)) / 2,
      image.width * zoom,
      image.height * zoom,
    );

    // Convertir el canvas a una data URL
    const finalImage = canvas.toDataURL("image/png");

    // Enviar o guardar la imagen procesada
    props.setSelectedImage(finalImage);
    props.setUrl(urlTemp);
    console.log("Final Image URL", finalImage);
  };
  return (
    <section className="flex h-[400px] w-[240px] flex-col items-center rounded-xl bg-white p-6">
      <div className="flex w-full flex-col gap-2">
        <h1 className="text-[18px] font-bold text-gray-90">
          {I18n.get("QrGenerate")}
        </h1>
        <h4 className="text-[14px] font-light text-gray-70">
          {I18n.get("QrLoading")}
        </h4>
      </div>
      <div className="relative mt-[18px] flex w-16 items-center justify-center">
        <div
          className="relative h-16 w-16 overflow-hidden rounded-full border border-dashed border-gray-50 bg-gray-20"
          ref={containerRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {fileImageTemp ? (
            <img
              ref={imageRef}
              className="absolute"
              src={fileImageTemp}
              alt="QR"
              style={{
                transform: `scale(${zoom})`,
                top: position.y + "px",
                left: position.x + "px",
                cursor: dragging ? "grabbing" : "grab",
              }}
            />
          ) : (
            <p className="text-gray-60">NN</p>
          )}
        </div>
        <button
          onClick={() => document.getElementById("file-input").click()}
          className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary-40"
        >
          <img src={upload} alt="upload" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="file-input"
            onChange={handleImageChange}
            ref={fileInputRef}
          />
        </button>
      </div>
      <div className="mt-2 flex w-full flex-col gap-2 border-b border-[#888888]">
        <h4 className="text-[14px] text-[#888888]">URL</h4>
        <input
          className="border-b border-gray-500 text-gray-70"
          onChange={(e) => setUrlTemp(e.target.value)}
          value={urlTemp}
        />
      </div>
      <div className="mt-[85px] flex w-full flex-col gap-2">
        <button
          onClick={handleGenerateQR}
          className={`flex h-9 w-full items-center justify-center rounded-[32px] bg-primary-40 text-center text-[14px] font-light text-white hover:bg-primary-50 ${buttonDisabled ? "cursor-not-allowed opacity-50" : ""}`}
        >
          {I18n.get("QrGenerateQr")}
          <img src={iconQR} alt="QR" className="ml-2" />
        </button>
        <button
          onClick={handleCleanData}
          className="flex h-9 w-full items-center justify-center rounded-[32px] bg-white text-center text-[14px] font-light text-primary-40 hover:bg-gray-20"
        >
          Limpiar
        </button>
      </div>
    </section>
  );
};

export default QrGenerate;
