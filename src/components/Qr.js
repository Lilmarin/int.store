import logoEspañol from "./../Img/LogoEspanol.png";
import logoingles from "./../Img/Logotipo.png";
import background_Purple from "./../Img/Backkground_Purple.png";
import QrGenerate from "./Qr/QrGenerate";
import QrPrevGenerate from "./Qr/QrPrevGenerate";
import { useEffect, useState } from "react";
import { I18n } from "aws-amplify/utils";
const Qr = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [urlText, setUrlText] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [language, setLanguage] = useState("");
  useEffect(() => {
    const lg = localStorage.getItem("language") || "es";
    console.log(lg);
    setLanguage(lg);
  }, []);
  return (
    <div
      className="relative flex w-full flex-col items-center sm:h-[1100px] lg:h-screen"
      style={{ backgroundImage: `url(${background_Purple})` }}
    >
      <section>
        {language === "es" ? (
          <img
            src={logoEspañol}
            alt="Logotipo Español"
            className="sm:mt-[21px] sm:h-[76px] sm:w-[268px] lg:mt-[48px] lg:h-[152px] lg:w-[533px]"
          ></img>
        ) : (
          <img
            src={logoingles}
            alt="Logotipo Español"
            className="sm:mt-[21px] sm:h-[76px] sm:w-[268px] lg:mt-[48px] lg:h-[152px] lg:w-[533px]"
          ></img>
        )}
      </section>
      <section className="flex justify-between sm:mt-[31px] sm:h-[840px] sm:flex-col sm:gap-10 lg:mt-[45px] lg:h-[400px] lg:w-[732px] lg:flex-row">
        {/**Left */}
        <QrGenerate
          urlText={urlText}
          setUrlText={setUrlText}
          urlImage={urlImage}
          setUrlImage={setUrlImage}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        {/**Right */}
        <QrPrevGenerate
          urlText={urlText}
          selectedImage={selectedImage}
          urlImage={urlImage}
        />
      </section>
      <footer className="text-[20px] font-light text-white sm:relative sm:mt-10 lg:absolute lg:bottom-10 lg:mt-[200px]">
        {I18n.get("IBrand")}
      </footer>
    </div>
  );
};
export default Qr;
