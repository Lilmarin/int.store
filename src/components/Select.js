import React from "react";
import "../components/Style/Select.scss";
import { I18n } from "aws-amplify/utils";

const Two = ({ selectedOption, handler }) => {
  return (
    <div className="input-field select-xvc">
      <select
        name="idiomas"
        value={selectedOption}
        onChange={handler}
        id="opciones"
        className="idiomas"
      >
        <option className="Option-item" key={"es"} value={"es"}>
          {I18n.get("es")}
        </option>
        <option className="Option-item" key={"en"} value={"en"}>
          {I18n.get("en")}
        </option>
      </select>
    </div>
  );
};

export default Two;
