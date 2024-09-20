import React, { useEffect } from "react";
import "../../components/Style/Home2.scss";
import "../../components/Style/flexed-columns.scss";
import {
  Boton,
  Divcenter,
  Divcolumns,
  Divcolumn,
  Homecomponent,
  H5Home,
  H1Home,
  Bottomtext,
} from "./StyledComponents.js";
import Terminal from "../../Img/Elipse_1.png";
import Ecomerce from "../../Img/Elipse_2.png";
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";
import { scriptGoogle } from "../../lib/utils/scriptGoogle.js";

const Index = () => {
  useEffect(() => {
    scriptGoogle();
  }, []);
  return (
    <Homecomponent className="home-component home-component-modified homeindex">
      <Divcolumns gap="0%" columns="100%" columnsmobile="repeat(1,1fr)">
        <Divcenter className="flexed-columns">
          {/* <H5Home className="sin-mensualidades">
            {I18n.get("IWithoutpayment")}
          </H5Home> */}
          <H1Home className="potencializa">{I18n.get("Ipotential")}</H1Home>
          <H1Home marginf="1vh auto 3vh" fontsize="7.2vh" className="tunegocio">
            {I18n.get("IHeadertitle1")}
          </H1Home>
          <H5Home className="text-light">{I18n.get("IHeadertitle2")}</H5Home>
          {/* <NavLink className="enlacebtn2" to="/registro_principal"> */}
          <NavLink className="enlacebtn2" to="/">
            {" "}
            <Boton
              bwidth="40%"
              bmarg="auto"
              peligro
              onClick={() =>
                (window.location.href =
                  "https://intportal.vercel.app/tuDominio/terminal/MXN_0")
              }
            >
              {I18n.get("IButton1")}
            </Boton>
          </NavLink>
        </Divcenter>
      </Divcolumns>
      <Divcolumns className="Botom-container-items" columns="48% 48%" gap="4%">
        <NavLink to="/ecommerce" className="CONTAINER-CURSOR">
          <div className="Item-Home">
            <Divcolumns
              columnsmobile="100%"
              gapmobile="0%"
              columns="30% 60%"
              gap="10%"
              className="ind-columns"
            >
              <img src={Ecomerce} alt="Terminal digital" />
              <div className="text-cont1">
                <H5Home className="title-titem">
                  {I18n.get("IEcommercetitle")}
                </H5Home>
                <NavLink className="Links-Landings" to="/ecommerce" exact>
                  <Boton bwidth="auto" className="btn-links" colort="#F2F3FF">
                    {I18n.get("ISeemore")}
                  </Boton>
                </NavLink>
              </div>
            </Divcolumns>
          </div>
        </NavLink>
        <NavLink to="/terminal" className="CONTAINER-CURSOR">
          <div className="Item-Home">
            <Divcolumns
              columnsmobile="100%"
              gapmobile="0%"
              columns="30% 60%"
              gap="10%"
              className="ind-columns"
            >
              <img src={Terminal} alt="Terminal digital" />
              <div className="text-cont1">
                <H5Home className="title-titem">
                  {I18n.get("ITerminaltitle")}
                </H5Home>
                <NavLink className="Links-Landings" to="/terminal" exact>
                  <Boton bwidth="auto" className="btn-links" colort="#F2F3FF">
                    {I18n.get("ISeemore")}
                  </Boton>
                </NavLink>
              </div>
            </Divcolumns>
          </div>{" "}
        </NavLink>
      </Divcolumns>

      <Divcolumn>
        <Bottomtext> {I18n.get("IBrand")}</Bottomtext>
      </Divcolumn>
    </Homecomponent>
  );
};

export default Index;
