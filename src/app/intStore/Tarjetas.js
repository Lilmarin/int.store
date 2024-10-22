import React from "react";
import "../../components/Style/Home.scss";
import {
  Boton,
  Divcenter,
  Divcolumns,
  Divcolumn,
  Homecomponent,
  Divitem,
  Numbercontainer,
  H5Home,
  H1Home,
  H2Home,
  H3Home,
  Numberinside,
  HPHome,
  Bottomtext,
} from "./StyledComponents.js";
import Circleint from "../../Img/PhoneWithTerminal.png";
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";

const Tarjetas = ({ selectedOption }) => {
  return (
    <Homecomponent className="home-component">
      <Divcolumns
        gap="1%"
        columns="repeat(2, 1fr)"
        columnsmobile="repeat(1,1fr)"
      >
        <Divcenter>
          <H5Home> {I18n.get("Tithoutfeeds")}</H5Home>
          <h1
            style={{ fontFamily: "Red Hat Display" }}
            className="w-[90%] font-bold text-white lg:text-[48px] lg:leading-[60px]"
          >
            {I18n.get("TarjetasTitle")}
          </h1>
          <H2Home> {I18n.get("Tsiremo")}</H2Home>
          <NavLink className="enlacebtn2" to="/registro_terminal">
            <Boton peligro onClick={() => console.log("Clic en el botón")}>
              {I18n.get("Error404Button")}
            </Boton>
          </NavLink>
        </Divcenter>
        <div className="Left-Container-2 sm:mb-0 md:mb-10 lg:mb-0">
          <img
            className="img-front-circle sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[475px] lg:w-[475px] "
            src={Circleint}
            alt="Int Store"
          />
        </div>
      </Divcolumns>
      <Divcolumn
        backgroundcolor="rgba(255, 255, 255, 0.40);
"
        className="bottom-function"
      >
        <H3Home> {I18n.get("THowWorks")}</H3Home>
        <Divcolumns
          columns="repeat(4,1fr)"
          columnsmobile="repeat(2,1fr)"
          gap="0%"
        >
          <Divitem>
            <Numbercontainer className="person-one">
              <Numberinside> {I18n.get("TNumberone")}</Numberinside>
            </Numbercontainer>
            <HPHome> {I18n.get("Tsign")}</HPHome>
          </Divitem>

          <Divitem>
            <Numbercontainer>
              <Numberinside> {I18n.get("TNumbertwo")}</Numberinside>
            </Numbercontainer>
            <HPHome> {I18n.get("TMakeyouBudget")}</HPHome>
          </Divitem>

          <Divitem>
            <Numbercontainer>
              <Numberinside> {I18n.get("TNumberthree")}</Numberinside>
            </Numbercontainer>
            <HPHome> {I18n.get("TMuestrala")}</HPHome>
          </Divitem>

          <Divitem>
            <Numbercontainer>
              <Numberinside> {I18n.get("TNumberFour")}</Numberinside>
            </Numbercontainer>
            <HPHome> {I18n.get("TWin")}</HPHome>
          </Divitem>
        </Divcolumns>
      </Divcolumn>
      <Divcolumn>
        <Bottomtext
          onClick={() => (window.location.href = "https://int.store")}
        >
          {" "}
          {I18n.get("IBrand")}
        </Bottomtext>
        <p
          className="fontRedHat cursor-pointer text-[14px] text-white"
          onClick={() =>
            (window.location.href = "https://transactions.int.store")
          }
        >
          {I18n.get("ILastTransactions")}
        </p>
      </Divcolumn>
    </Homecomponent>
  );
};

export default Tarjetas;
