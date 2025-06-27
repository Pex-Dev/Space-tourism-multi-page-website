import useTechnology from "../hooks/useTechnology";
export default function Technology() {
  const { technology, setTechnologyByName } = useTechnology();

  return (
    <main className="fadeIn py-6 md:py-10 lg:py-12 ">
      <div className="flex flex-col gap-6 lg:max-w-[1110px] lg:mx-auto">
        <h1 className="md:ml-10 lg:ml-0 text-center md:text-left font-barlow-condensed text-white uppercase tracking-[2.4px] md:text-xl lg:text-[28px] md:tracking-[3px] lg:tracking-[4px]">
          <span className="mr-6 font-bold text-white/25">03</span>Space Launch
          101
        </h1>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:min-h-[734px]">
          {/* Imagen */}
          <div className="w-full lg:w-fit h-[327px] md:h-[421px] lg:h-fit flex flex-col justify-end">
            <div className="w-full flex h-full max-h-[258px] md:max-h-[357px] lg:max-h-max overflow-hidden">
              <img
                src={technology.images.portrait}
                alt={technology.name}
                className="w-full md:hidden lg:block lg:w-auto lg:max-w-[600px] lg:max-h-[600px] "
              />
              <img
                src={technology.images.landscape}
                alt={technology.name}
                className="hidden w-full md:block lg:hidden"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-10 lg:gap-16 lg:min-w-[304px] ">
            <div className="flex lg:flex-col gap-4 justify-center">
              <button
                aria-label="toggle technology"
                onClick={() => setTechnologyByName("Launch vehicle")}
                className={`w-10 h-10 lg:w-[58px] lg:h-[58px] rounded-full text-lg lg:text-2xl font-bellefair cursor-pointer flex justify-center items-center transition-colors ${
                  technology.name === "Launch vehicle"
                    ? "bg-white text-black"
                    : "border border-white/25 hover:border-white text-white"
                }`}
              >
                <span className="w-1">1</span>
              </button>
              <button
                aria-label="toggle technology"
                onClick={() => setTechnologyByName("Spaceport")}
                className={`w-10 h-10 lg:w-[58px] lg:h-[58px] rounded-full text-lg lg:text-2xl font-bellefair cursor-pointer flex justify-center items-center transition-colors ${
                  technology.name === "Spaceport"
                    ? "bg-white text-black"
                    : "border border-white/25 hover:border-white text-white"
                }`}
              >
                <span className="w-2">2</span>
              </button>
              <button
                aria-label="toggle technology"
                onClick={() => setTechnologyByName("Space capsule")}
                className={`w-10 h-10 lg:w-[58px] lg:h-[58px] rounded-full text-lg lg:text-2xl font-bellefair cursor-pointer flex justify-center items-center transition-colors ${
                  technology.name === "Space capsule"
                    ? "bg-white text-black"
                    : "border border-white/25 hover:border-white text-white"
                }`}
              >
                <span className="w-2">3</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="flex flex-col gap-4 font-bellefair text-2xl md:text-[40px] uppercase text-white text-center lg:text-left">
                <span className="text-white/50 text-lg md:text-2xl">
                  The termilogy..
                </span>
                {technology.name}
              </h2>
              <p className="max-w-[327px] md:max-w-[512px] lg:max-w-[491px] font-normal text-indigo-200 font-barlow text-[15px] md:text-base lg:text-lg leading-[27px] normal-case text-center lg:text-left tracking-normal">
                {technology.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
