import { Homecomponent } from "./StyledComponents";
import logoEspañol from "./../Img/LogoEspanol.png";
import background_Purple from "./../Img/Backkground_Purple.png";
import { I18n } from "aws-amplify/utils";
import QrGenerate from "./Qr/QrGenerate";
import QrPrevGenerate from "./Qr/QrPrevGenerate";
import { useState } from "react";
const Qr = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [url, setUrl] = useState("");
  return (
    <div
      className="flex h-full w-full flex-col items-center"
      style={{ backgroundImage: `url(${background_Purple})`, height: "100vh" }}
    >
      <section>
        <img
          src={logoEspañol}
          alt="Logotipo Español"
          className="sm:mt-[21px] sm:h-[76px] sm:w-[268px] lg:mt-[48px] lg:h-[152px] lg:w-[533px]"
        ></img>
      </section>
      <section className="flex h-[400px] justify-between border sm:flex-col lg:w-[732px] lg:flex-row">
        {/**Left */}
        <QrGenerate
          url={url}
          setUrl={setUrl}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        {/**Right */}
        <QrPrevGenerate url={url} selectedImage={selectedImage} />
      </section>
    </div>
  );
};
export default Qr;
