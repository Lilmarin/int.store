import React, { useState } from "react";
import "./Header.scss";
import Select from "../Select";
// eslint-disable-next-line
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";
import LogoTipo from "../../Img/Logotipo.png";
// eslint-disable-next-line
const Header = ({ selectedOption, handler, executeScroll }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Header-container">
      <div className="la-select" isOpen={isOpen}>
        <NavLink to="/" className="Nav-left">
          <img className="logo" alt="Logotipo Int.Store" src={LogoTipo} />
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
