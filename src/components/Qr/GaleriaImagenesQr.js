import logoEspañol from "./../../Img/LogoEspanol.png";
import logoingles from "./../../Img/Logotipo.png";
import background_Purple from "./../../Img/Backkground_Purple.png";
import QrGenerate from "./QrGenerate";
import QrPrevGenerate from "./QrPrevGenerate";
import { useEffect, useState } from "react";
import QrFlores1 from "./../../Img/QRFlower1.webp";
import QrFlores2 from "./../../Img/QRFlower2.webp";
import { I18n } from "aws-amplify/utils";
import { NavLink, Route } from "react-router-dom";
import { scriptGoogle } from "../../lib/utils/scriptGoogle";

const GaleriaImagenesQr = (props) => {
  const [language, setLanguage] = useState("");
  useEffect(() => {
    const lg = localStorage.getItem("language") || "es";
    setLanguage(lg);
    scriptGoogle();
  }, []);
  return (
    <div
      className="relative flex w-full flex-col items-center  sm:h-[1100px] sm:pt-[100px] lg:h-screen lg:pt-[10%]"
      style={{ backgroundImage: `url(${background_Purple})` }}
    >
      {/* <section>
        {props.language === "es" ? (
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
      </section> */}
      <section className="flex sm:mt-[31px] sm:h-[840px] sm:flex-col sm:gap-10 lg:mt-[45px] lg:h-[400px] lg:w-[850px] lg:flex-row lg:justify-between">
        <img
          src={QrFlores1}
          alt="QRFlower1"
          className="sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]"
        ></img>
        <img
          src={QrFlores2}
          alt="QRFlower2"
          className="sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]"
        ></img>
      </section>
      <NavLink className="enlacebtn2" to="/Qr">
        <button className="mt-12 h-[48px] w-[343px] rounded-[32px] bg-white hover:bg-gray-30 ">
          {I18n.get("QrGenerateQr")}
        </button>
      </NavLink>

      <footer className="text-[20px] font-light text-white sm:relative sm:mt-10 lg:absolute lg:bottom-10 lg:mt-[200px]">
        {I18n.get("IBrand")}
      </footer>
    </div>
  );
};
export default GaleriaImagenesQr;
