import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Ecommerce from "./components/Ecommerce";
import RegistroPrincipal from "./components/Registro_Principal";
import Gracias from "./components/Gracias";
import RegistroEcommerce from "./components/Registro_Ecommerce";
import RegistroTerminal from "./components/Registro_Terminal";
import Error404 from "./components/Error404";
import Index from "./components/Index2";
import Terminal from "./components/Terminal";
// eslint-disable-next-line
import vocabularies from "../src/vocabularies";
import { I18n } from "aws-amplify/utils";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Tarjetas from "./components/Tarjetas";
import Qr from "./components/Qr";
import GaleriaImagenesQr from "./components/Qr/GaleriaImagenesQr";

function App() {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("language") ?? "en",
  );

  I18n.setLanguage(selectedOption);

  const cambiarIdioma = (value) => {
    I18n.setLanguage(value);
  };

  // eslint-disable-next-line
  const handler = (e) => {
    localStorage.setItem("language", e.target.value);
    cambiarIdioma(e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/terminal"
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <Terminal selectedOption={selectedOption} />
            </PageWrapper>
          }
        />
        <Route
          path="/ecommerce"
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <Ecommerce />
            </PageWrapper>
          }
        />
        <Route
          path="/registro_principal"
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <RegistroPrincipal />
            </PageWrapper>
          }
        />
        <Route
          path="/registro_terminal"
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <RegistroTerminal />
            </PageWrapper>
          }
        />
        <Route
          path="/registro_ecommerce"
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <RegistroEcommerce />
            </PageWrapper>
          }
        />
        <Route
          path="/gracias"
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <Gracias />
            </PageWrapper>
          }
        />
        <Route
          path="/tarjetas"
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <Tarjetas />
            </PageWrapper>
          }
        />
        <Route
          path="/QR"
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <Qr />
            </PageWrapper>
          }
        />
        <Route
          path="QR/Standby/Galeria"
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <GaleriaImagenesQr />
            </PageWrapper>
          }
        />
        <Route
          path="/"
          exact
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <Index />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper selectedOption={selectedOption} handler={handler}>
              <Error404 />
            </PageWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
