import React from "react";
import "../components/Style/Home.scss";
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
import Imagentelefono from "../Img/Phone_Without_Vector.png";
import Vectorint from "../Img/Vector_Int_White.png";
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Homecomponent className="home-component">
      <Divcolumns columns="repeat(2, 1fr)" columnsmobile="repeat(1,1fr)">
        <Divcenter>
          <H5Home>{I18n.get("EWithoutFeeds")}</H5Home>
          <H1Home>{I18n.get("EMakeyourEcommerce")}</H1Home>
          <H2Home className="simply-money">
            {I18n.get("ESimplifyrecive")}
          </H2Home>
          <NavLink className="enlacebtn2" to="/registro_ecommerce">
            <Boton peligro onClick={() => console.log("Clic en el botón")}>
              {I18n.get("Tbtnfree")}
            </Boton>
          </NavLink>
        </Divcenter>
        <div className="Left-Container">
          <img className="img-back" src={Vectorint} alt="Vector Int" />
          <img className="img-front" src={Imagentelefono} alt="Int Store" />
        </div>
      </Divcolumns>
      <Divcolumn
        backgroundcolor="rgba(255, 255, 255, 0.40);
"
        className="bottom-function"
      >
        <H3Home>{I18n.get("THowWorks")}</H3Home>
        <Divcolumns
          columns="repeat(4,1fr)"
          columnsmobile="repeat(2,1fr)"
          gap="0%"
        >
          <Divitem>
            <Numbercontainer className="person-one">
              <Numberinside>{I18n.get("TNumberone")}</Numberinside>
            </Numbercontainer>
            <HPHome>{I18n.get("Tsign")}</HPHome>
          </Divitem>

          <Divitem>
            <Numbercontainer>
              <Numberinside>{I18n.get("TNumbertwo")}</Numberinside>
            </Numbercontainer>
            <HPHome>{I18n.get("ETwoStep")}</HPHome>
          </Divitem>

          <Divitem>
            <Numbercontainer>
              <Numberinside>{I18n.get("TNumberthree")}</Numberinside>
            </Numbercontainer>
            <HPHome>{I18n.get("EThreeStep")}</HPHome>
          </Divitem>

          <Divitem>
            <Numbercontainer>
              <Numberinside>{I18n.get("TNumberFour")}</Numberinside>
            </Numbercontainer>
            <HPHome>{I18n.get("TWin")}</HPHome>
          </Divitem>
        </Divcolumns>
      </Divcolumn>
      <Divcolumn>
        <Bottomtext>{I18n.get("IBrand")}</Bottomtext>
      </Divcolumn>
    </Homecomponent>
  );
};

export default Home;
