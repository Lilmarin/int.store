import React, { useState } from "react";
import "../components/Style/Error404.scss";
import { I18n } from "aws-amplify/utils";
import Imagentelefono from "../Img//Phone_Without_Vector.png";
import Circleint from "../Img/Circle_Int.png";
import PhoneTerminal from "../Img/PhoneTerminal.png";
import chevron from "../Img/chevron-right.svg";
import Carrusel from "./Error404/Carrusel.js";
import background from "../Img/Backkground_Purple.png";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  const images = [Circleint, Imagentelefono, PhoneTerminal];
  const [positionCarousel, setPositionCarousel] = useState(0);
  const moveToRight = () => {
    setPositionCarousel((current) => (current === 2 ? 0 : current + 1));
  };
  const moveToLeft = () => {
    setPositionCarousel((current) => (current === 0 ? 2 : current - 1));
  };

  return (
    <>
      <div
        style={{
          fontFamily: "Red Hat Display",
        }}
        className="justify-betweens carrusel-component relative flex h-full w-full  flex-col sm:px-[16px] sm:py-[70px] md:px-[80px] lg:px-[100px] lg:pt-[100px]"
      >
        <section className="flex sm:flex-col lg:h-[633px] lg:w-[1236px] lg:flex-row">
          {/* Contenido */}
          <div className="lg:w-[50%] lg:pt-[115px]">
            <section className={`text-white`}>
              <h4 className="sm:text-[16px] md:text-center md:text-[20px] lg:text-start">
                {I18n.get("Error404Ups")}
              </h4>
              <h1 className="font-bold sm:text-[36px] sm:leading-[34px] md:text-center md:text-[48px] md:leading-[60px] lg:text-start lg:text-[70px] lg:leading-[90px]">
                {I18n.get("ENotFound")}
              </h1>
              <p className="mt-4 font-light sm:text-[14px] sm:leading-[18px] md:text-[20px] md:leading-[30px] lg:text-[24px] lg:leading-[32px]">
                {I18n.get("EText")}
              </p>
              <NavLink to="/registro_principal">
                <button className="w-full rounded-[32px] bg-white text-[#2A2FAB] sm:mt-[24px] sm:h-[40px] sm:text-[14px] md:h-[44px] md:text-[16px] lg:mt-[32px] lg:h-[60px] lg:text-[18px]">
                  {I18n.get("GetDomain")}
                </button>
              </NavLink>
            </section>
          </div>
          {/* Carrusel */}
          <div className="relative sm:h-[375px] md:h-[470px] lg:h-auto lg:w-[50%]">
            <Carrusel
              positionCarousel={positionCarousel}
              moveToRight={moveToRight}
              moveToLeft={moveToLeft}
            />
            <button className="absolute top-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white sm:right-0 md:right-5 lg:right-0">
              <img src={chevron} alt="chevron" onClick={moveToRight} />
            </button>
            <button className="absolute top-1/2 z-10 flex h-9 w-9 rotate-180 items-center justify-center rounded-full bg-white sm:left-0 md:left-5 lg:left-0">
              <img src={chevron} alt="chevron" onClick={moveToLeft} />
            </button>
            {/*Indicador de imagen*/}
            <section className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 pb-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`h-3 w-3 rounded-full bg-white  ${
                    index === positionCarousel ? "opacity-100" : "opacity-50"
                  }`}
                ></div>
              ))}
            </section>
          </div>
        </section>
        <p className="absolute left-0 right-0 text-center text-white sm:bottom-5 sm:text-[16px] md:bottom-10 md:text-[20px] ">
          {I18n.get("IBrand")}
        </p>
      </div>
    </>
  );
};

export default Error404;
