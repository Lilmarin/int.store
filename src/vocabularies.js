import { I18n } from "aws-amplify/utils";

const dict = {
  es: {
    //Traducciones de terminal
    Tithoutfeeds: "Sin mensualidades • Sin baterías • Sin papel",
    Tmoefti: "LA TERMINAL MÁS EFICIENTE DEL MUNDO",
    Tsiremo: "Simplifica recibir dinero",
    Tbtnfree: " Obtener Gratis",
    THowWorks: "¿CÓMO FUNCIONA?",
    TNumberone: "1",
    Tsign: "Registrate",
    TNumbertwo: "2",
    TMakeyouBudget: "Crea tu cartera",
    TNumberthree: "3",
    TMuestrala: "Muestrala",
    TNumberFour: "4",
    TWin: "Gana Dinero",
    //Traducciones de Ecommerce
    EWithoutFeeds: "Sin mensualidades • Infalsificable • Fácil de usar",
    EMakeyourEcommerce: "CREA TU E-COMMERCE EN SEGUNDOS.",
    ESimplifyrecive: "Simplifica recibir dinero",
    ETwoStep: "Crea tu negocio",
    EThreeStep: "Compártelo",
    //Traducciones de Registro Principal
    RPImrove: "¡Impulsa tus ventas con el poder de INT!",
    RPOutil:
      "INT es la herramienta ideal para incrementar tus ventas, gestionar pagos y enviar productos de manera fácil y segura.",
    RPWaitList: "Registro lista de espera",
    RPSingInNow:
      "Regístrate para incrementar tus ingresos de forma sencilla, en cuanto estemos listos te avisaremos.",
    //Traducciones de Registro Terminal
    RTSales: "¡Impulsa tus ventas con el poder de INT!",
    RTOutil:
      "INT es la herramienta ideal para incrementar tus ventas, gestionar pagos y enviar productos de manera fácil y segura.",
    RTSininnow:
      "Regístrate para incrementar tus ingresos de forma sencilla, en cuanto estemos listos te avisaremos.",
    //Traducciones de Registro Ecommerce
    REImproveyoursales: "¡Impulsa tus ventas con el poder de INT!",
    RETool:
      "INT es la herramienta ideal para incrementar tus ventas, gestionar pagos y enviar productos de manera fácil y segura.",
    //Traducciones de Gracias
    GShare: "Comparte con tus amig@s para crecer juntos",
    //Traducciones del Index
    IWithoutpayment: "• Sin mensualidades • Intuitiva • Rápida",
    Ipotential: "POTENCIALIZA",
    IHeadertitle1: "¡TU NEGOCIO!",
    IHeadertitle2:
      "Habilitalo para la venta en línea y el cobro en ubicaciones físicas sin necesidad de una terminal bancaria",
    IButton1: "Demo",
    ITerminaltitle: "TERMINAL DIGITAL",
    ISeemore: " Ver más",
    IEcommercetitle: " E-COMMERCE EN SEGUNDOS",
    IBrand: "© Intelligent Networked Transactions LLC",
    ILastTransactions: "Últimas transacciones",
    //Traducciones de Error 404
    ETitle: "Error 404",
    ENotFound: "¡Parece que esta página no existe!",
    EText:
      "Buscamos por todas partes, pero no pudimos encontrar lo que buscas. Eso no siempre es negativo, es posible que este dominio este libre, registraste y adquiérelo ya.",
    Eregnow: " ¡Registrate Ahora!",
    //Carrousel
    CarrouselT1:
      "El deseo es el punto de partida de todo logro, no una esperanza, no un anhelo, sino un vivo deseo palpitante que lo trasciende todo.",
    CarrouselTA1: "Napoleon Hill",
    CarrouselT2:
      "Fija tu mente en un objetivo bien definido y observa cómo rápidamente el mundo se aparta para dejarte pasar.",
    CarrouselTA2: "Napoleon Hill",
    CarrouselT3:
      "No esperes. El momento nunca será el adecuado. Empieza donde estés ahora, trabaja con lo que tengas a tu disposición y encontrarás mejores herramientas a medida que sigas adelante.",
    CarrouselTA3: "Napoleon Hill",
    CarrouselT4:
      "Tus pensamientos dominantes atraen, a través de una ley definida de la naturaleza, por la ruta más corta y más conveniente, su contrapartida física.",
    CarrouselTA4: "Napoleon Hill",
    CarrouselT5:
      "Si no estás aprendiendo mientras estás ganando, te estás engañando a ti mismo y perdiendo la mejor parte de tu compensación.",
    CarrouselTA5: "Napoleon Hill",
    CarrouselT6:
      "El roble duerme en la bellota. El pájaro espera en el huevo, y en la más alta visión del alma, un ángel despierto se agita. Los sueños son las semillas de la realidad.",
    CarrouselTA6: "Napoleon Hill",
    Error404Ups: "¡Ups!",
    Error404Button: "Crear cuenta (Lista de espera)",
    GetDomain: "Obtener tu dominio",
    TarjetasTitle: "LA PRIMERA TARJETA DE DÉBITO CON TERMINAL INCLUIDA",
    //Traducciones de QR
    QrGenerate: "Generar Código QR",
    QrLoading: "Cargar imagen",
    QrUrl: "URL",
    QrGenerateQr: "Generar QR",
    QrShare: "Compartir QR",
    QrDownload: "Descargar QR",
    QrCopy: "Copiar URL",
    QrClean: "Limpiar",
    QrUrlImage: "URL Imagen",
    QrWait: "Espere un momento",
    Acept: "Aceptar",
    Cancel: "Cancelar",
    AjustImage: "Ajusta la imagen de tu QR",
    QrTitle1: "Generador de QR",
    QrTitle2: "Crea tu código QR gratis",
    QrTitle3: "No conozco códigos QR, ¿Qué debo saber?",
    QrTitle4: "¿Cómo puedo crear un QR gratuito?",
    QrTitle5: "¿Qué codigos QR son gratuitos?",
    UrlCopied: "URL copiada al portapapeles con éxito",
    QRDowload: "QR generado con éxito",
    QrWhite: "Blanco",
    QrBlack: "Negro",
    //Mision
    Mision: "Misión",
    MText1:
      "El único objetivo del sistema tiene que ser hacernos más ricos a todos y lo hacemos apoyando a las clases más bajas primero a abrir negocios, sin pedir nada a cambio ni intereses. Simplemente dando el dinero.",
    MText2:
      "Millones de líneas de código e inteligencia artificial ayudándonos a tener mejores vidas, más abundantes y con más tiempo.",
    MButton: "Crear un perfil GRATIS",
    //Metricas
    MetricaTitle: "Uso de recursos",
    MetricaText1:
      "De las utilidades, el 50% se reparte a los socios del sistema, 50% se da en prestamos 0% interés a los que creamos que van a causar más impacto positivo en la sociedad.",
    MetricaText2:
      "Se le paga muy bien a los empleados del sistema. Se busca contratar la menor cantidad de personal para ser los más eficientes posibles en la toma de desiciones.",
  },
  en: {
    //Traducciones de terminal
    Tithoutfeeds: "No fixed cost • Secure • Easy to use",
    Tmoefti: "THE MOST EFFICIENT POS IN THE WORLD",
    Tsiremo: "Simplifies receiving money",
    Tbtnfree: "Get Free",
    THowWorks: "HOW DOES IT WORK?",
    TNumberone: "1",
    Tsign: "Sign up",
    TNumbertwo: "2",
    TMakeyouBudget: "Create payment portfolio",
    TNumberthree: "3",
    TMuestrala: "Show QR code",
    TNumberFour: "4",
    TWin: "Earn money",
    //Traducciones de Ecommerce
    EWithoutFeeds: "No monthly payments • Unforgeable • Easy to use",
    EMakeyourEcommerce: "START SELLING ONLINE IN SECONDS.",
    ESimplifyrecive: "We simplify online sales",
    ETwoStep: "Create product portfolio",
    EThreeStep: "Manage sales",
    //Traducciones de Registro Principal
    RPImrove: "Boost your sales with the power of INT!",
    RPOutil:
      "INT is the ideal tool to increase your sales, manage payments and send products easily and safely.",
    RPWaitList: "Waiting list registration",
    RPSingInNow:
      "Register to increase your income in a simple way, as soon as we are ready we will notify you.",
    //Traducciones de Registro Terminal
    RTSales: "Boost your sales with the power of INT!",
    RTOutil:
      "INT is the ideal tool to increase your sales, manage payments and send products easily and safely.",
    RTSininnow:
      "Register to increase your income in a simple way, as soon as we are ready we will notify you.",
    //Traducciones de Registro Ecommerce
    REImproveyoursales: "Boost your sales with the power of INT!",
    RETool:
      "INT is the ideal tool to increase your sales, manage payments and send products easily and safely.",
    //Traducciones de Gracias
    GShare: "Share with your friends to grow together",
    //Traducciones del Index
    IWithoutpayment: "• No monthly payments • Intuitive • Fast",
    Ipotential: "POTENTIALIZE",
    IHeadertitle1: "YOUR BUSINESS!",
    IHeadertitle2:
      "Enable your business for online sales and digital payment solutions in physical locations without the need of a banking POS",
    IButton1: "Demo",
    ITerminaltitle: "Obtain your digital POS for your physical locations",
    ISeemore: "See more",
    IEcommercetitle: "Start selling online in seconds",
    IBrand: "© Intelligent Networked Transactions LLC",
    ILastTransactions: "Last transactions",
    //Traducciones de Error 404
    ETitle: "Error 404",
    ENotFound: "It seems that this page does not exist!",
    EText:
      "We searched everywhere, but we couldn't find what you are looking for. That is not always negative, it is possible that this domain is free, register and acquire it now.",
    Eregnow: "Sign up now!",
    //Carrousel
    CarrouselT1:
      "Desire is the starting point of all achievement, not a hope, not a longing, but a living throbbing desire that transcends all.",
    CarrouselTA1: "Napoleon Hill",
    CarrouselT2:
      "Set your mind on a well-defined goal and watch the world quickly move aside to let you pass.",
    CarrouselT3:
      "Dont wait. The moment will never be right. Start where you are now, work with what you have at your disposal, and you'll find better tools as you go.",
    CarrouselT4:
      "Your dominant thoughts attract, through a definite law of nature, by the shortest and most convenient route, their physical counterpart.",
    CarrouselT5:
      "If you're not learning while you're earning, you're cheating yourself and missing out on the best part of your compensation.",
    CarrouselT6:
      "The oak sleeps in the acorn. The bird waits in the egg, and in the soul's highest vision, an awakened angel stirs. Dreams are the seeds of reality.",
    Error404Ups: "Ups!",
    Error404Button: "Create account (Waiting list)",
    GetDomain: "Get your domain",
    TarjetasTitle: "THE FIRST DEBIT CARD WITH TERMINAL INCLUDED",
    //Traducciones de QR
    QrGenerate: "Generate QR Code",
    QrLoading: "Load image",
    QrUrl: "URL",
    QrGenerateQr: "Generate QR",
    QrShare: "Share QR",
    QrDownload: "Download QR",
    QrCopy: "Copy URL",
    QrClean: "Clean",
    QrUrlImage: "URL Image",
    QrWait: "Wait a moment",
    Acept: "Accept",
    Cancel: "Cancel",
    AjustImage: "Adjust your QR image",
    UrlCopied: "URL copied to clipboard successfully",
    QRDowload: "QR generated successfully",
    QrWhite: "White",
    QrBlack: "Black",
    //Mision
    Mision: "Mission",
    MText1:
      "The only objective of the system must be to make us all richer and we do it by supporting the lower classes first to open businesses, without asking for anything in return or interest. Simply giving the money.",
    MText2:
      "Millions of lines of code and artificial intelligence helping us to have better lives, more abundant and with more time.",
    MButton: "Create a free profile",
    //Metricas
    MetricaTitle: "Resource usage",
    MetricaText1:
      "Of the profits, 50% is distributed to the system partners, 50% is given in loans 0% interest to those we believe will cause the most positive impact on society.",
    MetricaText2:
      "System employees are paid very well. We seek to hire the least amount of staff to be as efficient as possible in decision making.",
  },
};
export default dict;
I18n.putVocabularies(dict);
