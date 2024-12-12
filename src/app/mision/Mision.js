import bgPurple from "../../Img/Backkground_Purple.png";
import "../../components/Style/Registro.scss";
import coin from "../../Img/Coin.webp";
import GraficaMission from "../../Img/GraficaMision.webp";
import { I18n } from "aws-amplify/utils";
import { Helmet } from "react-helmet-async";

const Mision = () => {
  return (
    <>
      <Helmet>
        <title>Misión</title>
      </Helmet>
      <section
        style={{
          backgroundImage: `url(${bgPurple})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="font-red-hat relative flex items-center justify-center text-white sm:flex-col sm:gap-5 sm:overflow-y-auto sm:px-10 lg:flex-row lg:gap-20 lg:px-20"
      >
        <div className="flex w-full flex-col sm:h-full sm:gap-3 sm:pt-20 lg:h-[635px] lg:gap-5 lg:pt-0">
          <h1 className="text-[48px] font-bold">{I18n.get("Mision")}</h1>

          <p className="text-[18px] font-light sm:w-full lg:w-[460px]">
            {I18n.get("MText1")}
          </p>
          <p className="text-[18px] font-light sm:w-full lg:w-[460px]">
            {I18n.get("MText2")}
          </p>
          <button
            className="rounded-full bg-white font-bold text-primary-50 hover:bg-gray-30 sm:h-10 lg:h-14"
            onClick={() =>
              (window.location.href = "https://intportal.vercel.app/registro")
            }
          >
            {I18n.get("MButton")}
          </button>
          <div className="flex justify-center">
            <img
              src={coin}
              alt="coin"
              className="sm:h-24 sm:w-24 lg:h-48 lg:w-48"
            />
          </div>
        </div>
        <div className="h-[635px] w-full ">
          <img
            src={GraficaMission}
            alt="GraficaMission"
            className="sm:h-[250px] sm:w-full lg:h-[100%] lg:w-[90%]"
          />
        </div>
        <footer className="absolute bottom-5 flex w-full flex-col text-center text-white">
          <p
            className="cursor-pointer text-[15px] font-light"
            onClick={() => (window.location.href = "https://int.store")}
          >
            {I18n.get("IBrand")}
          </p>
          <p
            className="cursor-pointer text-[15px] font-light"
            onClick={() =>
              (window.location.href = "https://transactions.int.store")
            }
          >
            {I18n.get("ILastTransactions")}
          </p>
        </footer>
      </section>
    </>
  );
};
export default Mision;
