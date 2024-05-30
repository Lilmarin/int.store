import { I18n } from "aws-amplify/utils";
import QRCode from "react-qr-code";
import AvatarDefault from "../../Img/AvatarDefault.svg";
import { useEffect, useState } from "react";
import dowload from "../../Img/download.svg";
import content_copy from "../../Img/content_copy.svg";
import default_logo_QR from "../../Img/logo192.png";
import axios from "axios";

const QrPrevGenerate = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(true); // [1
  useEffect(() => {
    if (props.urlText && props.urlImage) {
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
  }, [props.urlText, props.urlImage]);
  const handleCopy = () => {
    navigator.clipboard.writeText(props.urlText);
  };
  /**
   * Funcion para descargar el QR
   * @returns {void}
   */
  const handleDownload = async () => {
    const data = {
      text: props.urlText,
      imageUrl: props.urlImage,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/qr/generate-qr",
        data,
        {
          responseType: "arraybuffer",
        },
      );

      const blob = new Blob([response.data], { type: "image/png" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "qr-code.png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    <section className="h-[400px] w-[240px] rounded-xl bg-white px-4 py-3">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-[18px] font-bold text-primary-50">
          {I18n.get("QrShare")}
        </h1>
      </div>
      <div className="ml-[10px] mt-2 flex items-center justify-normal">
        <div style={{ position: "relative" }}>
          <QRCode
            value={props.urlText}
            size={189}
            includeMargin={true}
            renderAs="svg"
          />
          <div className="absolute left-1/2 top-1/2 h-[55px] w-[55px]  -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-10">
            <img
              src={props.urlImage || default_logo_QR}
              alt="logo"
              style={{
                position: "absolute",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-49%, -49%)",
                width: 50,
                height: 50,
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-1 border-b border-[#888888]">
        <h4 className="text-[14px] text-[#888888]">URL</h4>
        <input
          class="border-b border-gray-500 text-gray-70"
          value={props.urlText}
        />
      </div>
      <div className="mt-[10px] flex flex-col gap-2">
        <button
          onClick={handleCopy}
          className={`flex h-9 w-full items-center justify-center rounded-[32px] bg-primary-40 text-center text-[14px] font-light text-white hover:bg-primary-50 ${buttonDisabled ? "opacity-50" : ""}`}
          disabled={buttonDisabled}
        >
          {I18n.get("QrCopy")}
          <img src={content_copy} alt="copy" className="ml-2" />
        </button>
        <button
          onClick={handleDownload}
          className={`flex h-9 w-full items-center justify-center rounded-[32px] bg-white text-center text-[14px] font-light text-primary-40 shadow-sm hover:bg-gray-10 ${buttonDisabled ? "opacity-50" : ""}`}
          disabled={buttonDisabled}
        >
          <img src={dowload} alt="download" className="mr-2" />
          {I18n.get("QrDownload")}
        </button>
      </div>
    </section>
  );
};
export default QrPrevGenerate;
