import React from "react";
import "../components/Style/Error404.scss";
import {
  Divcenter,
  Divcolumns,
  Divcolumn,
  Homecomponent,
  H5Home,
  H1Home,
  Bottomtext,
  BotonnotFound,
} from "./StyledComponents.js";
import Imagotipo_vector from "../Img/Social.png";
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <Homecomponent className="Error-component">
      <Divcolumns gap="0%" columns="100%" columnsmobile="repeat(1,1fr)" className="childerror">
        <Divcenter className="flexed-columns">
          <img
            className="logo"
            alt="Logotipo Int.Store"
            src={Imagotipo_vector}
          />

          <H5Home className="sin-mensualidades">{I18n.get("ETitle")}</H5Home>
          <H1Home marginf="2vh auto 3vh" fontsize="7.2vh" className="tunegocio">
            {I18n.get("ENotFound")}
          </H1Home>
          <H5Home className="text-light">{I18n.get("EText")}</H5Home>
        </Divcenter>
      </Divcolumns>
      <Divcolumns className="Botom-container-items" columns="100%" gap="0%">
        <div className="Item-Home">
          <NavLink className="enlacebtn2" exact to="/registro_principal">
            {" "}
            <BotonnotFound
              colort="#ffffff"
              bwidth="100%"
              bmarg="1em auto"
              onClick={() => console.log("Clic en el botón")}
            >
              {I18n.get("Eregnow")}
            </BotonnotFound>
          </NavLink>
        </div>
      </Divcolumns>

      <Divcolumn>
        <Bottomtext className="itn">{I18n.get("IBrand")}</Bottomtext>
      </Divcolumn>
    </Homecomponent>
  );
};

export default Error404;
