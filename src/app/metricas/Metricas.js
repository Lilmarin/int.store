import bgPurple from "../../Img/Backkground_Purple.png";
import "../../components/Style/Registro.scss";
import coin from "../../Img/Coin.webp";
import { I18n } from "aws-amplify/utils";
import { Helmet } from "react-helmet-async";

const Metricas = () => {
  return (
    <>
      <Helmet>
        <title>INT Metricas</title>
      </Helmet>
      <section
        style={{
          backgroundImage: `url(${bgPurple})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="font-red-hat relative flex items-center justify-center text-white"
      >
        <div className="flex flex-col gap-9 sm:w-full sm:px-5 lg:w-[755px] lg:px-0">
          <h1 className="text-center font-bold sm:text-[30px] lg:text-[40px]">
            {I18n.get("MetricaTitle")}
          </h1>
          <p className="font-light sm:text-[20px] lg:text-[30px]">
            {I18n.get("MetricaText1")}
          </p>
          <p className="font-light sm:text-[20px] lg:text-[30px]">
            {I18n.get("MetricaText2")}
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
            <img src={coin} alt="coin" className="w-4h-40 h-40" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Metricas;
