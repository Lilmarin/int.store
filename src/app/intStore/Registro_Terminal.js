import React, { useEffect } from "react";
import "../../components/Style/Registro.scss";
import {
  Bottomtext,
  DivColumnRegister,
  Divcolumns2,
  H1Home,
  HText,
  HText2,
  PurpleSubtitle,
} from "./StyledComponents";
import Logoint from "../../Img/IconInt.png";
import { I18n } from "aws-amplify/utils";
import Form from "../../components/Form/Form";
import { scriptGoogle } from "../../lib/utils/scriptGoogle";

const Registro = () => {
  const [loading, setLoading] = React.useState(true);
  const language = localStorage.getItem("language") ?? "en";
  useEffect(() => {
    scriptGoogle();
  }, []);
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
            {I18n.get("RTSales")}
          </H1Home>
          <HText>{I18n.get("RTOutil")}</HText>
          <div>
            <Bottomtext
              className="btn-text pb-2"
              onClick={() => (window.location.href = "https://int.store")}
            >
              {I18n.get("IBrand")}
            </Bottomtext>
            <p
              className="btn-text fontRedHat text-whitefontRedHat cursor-pointer text-[14px]"
              onClick={() =>
                (window.location.href = "https://transactions.int.store")
              }
            >
              {I18n.get("ILastTransactions")}
            </p>
          </div>
        </DivColumnRegister>
        <DivColumnRegister className="registro-right">
          <div className="mt-[50px] flex h-full w-full flex-col items-center justify-center">
            <PurpleSubtitle>{I18n.get("RPWaitList")}</PurpleSubtitle>
            <HText2>{I18n.get("RTSininnow")}</HText2>

            {loading && (
              <>
                <Form />
              </>
            )}
            <iframe
              hidden={loading}
              className="Iframe-form"
              style={{
                width: "80%",
                height: "100%",
              }}
              src="https://link.superleads.mx/widget/form/AX2ylBDNIejjpZYbFKGo"
              id="inline-AX2ylBDNIejjpZYbFKGo"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Lista de espera V1"
              data-height="400"
              data-layout-iframe-id="inline-AX2ylBDNIejjpZYbFKGo"
              data-form-id="AX2ylBDNIejjpZYbFKGo"
              title="Lista de espera V1"
              onLoad={() => setLoading(false)}
            ></iframe>
            <script src="https://link.superleads.mx/js/form_embed.js"></script>
          </div>
        </DivColumnRegister>
      </Divcolumns2>
    </div>
  );
};
export default Registro;
