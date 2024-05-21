import { I18n } from "aws-amplify/utils";
import QRCode from "react-qr-code";
import AvatarDefault from "../../Img/AvatarDefault.svg";

const QrPrevGenerate = (props) => {
  return (
    <section className="h-[400px] w-[240px] rounded-xl bg-white px-4 py-3">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary-50 text-center text-[18px] font-bold">
          {I18n.get("QrShare")}
        </h1>
      </div>
      <div className="ml-[10px] mt-2 flex items-center justify-normal">
        <div style={{ position: "relative" }}>
          <QRCode
            value={props.url}
            size={189}
            includeMargin={true}
            renderAs="svg"
          />
          <img
            src={props.selectedImage || AvatarDefault}
            alt="logo"
            style={{
              position: "absolute",
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 48,
              height: 48,
            }}
          />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-1 border-b border-[#888888]">
        <h4 className="text-[14px] text-[#888888]">URL</h4>
        <input
          class="text-gray-70 border-b border-gray-500"
          value={props.url}
        />
      </div>
      <div className="mt-[10px] flex flex-col gap-2">
        <button className="bg-primary-40 flex h-9 w-full items-center justify-center rounded-[32px] text-center text-[14px] font-light text-white">
          {I18n.get("QrCopy")}
        </button>
        <button className="text-primary-40 flex h-9 w-full items-center justify-center rounded-[32px] border bg-white text-center text-[14px] font-light">
          {I18n.get("QrDownload")}
        </button>
      </div>
    </section>
  );
};
export default QrPrevGenerate;
