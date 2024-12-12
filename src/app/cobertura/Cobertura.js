import bgPurple from "../../Img/Backkground_Purple.png";
import "../../components/Style/Registro.scss";
import coin from "../../Img/Coin.webp";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import mexicosvg from "../../Img/country/México.svg";
import argentinasvg from "../../Img/country/Argentina.svg";
import colombiasvg from "../../Img/country/Colombia.svg";
import españasvg from "../../Img/country/España.svg";
import usasvg from "../../Img/country/US.svg";
import Bitcoin from "../../Img/payments/Bitcoin.svg";
import Coin from "../../Img/payments/Coin.svg";
import Efectivo from "../../Img/payments/Efectivo.svg";
import Tarjetas from "../../Img/payments/Tarjetas.svg";
import Transferencia from "../../Img/payments/Transferencia.svg";

const Cobertura = () => {
  const [selectedContinent, setSelectedContinent] = useState("América Latina");
  const [selectedCountry, setSelectedCountry] = useState("México");

  const continentes = [
    { name: "América Latina", enabled: true },
    { name: "Norte América", enabled: false },
    { name: "Europa", enabled: false },
    { name: "Asia", enabled: false },
    { name: "África", enabled: false },
    { name: "Oceanía", enabled: false },
  ];

  const paises = [
    { name: "México", svg: mexicosvg, enabled: true },
    { name: "Argentina", svg: argentinasvg, enabled: false },
    { name: "Colombia", svg: colombiasvg, enabled: false },
    { name: "España", svg: españasvg, enabled: false },
    { name: "USA", svg: usasvg, enabled: false },
  ];

  const payments = [
    {
      name: "Tarjetas",
      svg: Tarjetas,
      time: "5% 48h",
      size: "w-[61px] h-[61px]",
    },
    {
      name: "Efectivo",
      svg: Efectivo,
      time: "3% 24h",
      size: "w-[61px] h-[61px]",
    },
    {
      name: "Transferencia",
      svg: Transferencia,
      time: "2% 12h",
      size: "w-[55px] h-[55px]",
    },
    {
      name: "Bitcoin",
      svg: Bitcoin,
      time: "1% 1h",
      size: "w-[61px] h-[61px]",
    },
    {
      name: "INT",
      svg: Coin,
      time: "0% 0s",
      size: "w-[50px] h-[50px]",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cobertura</title>
      </Helmet>
      <section
        style={{
          backgroundImage: `url(${bgPurple})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="font-red-hat relative flex items-center justify-center pt-12 text-white"
      >
        <section className="flex h-[654px] w-[1200px] flex-row items-center justify-center gap-14 rounded-xl bg-white">
          <div className="flex h-[595px] w-[739px] flex-col ">
            <section className="flex w-full flex-row gap-1 text-black">
              {continentes.map((continente, index) => (
                <article
                  key={index}
                  onClick={() =>
                    continente.enabled && setSelectedContinent(continente.name)
                  } // Solo permite selección si está habilitado
                  className={`flex h-[60px] w-full items-center justify-center rounded-md transition-colors ${
                    continente.enabled
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-50"
                  } ${
                    selectedContinent === continente.name
                      ? "bg-primary-50 text-white"
                      : "bg-primary-5 text-gray-70"
                  }`}
                >
                  <p className="text-[14px] font-bold">{continente.name}</p>
                </article>
              ))}
            </section>
            <div className="mt-5 flex h-full flex-row text-primary-50">
              <section className="flex h-[444px] w-[262px] flex-col">
                {paises.map((pais, index) => (
                  <article
                    key={index}
                    onClick={() =>
                      pais.enabled && setSelectedCountry(pais.name)
                    } // Solo permite selección si está habilitado
                    className={`flex h-[44px] w-full items-center justify-start gap-4 px-4 transition-colors ${
                      pais.enabled
                        ? "cursor-pointer"
                        : "cursor-not-allowed opacity-50"
                    } ${
                      selectedCountry === pais.name
                        ? "bg-white text-primary-50"
                        : "bg-gray-30 text-gray-80"
                    }`}
                  >
                    <img
                      src={pais.svg}
                      alt={pais.name}
                      className="h-[25px] w-[25px]"
                    />
                    <p className="text-[14px] font-bold">{pais.name}</p>
                  </article>
                ))}
              </section>
              <section className="flex h-full w-full flex-col items-center justify-center gap-1 shadow-xl">
                {payments.map((payment, index) => (
                  <>
                    <article
                      key={index}
                      className="flex h-[76px] w-[327px] items-center justify-between gap-4"
                    >
                      <div className="flex w-[105px] flex-col items-center justify-center">
                        <img
                          src={payment.svg}
                          alt={payment.name}
                          className={`${payment.size}`}
                        />
                        <p className="text-[14px] font-bold">{payment.name}</p>
                      </div>
                      <p className="text-[40px] font-light text-black">
                        {payment.time}
                      </p>
                    </article>
                    <div className="h-[2px] w-1/2 bg-gray-30"></div>
                  </>
                ))}
              </section>
            </div>
          </div>
          <div className="flex h-[614px] w-[300px] flex-col gap-2">
            <iframe
              src="https://intportal.vercel.app/tuDominio/terminal/MXN_0"
              title="TuDominio"
              className="h-[500px] w-full"
            ></iframe>
            <p className="w-[239px] text-gray-70">
              Tarifa real, todo incluido, simple, elegante, la terminal como
              siempre debío de haber sido.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Cobertura;
