import React from "react";
import Footer from "../Footer/Footer";
import HeaderQr from "../Header/HeaderQr";

export default function PageWrapperQr(props) {
  return (
    <React.Fragment>
      <HeaderQr selectedOption={props.selectedOption} handler={props.handler} />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
