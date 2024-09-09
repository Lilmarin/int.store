import logoEspañol from "./../Img/LogoEspanol.png";
import logoingles from "./../Img/Logotipo.png";
import background_Purple from "./../Img/Backkground_Purple.png";
import QrGenerate from "./Qr/QrGenerate";
import QrPrevGenerate from "./Qr/QrPrevGenerate";
import { useEffect, useState, useRef } from "react";
import { I18n } from "aws-amplify/utils";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import logoEspanol from "./../Img/tagEspanol.png";
import logoIngles from "./../Img/Logotipo.png";
import ModalModifyQr from "./Qr/ModalModifyQr";
import ModalMui from "./Modal/ModalMui";

const Qr = () => {
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [url, setUrl] = useState("");
  const [language, setLanguage] = useState("");
  const [timeLeft, setTimeLeft] = useState(5); // Time left in seconds
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const timer = useRef(null); // Ref to store the timer ID
  const interval = useRef(null); // Ref to store the interval ID

  useEffect(() => {
    const lg = localStorage.getItem("language") || "es";
    setLanguage(lg);

    // Function to reset the inactivity timer
    const resetTimer = () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      if (interval.current) {
        clearInterval(interval.current);
      }
      setTimeLeft(5); // Reset the time left
      timer.current = setTimeout(() => {
        navigate("/QR/Standby/Galeria"); // Change to your desired route
      }, 300000); // 300000 ms = 5 minutos

      interval.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(interval.current);
            return 0;
          }
        });
      }, 1000);
    };

    // Add event listeners to detect user activity
    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "scroll",
      "touchstart",
    ];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Set the initial timer
    resetTimer();

    // Cleanup event listeners on component unmount
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timer.current) {
        clearTimeout(timer.current);
      }
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [navigate]);

  return (
    <>
      <div
        className="relative flex w-full flex-col items-center sm:h-[1500px] sm:pt-[30%] lg:h-screen lg:pt-[8%]"
        style={{ backgroundImage: `url(${background_Purple})` }}
      >
        <section className="sm:hidden">
          {language === "es" ? (
            <img
              src={logoEspañol}
              alt="Logotipo Español"
              className=" sm:h-[76px] sm:w-[268px] lg:h-[152px] lg:w-[533px]"
            ></img>
          ) : (
            <img
              src={logoingles}
              alt="Logotipo Español"
              className=" sm:h-[76px] sm:w-[268px] lg:h-[152px] lg:w-[533px]"
            ></img>
          )}
        </section>
        <h1 className="font-bold text-white sm:hidden md:flex md:text-[40px] lg:text-[50px]">
          Generador de QR
        </h1>
        <section className="flex justify-between sm:mt-[31px] sm:h-[840px] sm:flex-col sm:gap-[250px] lg:mt-[10px] lg:h-[400px] lg:w-[732px] lg:flex-row">
          {/**Left */}
          <QrGenerate
            url={url}
            setUrl={setUrl}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            openModal={() => setOpenModal(true)}
            setOpenModal={setOpenModal}
          />
          {/**Right */}
          <QrPrevGenerate url={url} selectedImage={selectedImage} />
        </section>
        <button
          onClick={() => navigate("/QR/Standby/Galeria")} // Change to your desired route
          className="absolute bottom-32 h-[48px] w-[250px] rounded-[32px] bg-white text-primary-50 hover:bg-gray-30 lg:mt-[20px]"
        >
          Casos de uso
        </button>
        <footer className="absolute bottom-1 text-[20px] font-light text-white sm:mt-10 lg:mt-[200px]">
          {I18n.get("IBrand")}
        </footer>

        {openModal && (
          <ModalMui
            view={
              <ModalModifyQr
                url={url}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                onClose={() => setOpenModal(false)}
              />
            }
            openModal={openModal}
            setOpenModal={setOpenModal}
            closeButton={false}
            WidthMax="400px"
            HeightMax="540px"
            WidthMin="90%"
            HeightMin="550px"
          />
        )}
      </div>
    </>
  );
};

export default Qr;
