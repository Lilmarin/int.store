import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function PageWrapper(props) {
  return (
    <React.Fragment>
      <Header selectedOption={props.selectedOption} handler={props.handler} />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
