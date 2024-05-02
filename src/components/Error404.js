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
          backgroundImage: `url(${background})`,
        }}
        className="relative w-full sm:flex sm:h-full sm:flex-col sm:px-[16px] md:h-screen md:px-[80px] lg:grid lg:grid-cols-2 lg:px-[100px]"
      >
        {/**Column 1*/}
        <div className="w-full  sm:h-full md:h-[425px] lg:h-screen">
          <section className="text-white sm:pt-[97px] lg:pt-[200px]">
            <p className="sm:text-[12px] md:text-center md:text-[20px] lg:text-start">
              {I18n.get("Error404Ups")}
            </p>
            <h1 className="mt-1 font-bold sm:text-[36px] sm:leading-[34px] md:text-center md:text-[48px] md:leading-[60px] lg:text-start lg:text-[72px] lg:leading-[90px]">
              {I18n.get("ENotFound")}
            </h1>
            <h3 className="mt-4 font-light  sm:text-[12px] sm:leading-[18px] md:text-[20px] md:leading-[30px] lg:text-[24px] lg:leading-[32px]">
              {I18n.get("EText")}
            </h3>
            <NavLink to="/registro_principal">
              <button className="w-full rounded-[32px] bg-white text-[#2A2FAB] sm:mt-[24px] sm:h-[40px] sm:text-[14px] md:h-[44px] md:text-[16px] lg:mt-[32px] lg:h-[60px] lg:text-[18px]">
                {I18n.get("GetDomain")}
              </button>
            </NavLink>
          </section>
        </div>
        {/**Column 2*/}
        <div className="relative flex w-full justify-center sm:mt-0 sm:h-[390px] md:h-[475px] lg:mt-0 lg:h-screen lg:items-center">
          <Carrusel
            positionCarousel={positionCarousel}
            setPositionCarousel={setPositionCarousel}
            moveToRight={moveToRight}
          />
          <div className="absolute z-50 flex flex-row gap-3 sm:bottom-14 md:bottom-3 lg:bottom-20">
            {images.map((image, index) => (
              <div
                className={`h-3 w-3 rounded-full bg-white
              ${index === positionCarousel ? "opacity-100" : "opacity-50"}`}
              ></div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="absolute z-20 flex h-9 w-9 rotate-180 items-center justify-center rounded-full bg-white sm:left-0 md:left-10 lg:left-0"
              onClick={moveToLeft}
            >
              <img src={chevron} alt="Left" />
            </button>
            <button
              onClick={moveToRight}
              className="absolute z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white sm:right-0 md:right-10 lg:right-0"
            >
              <img src={chevron} alt="Right" />
            </button>
          </div>
        </div>
        <p className="absolute left-0 right-0 mt-5 text-center text-white sm:bottom-5 lg:bottom-10">
          {I18n.get("IBrand")}
        </p>{" "}
      </div>
    </>
  );
};

export default Error404;
