import bgPurple from "../../Img/Backkground_Purple.png";
import "../../components/Style/Registro.scss";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import mexicosvg from "../../Img/country/México.svg";
import argentinasvg from "../../Img/country/Argentina.svg";
import colombiasvg from "../../Img/country/Colombia.svg";
import españasvg from "../../Img/country/España.svg";
import usasvg from "../../Img/country/US.svg";
import brazilsvg from "../../Img/country/Brazil.svg";
import perusvg from "../../Img/country/Peru.svg";
import venezuelasvg from "../../Img/country/Venezuela.svg";
import chilesvg from "../../Img/country/Chile.svg";
import guatemalasvg from "../../Img/country/Guatemala.svg";
import ecuadorsvg from "../../Img/country/Ecuador.svg";
import boliviasvg from "../../Img/country/Bolivia.svg";
import Bitcoin from "../../Img/payments/Bitcoin.svg";
import Coin from "../../Img/payments/Coin.svg";
import Efectivo from "../../Img/payments/Efectivo.svg";
import Tarjetas from "../../Img/payments/Tarjetas.svg";
import Transferencia from "../../Img/payments/Transferencia.svg";
import { Input, MenuItem, Select } from "@mui/material";
import { I18n } from "aws-amplify/utils";

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
    { name: "Brazil", svg: brazilsvg, enabled: false },
    { name: "México", svg: mexicosvg, enabled: true },
    { name: "Colombia", svg: colombiasvg, enabled: false },
    { name: "Argentina", svg: argentinasvg, enabled: false },
    { name: "Perú", svg: perusvg, enabled: false },
    { name: "Venezuela", svg: venezuelasvg, enabled: false },
    { name: "Chile", svg: chilesvg, enabled: false },
    { name: "Guatemala", svg: guatemalasvg, enabled: false },
    { name: "Ecuador", svg: ecuadorsvg, enabled: false },
    { name: "Bolivia", svg: boliviasvg, enabled: false },
    { name: "España", svg: españasvg, enabled: false },
    { name: "USA", svg: usasvg, enabled: false },
  ];

  const payments = [
    {
      name: "Tarjetas",
      svg: Tarjetas,
      time: "5% 48h",
      size: "sm:w-[40px] lg:w-[61px] sm:h-[40px] lg:h-[61px]",
    },
    {
      name: "Efectivo",
      svg: Efectivo,
      time: "3% 24h",
      size: "sm:w-[40px] lg:w-[61px] sm:h-[40px] lg:h-[61px]",
    },
    {
      name: "Transferencia",
      svg: Transferencia,
      time: "2% 12h",
      size: "sm:w-[40px] lg:w-[55px] sm:h-[40px] lg:h-[55px]",
    },
    {
      name: "Bitcoin",
      svg: Bitcoin,
      time: "1% 1h",
      size: "sm:w-[40px] lg:w-[61px] sm:h-[40px] lg:h-[61px]",
    },
    {
      name: "INT",
      svg: Coin,
      time: "0% 0s",
      size: "sm:w-[40px] lg:w-[50px] sm:h-[40px] lg:h-[50px]",
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
        <section className="flex items-center gap-14 rounded-xl bg-white sm:h-[750px] sm:w-[380px] sm:flex-col sm:justify-start sm:overflow-auto lg:h-[654px] lg:w-[1200px] lg:flex-row lg:justify-center lg:overflow-hidden ">
          <div className="flex flex-col sm:h-full sm:w-full lg:h-[595px] lg:w-[739px] ">
            {/**Continentes */}
            <section className="w-full flex-row gap-1 text-black sm:hidden lg:flex">
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
            <section className="h-[60px] w-full items-center justify-center gap-4 sm:flex lg:hidden">
              <Select
                fullWidth={true}
                value={selectedContinent}
                onChange={(e) => setSelectedContinent(e.target.value)}
              >
                {continentes.map((continente, index) => (
                  <MenuItem key={index} value={continente.name}>
                    {continente.name}
                  </MenuItem>
                ))}
              </Select>
              <Select
                fullWidth={true}
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {paises.map((pais, index) => (
                  <MenuItem key={index} value={pais.name}>
                    {pais.name}
                  </MenuItem>
                ))}
              </Select>
            </section>
            <div className="flex h-full flex-row items-start text-primary-50 sm:mt-0 lg:mt-5">
              {/**Paises */}
              <section className="flex-col sm:hidden sm:h-full sm:w-full lg:flex lg:h-[444px] lg:w-[262px]">
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
              <section className="flex h-full w-full flex-col items-center gap-1 sm:mt-3 sm:justify-start sm:px-10 lg:mt-0 lg:justify-center lg:px-0 lg:shadow-xl">
                {payments.map((payment, index) => (
                  <>
                    <article
                      key={index}
                      className="flex h-[76px] items-center justify-between gap-4 sm:w-full lg:w-[327px]"
                    >
                      <div className="flex w-[105px] flex-col items-center justify-center">
                        <img
                          src={payment.svg}
                          alt={payment.name}
                          className={`${payment.size}`}
                        />
                        <p className="text-[14px] font-bold">{payment.name}</p>
                      </div>
                      <p className="font-light text-black sm:text-[30px] lg:text-[40px]">
                        {payment.time}
                      </p>
                    </article>
                    <div className="h-[2px] bg-gray-30 sm:w-full lg:w-1/2"></div>
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
            <p className="w-[239px] text-gray-70">{I18n.get("CText")}</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Cobertura;
