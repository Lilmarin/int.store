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
    <div className="flex h-[620px] w-full items-center justify-center ">
      <form className="flex h-[425px] w-[450px] flex-col gap-8">
        <div className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
          <input type="text" placeholder="Nombre*" />
        </div>
        <div className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
          <input type="text" placeholder="Correo*" />
        </div>
        <div className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
          <input type="text" placeholder="Telefono*" />
        </div>
        <div className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
          <input type="text" placeholder="Ciudad" />
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <p className="text-sm">
            Acepto el <a className="text-blue-500">aviso de privacidad</a> de
            INT. Al proporcionar mi correo y teléfono, acepto recibir mensajes
            de la empresa.
          </p>
        </div>
        <div>
          <button className="h-[44px] w-full rounded-full bg-[#565dd1] py-2 text-white ">
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
