import Imagentelefono from "../../Img//Phone_Without_Vector.png";
import Vectorint from "../../Img/Vector_Int_White.png";
import Circleint from "../../Img/Circle_Int.png";
import PhoneTerminal from "../../Img/PhoneTerminal.png";
import { useEffect } from "react";
const Carrusel = (props) => {
  const images = [Circleint, Imagentelefono, PhoneTerminal];

  useEffect(() => {
    const interval = setInterval(() => {
      props.moveToRight(); // Cambia a la siguiente imagen
    }, 5000); // Cambia cada 2000 milisegundos (2 segundos)

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, [props.positionCarousel]);

  return (
    <section className="relative z-0 flex items-center justify-center ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Carousel"
          className={` h-full w-full ${index === props.positionCarousel ? "opacity-100" : "hidden opacity-0"}
          ${index === 0 ? "sm:ml-3 sm:mt-3 sm:h-[270px] sm:w-[270px] md:mt-12 md:h-[360px] md:w-[360px] lg:ml-6 lg:h-[550px] lg:w-[550px]" : ""}
          ${index === 2 ? " sm:mt-3  sm:h-[250px] sm:w-[250px] md:mt-12 md:h-[350px] md:w-[350px] lg:h-[525px] lg:w-[525px]" : ""}
          ${index === 1 ? " sm:h-[300px] sm:w-[260px] md:h-[450px] md:w-[430px] lg:h-[620px] lg:w-[525px]" : ""} z-10`}
        />
      ))}
      {props.positionCarousel === 1 && (
        <img
          src={Vectorint}
          alt="Carousel"
          className="absolute z-0 animate-spin-slow sm:h-[300px] sm:w-[325px] md:h-[450px] md:w-[450px] lg:h-[600px]  lg:w-[600px]"
        />
      )}
    </section>
  );
};
export default Carrusel;
