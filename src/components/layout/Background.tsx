import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const routesBackgrounds: Record<string, string> = {
  "/": "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop",
  "/destination":
    "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop ",
  "/crew": "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop ",
  "/technology":
    "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop ",
};

// Lista de imágenes a precargar
const imagePaths = [
  "/images/home/background-home-mobile.jpg",
  "/images/home/background-home-tablet.jpg",
  "/images/home/background-home-desktop.jpg",
  "/images/destination/background-destination-mobile.jpg",
  "/images/destination/background-destination-tablet.jpg",
  "/images/destination/background-destination-desktop.jpg",
  "/images/crew/background-crew-mobile.jpg",
  "/images/crew/background-crew-tablet.jpg",
  "/images/crew/background-crew-desktop.jpg",
  "/images/technology/background-technology-mobile.jpg",
  "/images/technology/background-technology-tablet.jpg",
  "/images/technology/background-technology-desktop.jpg",
];

function preloadImages(urls: string[]) {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

export default function Background() {
  const location = useLocation();
  const [currentBg, setCurrentBg] = useState(
    routesBackgrounds[location.pathname]
  );
  const [nextBg, setNextBg] = useState<string | null>(null);

  useEffect(() => {
    //cargar imagenes de fondo
    preloadImages(imagePaths);
  }, []);

  useEffect(() => {
    //Establecer nuevo fondo
    setNextBg(routesBackgrounds[location.pathname]);
    setTimeout(() => {
      // Cambiar el fondo actual al nuevo después de un tiempo
      setCurrentBg(routesBackgrounds[location.pathname]);
      setNextBg(null); // Limpiar el fondo siguiente
    }, 300);
  }, [location.pathname]);
  return (
    <>
      <div
        className={`absolute h-full w-full top-0 left-0 -z-10 ${currentBg}`}
      ></div>
      {nextBg && (
        <div
          className={`absolute fadeIn h-full w-full top-0 left-0 -z-10 ${nextBg}`}
        ></div>
      )}
    </>
  );
}
