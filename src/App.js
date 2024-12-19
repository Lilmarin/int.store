import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Ecommerce from "./app/intStore/Ecommerce";
import RegistroPrincipal from "./app/intStore/Registro_Principal";
import Gracias from "./app/intStore/Gracias";
import RegistroEcommerce from "./app/intStore/Registro_Ecommerce";
import RegistroTerminal from "./app/intStore/Registro_Terminal";
import Error404 from "./app/intStore/Error404";
import Index from "./app/intStore/Index2";
import Terminal from "./app/intStore/Terminal";
// eslint-disable-next-line
import vocabularies from "../src/vocabularies";
import { I18n } from "aws-amplify/utils";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Tarjetas from "./app/intStore/Tarjetas";
import Qr from "./app/qr/Qr";
import GaleriaImagenesQr from "./components/Qr/GaleriaImagenesQr";
import { HelmetProvider } from "react-helmet-async";
import Transactions from "./app/transactions/Transactions";
import Centro from "./app/centro/Centro";
import Why from "./app/why/Why";
import PageWrapperQr from "./components/PageWrapper/PageWrapperQr";
import Mision from "./app/mision/Mision";
import Metricas from "./app/metricas/Metricas";
import Cobertura from "./app/cobertura/Cobertura";
import Blur from "./app/blur/Blur";
import PageWrapperToIndex from "./components/PageWrapper/PageWrapperToIndex";

function App() {
  const pageDomain = window.location.host;
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
    <HelmetProvider>
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
            path="/qr"
            element={
              <PageWrapperQr selectedOption={selectedOption} handler={handler}>
                <Qr />
              </PageWrapperQr>
            }
          />
          <Route
            path="/qr/Standby/Galeria"
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
              <>
                {pageDomain === "int.store" && (
                  <PageWrapper
                    selectedOption={selectedOption}
                    handler={handler}
                  >
                    <Index />
                  </PageWrapper>
                )}
                {pageDomain === "why.int.store" && (
                  <>
                    <Why />
                  </>
                )}
                {pageDomain === "transactions.int.store" && (
                  <>
                    <Transactions />
                  </>
                )}
                {pageDomain === "centro.int.store" && (
                  <PageWrapperToIndex
                    selectedOption={selectedOption}
                    handler={handler}
                  >
                    <Centro />
                  </PageWrapperToIndex>
                )}
                {pageDomain === "mision.int.store" && (
                  <PageWrapper
                    selectedOption={selectedOption}
                    handler={handler}
                  >
                    <Mision />
                  </PageWrapper>
                )}
                {pageDomain === "metricas.int.store" && (
                  <PageWrapper
                    selectedOption={selectedOption}
                    handler={handler}
                  >
                    <Metricas />
                  </PageWrapper>
                )}
                {pageDomain === "cobertura.int.store" && (
                  <PageWrapper
                    selectedOption={selectedOption}
                    handler={handler}
                  >
                    <Cobertura />
                  </PageWrapper>
                )}
                {pageDomain === "blurb.int.store" && (
                  <PageWrapperToIndex
                    selectedOption={selectedOption}
                    handler={handler}
                  >
                    <Blur />
                  </PageWrapperToIndex>
                )}
                {(pageDomain === "localhost:3000" ||
                  pageDomain ===
                    "https://ldn3vr0r-3000.usw3.devtunnels.ms/") && (
                  <>
                    <PageWrapperToIndex
                      selectedOption={selectedOption}
                      handler={handler}
                    >
                      <Centro />
                    </PageWrapperToIndex>
                  </>
                )}
              </>
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
    </HelmetProvider>
  );
}

export default App;
