import {
  ButtonSqueleton,
  CheckBoxContainer,
  CheckBoxInput,
  DivForm,
  FormSqueleton,
  InputContainer,
} from "../StyledComponents";
const Form = () => {
  return (
    <FormSqueleton className="squeleton-form">
      {/*flex col*/}
      <DivForm margintop="100px" flexdirection="column">
        <InputContainer>
          <input type="text" placeholder="Nombre*"></input>
        </InputContainer>
      </DivForm>
      {/*flex col*/}
      <DivForm flexdirection="column">
        <InputContainer margintop="33px">
          <input type="text" placeholder="Correo*"></input>
        </InputContainer>
      </DivForm>
      {/*flex col*/}
      <DivForm flexdirection="column">
        <InputContainer margintop="33px">
          <input type="text" placeholder="Telefono*"></input>
        </InputContainer>
      </DivForm>
      {/*flex col*/}
      <DivForm flexdirection="column">
        <InputContainer margintop="33px">
          <input type="text" placeholder="Ciudad"></input>
        </InputContainer>
      </DivForm>
      {/*flex col*/}
      <DivForm flexdirection="column">
        <CheckBoxContainer>
          <CheckBoxInput type="checkbox"></CheckBoxInput>
          <p style={{ fontSize: "13px" }}>
            Acepto el <a style={{ color: "#188bf6" }}>aviso de privacidad</a> de
            INT. Al proporcionar mi correo y teléfono, acepto recibir mensajes
            de la empresa.
          </p>
        </CheckBoxContainer>
      </DivForm>
      {/*flex col*/}
      <div
        style={{
          display: "flex",
          justifyItems: "start",
        }}
      >
        <ButtonSqueleton>Registrarme</ButtonSqueleton>
      </div>
    </FormSqueleton>
  );
};
export default Form;
