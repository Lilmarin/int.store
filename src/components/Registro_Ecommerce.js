import React from "react";
import "../components/Style/Registro.scss";
import {
  Bottomtext,
  DivColumnRegister,
  Divcolumns2,
  H1Home,
  HText,
  HText2,
  PurpleSubtitle,
} from "./StyledComponents";
import Logoint from "./../Img/IconInt.png";
import { I18n } from "aws-amplify/utils";
import Form from "./Form/Form";

const Registro = () => {
  const [loading, setLoading] = React.useState(true);
  // Renderizar la salida del componente
  return (
    <div className="registro-component">
      <Divcolumns2
        className="registro-container"
        gap="0%"
        columns="repeat(2, 1fr)"
        columnsmobile="repeat(1, 1fr)"
      >
        <DivColumnRegister
          width="77%"
          alignitems="flex-start"
          className="registro-left"
        >
          <img className="icon-int" alt="Logotipo Int.Store" src={Logoint} />
          <H1Home lineheight="6vh" fontsize="6vh">
            {I18n.get("REImproveyoursales")}
          </H1Home>
          <HText>{I18n.get("RETool")}</HText>
          <Bottomtext className="btn-text">{I18n.get("IBrand")}</Bottomtext>
        </DivColumnRegister>
        <DivColumnRegister className="registro-right">
          <PurpleSubtitle>{I18n.get("RPWaitList")}</PurpleSubtitle>
          <HText2>{I18n.get("RPSingInNow")}</HText2>
          {loading && (
            <>
              <Form />
            </>
          )}
          <iframe
            hidden={loading}
            className="Iframe-form"
            src="https://link.superleads.mx/widget/form/JMoPiGk1Vvt9x1EnhPJa"
            id="inline-JMoPiGk1Vvt9x1EnhPJa"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Lista de espera V2 _Ecommerce"
            data-height="400"
            data-layout-iframe-id="inline-JMoPiGk1Vvt9x1EnhPJa"
            data-form-id="JMoPiGk1Vvt9x1EnhPJa"
            title="Lista de espera V2 _Ecommerce"
            onLoad={() => setLoading(false)}
          ></iframe>
          <script src="https://link.superleads.mx/js/form_embed.js"></script>
        </DivColumnRegister>
      </Divcolumns2>
    </div>
  );
};
export default Registro;
