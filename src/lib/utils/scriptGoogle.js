export const scriptGoogle = () => {
  // Crear el script para cargar Google Tag Manager
  const scriptTag = document.createElement("script");
  scriptTag.async = true;
  scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-BH3J6H7WRD";
  document.head.appendChild(scriptTag);

  // Configurar Google Analytics
  scriptTag.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-BH3J6H7WRD");
  };
};
