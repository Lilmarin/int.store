import React, { useState } from "react";
import "../components/Style/Registro.scss";
import {
  Bottomtext,
  DivColumnRegister,
  Divcolumns,
  Divcolumns2,
  HText3,
  ItemSocial,
  PurpleSubtitle,
} from "./StyledComponents";
import Logoint2 from "./../Img/Star_coin.png";
import Carousel from "./Carousel";
import Whatsapp from "./../Img/Whatsapp.png";
import X from "./../Img/x.png";
import Compartir from "./../Img/compartir.png";
import { I18n } from "aws-amplify/utils";

const Gracias = () => {
  // eslint-disable-next-line
  const [enlace, setEnlace] = useState("https://int.store");

  const copiarEnlace = () => {
    // Crear un elemento de entrada de texto oculto
    const input = document.createElement("input");
    input.value = enlace;
    document.body.appendChild(input);
    input.select();

    // Ejecutar el comando de copia al portapapeles
    document.execCommand("copy");

    // Eliminar el elemento de entrada de texto
    document.body.removeChild(input);

    // Puedes mostrar un mensaje de confirmación
    alert("Enlace copiado al portapapeles");
  };

  return (
    <div className="registro-component">
      <Divcolumns2
        className="registro-container"
        gap="0%"
        columns="50% 50%"
        columnsmobile="100%"
      >
        <DivColumnRegister
          width="77%"
          alignitems="center"
          className="registro-left registro-left-22 alineacionmobile"
        >
          <img className="icon-int" alt="Logotipo Int.Store" src={Logoint2} />
          <div className="carousel-conti">
            <Carousel />
          </div>

          <Bottomtext className="btn-text">{I18n.get("IBrand")}</Bottomtext>
        </DivColumnRegister>
        <DivColumnRegister className="registro-right registro-right-22 alineacionmobile2 alineacionmobile222">
          <PurpleSubtitle>{I18n.get("RPWaitList")}</PurpleSubtitle>

          <HText3>{I18n.get("GShare")}</HText3>
          <Divcolumns
            gap=".5%"
            className="Social-columns"
            columns="repeat(3,1fr)"
          >
            <ItemSocial href="https://api.whatsapp.com/send?text=Echa un vistazo a esto: https://int.store">
              <img src={Whatsapp} alt="Compartir en Whatsapp" />
            </ItemSocial>
            {/* <ItemSocial href="https://t.me/?text=Echa un vistazo a esto: https://int.store">
              <img src={Telegram} alt="Compartir en Telegram" />
            </ItemSocial> */}
            <ItemSocial href="https://twitter.com/intent/tweet?text=Echa un vistazo a esto: https://int.store">
              <img src={X} alt="Compartir en X" />
            </ItemSocial>
            {/* <ItemSocial href="https://www.messenger.com/t/?text=Echa un vistazo a esto: https://int.store">
              <img src={Messenger} alt="Compartir en Messenger" />
            </ItemSocial> */}
            {/* <ItemSocial href="https://www.facebook.com/sharer/sharer.php?u=&quote=Echa un vistazo a esto: https://int.store">
              <img src={Facebook} alt="Compartir en Facebook" />
            </ItemSocial> */}
            <ItemSocial onClick={copiarEnlace} href="#">
              <img src={Compartir} alt="Compartir" />
            </ItemSocial>
          </Divcolumns>
        </DivColumnRegister>
      </Divcolumns2>
    </div>
  );
};
export default Gracias;
