import React, { useState } from "react";
import "./Header.scss";
import Select from "../Select";
// eslint-disable-next-line
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";
import LogoTipo from "../../Img/Logotipo.png";
import LogoEspanol from "../../Img/LogoEspanol.png";
// eslint-disable-next-line
const Header = ({ selectedOption, handler, executeScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const language = localStorage.getItem("language") ?? "en";

  return (
    <div className="Header-container">
      <div className="la-select" isOpen={isOpen}>
        <NavLink to="/" className="Nav-left">
          {language === "es" ? (
            <img className="logo" alt="Logotipo Español" src={LogoEspanol} />
          ) : (
            <img className="logo" alt="Logotipo Int.Store" src={LogoTipo} />
          )}
        </NavLink>{" "}
        <div className="Select-item-2">
          {" "}
          <Select
            className="Select-item"
            selectedOption={selectedOption}
            handler={handler}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
