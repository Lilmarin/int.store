import logoCentral from "./Img/logoWhite.svg";
import onlyLogo from "./Img/onlyLogo.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function Why() {
  const [isHidden, setIsHidden] = useState(false);
  const handleGoToTransactions = () => {
    window.location.href = "https://transactions.int.store";
  };
  const handleGoToHome = () => {
    window.location.href = "https://int.store";
  };
  return (
    <section
      className={`jusce relative flex  h-screen w-full flex-col
        items-center justify-center gap-5
        bg-black px-[300px] text-white sm:px-4 sm:py-20 sm:text-[22px] lg:py-20 lg:text-[31px]`}
      style={{ fontFamily: "Red Hat Display" }}
    >
      {/* Sección principal con los dos bloques de texto */}
      <button
        className="absolute right-5 top-5"
        onClick={() => setIsHidden(!isHidden)}
      >
        {isHidden ? (
          <VisibilityOffIcon fontSize="large" />
        ) : (
          <RemoveRedEyeIcon fontSize="large" />
        )}
      </button>
      <section
        className={`flex-row items-center justify-between gap-10 sm:h-[100px] sm:w-full lg:h-[150px] lg:w-[80%]
        ${isHidden ? "hidden" : "flex"}`}
      >
        <div className="flex h-[200px] flex-col justify-center  sm:w-full lg:w-[400px] ">
          <p className="text-start ">Recibir</p>
          <p className="text-center">Pasado</p>
          <p className="text-end ">Cuerpo</p>
        </div>
        <div className="flex h-[200px] flex-col justify-center  sm:w-full lg:w-[400px] ">
          <p className="text-end">Compartir</p>
          <p className="text-center">Futuro</p>
          <p className="text-start">Alma</p>
        </div>
      </section>

      {/* Logotipo central */}
      <img
        onClick={handleGoToHome}
        src={isHidden ? onlyLogo : logoCentral}
        alt="Logotipo Español"
        className="sm:h-[80px] sm:w-[270px] lg:h-[200px] lg:w-[698px]"
      ></img>

      {/* Sección final con bloque de texto */}
      <section
        className={`w-full flex-row items-center justify-center ${isHidden ? "hidden" : "flex"} sm:h-[100px] lg:h-[150px]`}
      >
        <div className="flex h-[200px] w-[300px] flex-col items-center justify-center">
          <p className="text-center">Mente</p>
          <p className="text-center">Presente</p>
          <p className="text-center">Adquirir</p>
        </div>
      </section>
      <footer
        className={` bottom-5 ${isHidden ? "absolute" : "hidden"} text-center text-[16px]`}
      >
        <p>© Intelligent Networked Transactions LLC</p>
        <p onClick={handleGoToTransactions}>Últimas transacciones</p>
      </footer>
    </section>
  );
}
