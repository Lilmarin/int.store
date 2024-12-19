import background_Purple from "../../Img/Backkground_Purple.png";
import "../../components/Style/Registro.scss";
import { Helmet } from "react-helmet-async";
import logo_white from "../../Img/LogoEspanol.png";
import { useState } from "react";
import Transferencia from "../../Img/payments/Transferencia.svg";
import { Input, MenuItem, Select } from "@mui/material";
import { I18n } from "aws-amplify/utils";
const Blur = () => {
  const handleGoToSignificado = () => {
    window.location.href = "https://why.int.store";
  };

  const handleGoToHome = () => {
    window.location.href = "https://int.store";
  };

  const handleGoToApp = () => {
    window.location.href = "https://intportal.vercel.app/";
  };

  const handleGoToTransactions = () => {
    window.location.href = "https://transactions.int.store";
  };
  const handleGoToGenerateQr = () => {
    window.location.href = "https://int.store/qr";
  };
  const handleGoToMision = () => {
    window.location.href = "https://mision.int.store";
  };
  const handleGoToMetricas = () => {
    window.location.href = "https://metricas.int.store";
  };
  const handleGoToCobertura = () => {
    window.location.href = "https://cobertura.int.store";
  };
  const handleGoToCentro = () => {
    window.location.href = "https://centro.int.store";
  };
  return (
    <>
      <Helmet>
        <title>INT Blurb</title>
        <meta name="INT Centro" content="Centro de la plataforma INT." />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </Helmet>
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
          <p className="w-full text-center text-[16px] text-white lg:text-[20px]">
            {I18n.get("BText1")}
          </p>
          <p className="w-full text-center text-[16px] text-white lg:text-[20px]">
            {I18n.get("BText2")}
          </p>
          <section className="flex w-full flex-row flex-wrap items-center gap-5 sm:justify-normal lg:justify-between">
            <button
              onClick={handleGoToSignificado}
              className=" lg:h-45px w-[90px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px]"
            >
              <p>Why</p>
            </button>
            <button
              onClick={handleGoToHome}
              className=" lg:h-45px w-[90px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px]"
            >
              <p>Home</p>
            </button>
            <button
              onClick={handleGoToApp}
              className=" lg:h-45px w-[90px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px]"
            >
              <p>App</p>
            </button>
            <button
              onClick={handleGoToGenerateQr}
              className=" lg:h-45px w-[90px] rounded-full bg-white p-3
            text-center text-[12px] text-primary-40 lg:text-[16px]"
            >
              <p className="sm:hidden md:block">QR</p>
              <p className="sm:block md:hidden">QR</p>
            </button>
            <button
              onClick={handleGoToMision}
              className=" lg:h-45px w-[90px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px]"
            >
              <p>Misión</p>
            </button>
            <button
              onClick={handleGoToMetricas}
              className=" lg:h-45px w-[90px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px]"
            >
              <p>Metricas</p>
            </button>
            <button
              onClick={handleGoToCobertura}
              className=" lg:h-45px w-[90px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px]"
            >
              <p>Cobertura</p>
            </button>
            <button
              onClick={handleGoToCentro}
              className=" lg:h-45px w-[90px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px]"
            >
              <p>Centro</p>
            </button>
          </section>
          <footer className="mt-20 flex flex-col items-center">
            <p className="text-[12px] text-white lg:text-[16px]">
              © Intelligent Networked Transactions LLC
            </p>
            <button onClick={handleGoToTransactions}>
              <p className="text-[12px] text-white lg:text-[16px]">
                {I18n.get("ILastTransactions")}
              </p>
            </button>
          </footer>
        </div>
      </section>
    </>
  );
};
export default Blur;
