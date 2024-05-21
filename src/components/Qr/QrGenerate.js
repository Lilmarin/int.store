import { I18n } from "aws-amplify/utils";
import { useState } from "react";
import AvatarDefault from "../../Img/AvatarDefault.svg";

const QrGenerate = (props) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      props.setSelectedImage(imageUrl);
      // Puedes añadir lógica para subir la imagen aquí
    }
  };
  const handleCleanData = () => {
    props.setUrl("");
    props.setSelectedImage(null);
  };
  return (
    <section className="h-[400px] w-[240px] rounded-xl bg-white p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-90 text-[18px] font-bold">
          {I18n.get("QrGenerate")}
        </h1>
        <h4 className="text-gray-70 text-[14px] font-light">
          {I18n.get("QrLoading")}
        </h4>
      </div>
      <div className="mt-[18px] flex items-center justify-center">
        <div className="relative w-16">
          <div className="h-16 w-16 rounded-full border border-dashed border-gray-50">
            <img
              className="h-[62px] w-[62px] rounded-full"
              src={props.selectedImage || AvatarDefault}
              alt="QR"
            />

            <button
              onClick={() => document.getElementById("file-input").click()}
              className="bg-primary-40 absolute bottom-0 right-0 h-4 w-4 rounded-full"
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="file-input"
                onChange={handleImageChange}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2 border-b border-[#888888]">
        <h4 className="text-[14px] text-[#888888]">URL</h4>
        <input
          class="text-gray-70 border-b border-gray-500"
          onChange={(e) => props.setUrl(e.target.value)}
          value={props.url}
        />
      </div>
      <div className="mt-[85px] flex flex-col gap-2">
        <button className="bg-primary-40 flex h-9 w-full items-center justify-center rounded-[32px] text-center text-[14px] font-light text-white">
          {I18n.get("QrGenerateQr")}
        </button>
        <button
          onClick={handleCleanData}
          className="text-primary-40 flex h-9 w-full items-center justify-center rounded-[32px] border bg-white text-center text-[14px] font-light"
        >
          {I18n.get("QrClean")}
        </button>
      </div>
    </section>
  );
};
export default QrGenerate;
