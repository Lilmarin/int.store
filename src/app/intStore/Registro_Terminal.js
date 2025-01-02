import React, { useEffect, useState } from "react";
import "../../components/Style/Registro.scss";
import Logoint from "../../Img/IconInt.png";
import { I18n } from "aws-amplify/utils";
import Form from "../../components/Form/Form";
import { scriptGoogle } from "../../lib/utils/scriptGoogle";

const Registro = () => {
  const [loading, setLoading] = React.useState(true);
  const [iframeStyle, setIframeStyle] = useState({
    width: "500px",
    height: "500px",
  });

  useEffect(() => {
    scriptGoogle();
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setIframeStyle({
          width: "100%", // Ajuste en móvil
          height: "500px",
        });
      } else {
        setIframeStyle({
          width: "500px", // Ajuste en pantallas grandes
          height: "500px",
        });
      }
    };

    // Llama la función al cargar y cada vez que cambia el tamaño de la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Renderizar la salida del componente
  return (
    <section className="relative flex h-screen w-full font-bold sm:flex-col lg:flex-row">
      <div className="relative flex w-full flex-col items-center justify-center bg-primary-40 text-white sm:h-[500px] sm:pt-14 lg:h-full lg:pt-0">
        <div className="font-red-hat flex flex-col gap-2 sm:w-full sm:items-center sm:text-center lg:w-[556px] lg:items-start lg:text-left">
          <img
            className="icon-int h-14 w-14"
            alt="Logotipo Int.Store"
            src={Logoint}
          />
          <h1 className="sm:text-[25px] sm:leading-normal lg:text-[55px] lg:leading-[50px]">
            {I18n.get("REImproveyoursales")}
          </h1>
          <p className="text-[20px] font-light">{I18n.get("RETool")}</p>
        </div>
        <footer className="absolute bottom-5 flex-col text-center sm:hidden lg:flex">
          <p
            className="cursor-pointer text-[12px] font-light"
            onClick={() => (window.location.href = "https://int.store")}
          >
            {I18n.get("IBrand")}
          </p>
          <p
            className="cursor-pointer text-[12px] font-light"
            onClick={() =>
              (window.location.href = "https://transactions.int.store")
            }
          >
            {I18n.get("ILastTransactions")}
          </p>
        </footer>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center sm:w-full sm:px-4 lg:w-[556px] lg:px-[100px]">
          <h1 className="cursor-pointer text-[30px] font-bold text-primary-50">
            {I18n.get("RPWaitList")}
          </h1>
          <p className="text-[16px] font-light">{I18n.get("RPSingInNow")}</p>
          {loading && (
            <>
              <Form />
            </>
          )}
          <iframe
            hidden={loading}
            className="Iframe-form"
            style={iframeStyle} // Estilo dinámico
            src="https://link.superleads.mx/widget/form/JMoPiGk1Vvt9x1EnhPJa"
            id="inline-JMoPiGk1Vvt9x1EnhPJa"
            title="Lista de espera V2 _Ecommerce"
            onLoad={() => setLoading(false)}
          ></iframe>
          {/* <iframe
            hidden={loading}
            className="Iframe-form"
            style={{
              width: "80%",
              height: "100%",
            }}
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
          ></iframe> */}
        </div>
      </div>
      <footer className="w-full text-center text-primary-50 sm:flex sm:flex-col lg:absolute lg:bottom-2 lg:hidden">
        <p
          className="cursor-pointer text-[12px] font-light"
          onClick={() => (window.location.href = "https://int.store")}
        >
          {I18n.get("IBrand")}
        </p>
      </footer>
    </section>
  );
};
export default Registro;
