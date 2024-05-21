import { I18n } from "aws-amplify/utils";
import { useEffect, useRef, useState } from "react";
import upload from "../../Img/upload.svg";
const QrGenerate = (props) => {
  const [fileImageTemp, setFileImageTemp] = useState(null);
  const [urlTemp, setUrlTemp] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const fileInputRef = useRef(null);

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
      const imageUrl = URL.createObjectURL(file);
      setFileImageTemp(imageUrl);
    }
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
    props.setSelectedImage(fileImageTemp);
    props.setUrl(urlTemp);
  };
  return (
    <section className="h-[400px] w-[240px] rounded-xl bg-white p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-[18px] font-bold text-gray-90">
          {I18n.get("QrGenerate")}
        </h1>
        <h4 className="text-[14px] font-light text-gray-70">
          {I18n.get("QrLoading")}
        </h4>
      </div>
      <div className="mt-[18px] flex items-center justify-center">
        <div className="relative w-16">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-gray-50 bg-gray-20">
            {fileImageTemp ? (
              <img
                className="h-[62px] w-[62px] rounded-full"
                src={fileImageTemp}
                alt="QR"
              />
            ) : (
              <p className="text-gray-60">NN</p>
            )}

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
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2 border-b border-[#888888]">
        <h4 className="text-[14px] text-[#888888]">URL</h4>
        <input
          className="border-b border-gray-500 text-gray-70"
          onChange={(e) => setUrlTemp(e.target.value)}
          value={urlTemp}
        />
      </div>
      <div className="mt-[85px] flex flex-col gap-2">
        <button
          onClick={handleGenerateQR}
          className={`flex h-9 w-full items-center justify-center rounded-[32px] bg-primary-40 text-center text-[14px] font-light text-white hover:bg-primary-50 ${buttonDisabled ? "cursor-not-allowed opacity-50" : ""}`}
        >
          {I18n.get("QrGenerateQr")}
        </button>
        <button
          onClick={handleCleanData}
          className={`flex h-9 w-full items-center justify-center rounded-[32px]  bg-white text-center text-[14px] font-light text-primary-40 shadow-sm hover:bg-gray-10 ${buttonDisabled ? "cursor-not-allowed opacity-50" : ""}`}
        >
          {I18n.get("QrClean")}
        </button>
      </div>
    </section>
  );
};
export default QrGenerate;
