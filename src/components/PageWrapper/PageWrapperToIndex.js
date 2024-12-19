import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderToIndex from "../Header/HeaderToIndex";

export default function PageWrapperToIndex(props) {
  return (
    <React.Fragment>
      <HeaderToIndex
        selectedOption={props.selectedOption}
        handler={props.handler}
      />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
