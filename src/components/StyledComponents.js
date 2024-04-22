import styled from "styled-components";

export const Boton = styled.button`
  color: ${(props) =>
    props ? (props.colort ? props.colort : "#2a2fab") : "#2a2fab"};
  background-color: ${(props) => (props.peligro ? "white" : "#fffff000")};
  margin: ${(props) =>
    props ? (props.bmarg ? props.bmarg : "1em 0") : "1em 0"};
  border: 1px solid #ccc;
  width: ${(props) => (props ? (props.bwidth ? props.bwidth : "95%") : "95%")};
  border-radius: 32px;
  padding: 1.5vh 2.8vh;
  font-size: 1.8vh;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 100%;
    padding: 0.5vh 2vh;
    margin-bottom: 0;
  }
  &:hover {
    transform: translateY(-2px);
  }
`;

export const BotonnotFound = styled.button`
  color: ${(props) =>
    props ? (props.colort ? props.colort : "#2a2fab") : "#2a2fab"};
  background-color: ${(props) => (props.peligro ? "#F2F3FF" : "#585DCC")};
  margin: ${(props) =>
    props ? (props.bmarg ? props.bmarg : "1em 0") : "1em 0"};
  border: 1px solid #ccc;
  width: ${(props) => (props ? (props.bwidth ? props.bwidth : "95%") : "95%")};
  border-radius: 32px;
  padding: 1.5vh 2.8vh;
  font-size: 1.8vh;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 100%;
    padding: 0.5vh 2vh;
    margin-bottom: 0;
  }
  &:hover {
    transform: translateY(-2px);
  }
`;

export const Divcolumns = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  width: 85.5%;
  max-width: 85.5%;
  margin: 0em auto;
  gap: ${(props) => (props ? (props.gap ? props.gap : "5%") : "5%")};
  @media (max-width: 800px) {
    grid-template-columns: ${(props) => props.columnsmobile};
    gap: ${(props) =>
      props ? (props.gapmobile ? props.gapmobile : "5%") : "5%"};
  }
`;
export const ItemSocial = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Divcolumns2 = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  width: 100%;
  max-width: 100%;
  margin: 0em auto;
  gap: ${(props) => (props ? (props.gap ? props.gap : "5%") : "5%")};
  @media (max-width: 800px) {
    grid-template-columns: ${(props) => props.columnsmobile};
  }
`;

export const DivColumnRegister = styled.div`
  width: ${(props) => (props ? (props.width ? props.width : "100%") : "100%")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props ? (props.alignitems ? props.alignitems : "center") : "center"};
  justify-content: ${(props) =>
    props
      ? props.justifycontent
        ? props.justifycontent
        : "center"
      : "center"};
  margin: 0 auto;
  @media (max-width: 700px) {
    align-items: ${(props) =>
      props
        ? props.alignitemsmob
          ? props.alignitemsmob
          : "center"
        : "center"};
  }
`;

export const Divcolumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 85.5%;
  max-width: 85.5%;
  margin: 0em auto;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundcolor};
  border-radius: 66px;
`;
export const Homecomponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 92.4vh;
  width: 100%;
  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Divcenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Divitem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Numbercontainer = styled.div`
  background-color: #2a2fab;
  border-radius: 50px;
  padding: 0.7vh 1.9vh;
`;

export const Numberinside = styled.p`
  font-family: "Red Hat Display";
  font-size: 2.8vh;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  color: #ffffff;
`;

export const H5Home = styled.h5`
  font-family: "Red Hat Display";
  color: #f2f3ff;
  font-size: 2.4vh;
  font-style: normal;
  font-weight: 400;
  line-height: 3vh;
  margin: 0.5em 0;
  text-decoration: none;
  @media (max-width: 700px) {
    font-size: 1em;
    line-height: 2vh;
    margin: 1.9em 0 0.5em;
  }
`;

export const HText = styled.p`
  font-family: "Red Hat Display";
  color: #f2f3ff;
  font-size: 2vh;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5vh;
  margin: 1em 0 0;
  @media (max-width: 700px) {
    margin: 1.4em 0 0.5em;
    font-size: 1.9vh;
    line-height: 2.3vh;
  }
`;

export const HText2 = styled.p`
  font-family: "Red Hat Display";
  color: #626262;
  font-size: 1.6vh;
  font-style: normal;
  font-weight: 400;
  line-height: 2vh;
  max-width: 52%;
  margin: 1em 0 0;
  @media (max-width: 700px) {
    margin: 1.9em 0 0em;
    max-width: 90%;
    font-size: 1.9vh;
    line-height: 2.3vh;
  }
`;

export const HText3 = styled.p`
  font-family: "Red Hat Display";
  color: #626262;
  font-size: 2vh;
  font-style: normal;
  font-weight: 400;
  line-height: 2.3vh;
  max-width: 52%;
  margin: 1em 0 0;
  @media (max-width: 700px) {
    margin: 1.9em 0 5%;
    max-width: 90%;
  }
`;

export const PurpleSubtitle = styled.p`
  font-family: "Red Hat Display";
  color: #585dcc;
  font-size: 3vh;
  font-style: normal;
  font-weight: 700;
  line-height: 3.8vh;
  margin: 0;
  @media (max-width: 700px) {
    font-size: 1.5em;
    line-height: 1.2vh;
    margin: 1.9em auto 0.5em 5%;
  }
`;

export const H1Home = styled.h1`
  font-family: "Red Hat Display";
  font-size: ${(props) =>
    props ? (props.fontsize ? props.fontsize : "5vh") : "5vh"};
  font-style: normal;
  font-weight: 700;
  line-height: ${(props) =>
    props ? (props.lineheight ? props.lineheight : "5vh") : "5vh"};
  letter-spacing: 0px;
  color: #ffffff;
  margin: ${(props) =>
    props ? (props.marginf ? props.marginf : " 0.2em 0") : " 0.2em 0"};
  @media (max-width: 700px) {
    font-size: 3vh;
    line-height: 3.5vh;
  }
`;

export const H2Home = styled.h2`
  font-family: "Red Hat Display";
  font-size: 3.4vh;
  font-style: normal;
  font-weight: 400;
  line-height: 3.9vh;
  margin: 0.2em 0;
  color: #f2f3ff;
  @media (max-width: 700px) {
    font-size: 2vh;
    line-height: 2vh;
  }
`;

export const H3Home = styled.h3`
  font-family: "Red Hat Display";
  font-size: 3vh;
  font-style: normal;
  font-weight: 700;
  line-height: 4.4vh;
  letter-spacing: -0.72px;
  color: #ffffff;
  margin: 0em 0 0.8em;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 2vh;
    letter-spacing: -0.2px;
  }
`;

export const HPHome = styled.p`
  font-family: "Red Hat Display";
  font-size: 2.2vh;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2vh;
  color: #ffffff;
  text-align: center;
  margin: 0.4em 0 0em;
  min-height: 6.4vh;
  @media (max-width: 700px) {
    font-size: 1.6vh;
    min-height: 5vh;
  }
`;

export const Bottomtext = styled.p`
  font-family: "Red Hat Display";
  font-size: 1.4vh;
  font-style: normal;
  font-weight: 400;
  line-height: 2vh;
  color: #ffffff;
  margin: 2em 0 1em;
`;
