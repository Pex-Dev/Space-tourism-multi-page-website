import useDestination from "../hooks/useDestination";

export default function Destination() {
  const { destination, setDestinationByName } = useDestination();

  return (
    <main className="fadeIn p-6 md:p-10 lg:p-0 lg:py-12 lg:px-">
      <div className="lg:max-w-[1110px] lg:mx-auto">
        <header>
          <h1 className="text-center md:text-left font-barlow-condensed text-white uppercase tracking-[2.4px] md:text-xl lg:text-[28px] md:tracking-[3px] lg:tracking-[4px]">
            <span className="text-white/25 mr-6 font-bold">01</span>Pick your
            destination
          </h1>
        </header>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:h-[734px] ">
          {/* Imagen */}
          <div className="h-[203px] md:h-[384px] lg:h-full flex flex-col items-center justify-center">
            <div className="flex justify-center items-center w-fit rounded-full overflow-hidden shadow-inner-sm md:shadow-inner-md">
              <picture className="w-[150px] md:w-[300px] lg:w-[400px] -z-10 animate-rotate">
                <source srcSet={destination.images.webp} type="image/webp" />
                <img src={destination.images.png} alt={destination.name} />
              </picture>
            </div>
          </div>
          {/* Contenido */}
          <div className="flex flex-col lg:justify-center">
            <div className="flex flex-col gap-6 lg:gap-10 lg:max-w-[445px] lg:max-h-[468px] lg:mx-auto">
              {/* Navegación */}
              <ul className="flex gap-8 justify-center lg:justify-start">
                <li
                  className={`border-b-2  tansition-colors duration-700 w-fit ${
                    destination.name === "Moon"
                      ? "border-b-white"
                      : "border-b-white/0  hover:border-white/50"
                  }`}
                >
                  <button
                    onClick={() => setDestinationByName("Moon")}
                    className={`font-barlow-condensed uppercase text-[14px] lg:text-[16px] tracking-[2.1px] cursor-pointer h-8 transition-colors duration-700 focus:outline-none focus-visible:bg-white/10 ${
                      destination.name === "Moon"
                        ? "text-white"
                        : "text-indigo-200"
                    }`}
                  >
                    Moon
                  </button>
                </li>
                <li
                  className={`border-b-2  tansition-colors duration-700 w-fit ${
                    destination.name === "Mars"
                      ? "border-b-white"
                      : "border-b-white/0  hover:border-white/50"
                  }`}
                >
                  <button
                    onClick={() => setDestinationByName("Mars")}
                    className={`font-barlow-condensed uppercase text-[14px] lg:text-[16px] tracking-[2.1px] cursor-pointer h-8 transition-colors duration-700 focus:outline-none focus-visible:bg-white/10 ${
                      destination.name === "Mars"
                        ? "text-white"
                        : "text-indigo-200"
                    }`}
                  >
                    Mars
                  </button>
                </li>
                <li
                  className={`border-b-2  tansition-colors duration-700 w-fit ${
                    destination.name === "Europa"
                      ? "border-b-white"
                      : "border-b-white/0  hover:border-white/50"
                  }`}
                >
                  <button
                    onClick={() => setDestinationByName("Europa")}
                    className={`font-barlow-condensed uppercase text-[14px] lg:text-[16px] tracking-[2.1px] cursor-pointer h-8 transition-colors duration-700 focus:outline-none focus-visible:bg-white/10 ${
                      destination.name === "Europa"
                        ? "text-white"
                        : "text-indigo-200"
                    }`}
                  >
                    Europa
                  </button>
                </li>
                <li
                  className={`border-b-2  tansition-colors duration-700 w-fit ${
                    destination.name === "Titan"
                      ? "border-b-white"
                      : "border-b-white/0  hover:border-white/50"
                  }`}
                >
                  <button
                    onClick={() => setDestinationByName("Titan")}
                    className={`font-barlow-condensed uppercase text-[14px] lg:text-[16px] tracking-[2.1px] cursor-pointer h-8 transition-colors duration-700 focus:outline-none focus-visible:bg-white/10 ${
                      destination.name === "Titan"
                        ? "text-white"
                        : "text-indigo-200"
                    }`}
                  >
                    Titan
                  </button>
                </li>
              </ul>
              {/* Descripción */}
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <h2 className="font-bellefair text-[56px] md:text-[80px] lg:text-[96px] uppercase text-center lg:text-left text-white">
                  {destination.name}
                </h2>
                <p className="text-indigo-200 font-barlow max-w-[327px] md:max-w-[514px] lg:max-w-[445px] text-[15px] md:text-[16px] lg:text-[18px] lg:leading-[32.4px] text-center lg:text-left">
                  {destination.description}
                </p>
              </div>
              <hr className="text-white/25 md:w-[514px] min-h-[2px] mx-auto" />
              {/* Datos */}
              <div className="flex flex-col md:flex-row md:justify-center lg:justify-start gap-6">
                <h3 className="flex flex-col gap-3 text-white text-center lg:text-left font-bellefair text-[23px] lg:text-[28px] uppercase ">
                  <span className="text-indigo-200 font-barlow-condensed text-[14px] tracking-[2px] ">
                    Avg. Distance
                  </span>
                  {destination.distance}
                </h3>
                <h3 className="flex flex-col gap-3 text-white text-center lg:text-left font-bellefair text-[23px] lg:text-[28px] uppercase ">
                  <span className="text-indigo-200 font-barlow-condensed text-[14px] tracking-[2px] ">
                    Est. travel time
                  </span>
                  {destination.travel}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
