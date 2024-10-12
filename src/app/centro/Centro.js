import React from "react";
import background_Purple from "../../Img/Backkground_Purple.png";
import logo_white from "../../Img/LogoEspanol.png";
import { Link, NavLink } from "react-router-dom";

export default function Centro() {
  const handleGoToSignificado = () => {
    window.location.href = "https://why.int.store";
  };

  const handleGoToHome = () => {
    window.location.href = "https://int.store";
  };

  const handleGoToApp = () => {
    window.location.href =
      "https://intportal.vercel.app/TuDominio/terminal/MXN_";
  };

  const handleGoToTransactions = () => {
    window.location.href = "https://transactions.int.store";
  };
  const handleGoToGenerateQr = () => {
    window.location.href = "https://int.store/qr";
  };
  return (
    <section
      className="relative flex w-full flex-col items-center sm:h-screen sm:pt-[30%] lg:h-screen lg:pt-[8%]
      "
      style={{
        backgroundImage: `url(${background_Purple})`,
        fontFamily: "Red Hat Display",
      }}
    >
      <div className="flex flex-col items-center gap-5 sm:w-[320px] lg:w-[900px]">
        <img
          src={logo_white}
          alt="Logotipo Español"
          className=" sm:h-[80px] sm:w-[270px] lg:h-[200px] lg:w-[698px]"
        ></img>
        <div className="h-3 w-1/2 bg-white"></div>
        <p className="w-full text-center text-[16px] text-white lg:text-[31px]">
          Empoderamos a los emprendedores que quieren mejorar la sociedad y sus
          familias, con las herramientas necesarias para lograrlo en el menor
          tiempo posible.
        </p>
        <section className="flex flex-row items-center justify-between gap-5 sm:w-[100%] lg:w-[50%]">
          <button
            onClick={handleGoToSignificado}
            className=" lg:h-45px w-[110px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px]"
          >
            <p>Why</p>
          </button>
          <button
            onClick={handleGoToHome}
            className=" lg:h-45px w-[110px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px]"
          >
            <p>Home</p>
          </button>
          <button
            onClick={handleGoToApp}
            className=" lg:h-45px w-[110px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px]"
          >
            <p>App</p>
          </button>
          <button
            onClick={handleGoToGenerateQr}
            className=" lg:h-45px w-[190px] rounded-full bg-white p-3
            text-center text-[12px] text-primary-40 lg:text-[16px]"
          >
            <p className="sm:hidden md:block">Generador QR</p>
            <p className="sm:block md:hidden">QR</p>
          </button>
        </section>
        <footer className="mt-20 flex flex-col items-center">
          <p className="text-[12px] text-white lg:text-[16px]">
            © Intelligent Networked Transactions LLC
          </p>
          <button onClick={handleGoToTransactions}>
            <p className="text-[12px] text-white lg:text-[16px]">
              Últimas transacciones
            </p>
          </button>
        </footer>
      </div>
    </section>
  );
}