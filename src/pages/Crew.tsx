import useCrew from "../hooks/useCrew";

export default function Crew() {
  const { crewMember, setCrewMemberByName } = useCrew();

  return (
    <main className="fadeIn p-6 md:p-10 md:pb-0 lg:py-12 lg:px-0">
      <div className="flex flex-col gap-7 lg:max-w-[1110px] lg:mx-auto">
        <h1 className="text-center md:text-left font-barlow-condensed text-white uppercase tracking-[2.4px] md:text-xl lg:text-[28px] md:tracking-[3px] lg:tracking-[4px]">
          <span className="font-bold text-white/25 mr-6">02</span>
          Meet your crew
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 md:items-center md:justify-start">
          {/* Descripción */}
          <div className="flex flex-col gap-10 lg:max-w-[539px] ">
            <div className="flex flex-col gap-6 mt-10 lg:mt-0 lg:h-[631px] lg:items-start lg:justify-center">
              {/* Nombre y Rol */}
              <h2 className="flex flex-col font-bellefair text-white uppercase text-2xl md:text-[40px] lg:text-[56px]  text-center lg:text-left">
                <span className="text-white/50 text-lg md:text-2xl lg:text-[32px] ">
                  {crewMember.role}
                </span>
                {crewMember.name}
              </h2>
              {/* Biografía */}
              <p className="text-indigo-200 text-center lg:text-left text-[15px] md:text-base lg:text-[18px] leading-[27px] h-[164px] md:max-w-[512px] lg:max-w-[539px] ">
                {crewMember.bio}
              </p>
            </div>
            <div className="lg:h-[63px]">
              <div className="flex gap-4 lg:gap-10 justify-center lg:justify-start">
                <button
                  aria-label="toggle crew member"
                  onClick={() => setCrewMemberByName("Douglas Hurley")}
                  className={`w-2.5 h-2.5 lg:w-[15px] lg:h-[15px] rounded-full transition-colors duration-500 cursor-pointer ${
                    crewMember.name === "Douglas Hurley"
                      ? "bg-white"
                      : "bg-white/17 hover:bg-white/40"
                  }`}
                ></button>
                <button
                  aria-label="toggle crew member"
                  onClick={() => setCrewMemberByName("Mark Shuttleworth")}
                  className={`w-2.5 h-2.5 lg:w-[15px] lg:h-[15px] rounded-full transition-colors duration-500 cursor-pointer ${
                    crewMember.name === "Mark Shuttleworth"
                      ? "bg-white"
                      : "bg-white/17 hover:bg-white/40"
                  }`}
                ></button>
                <button
                  aria-label="toggle crew member"
                  onClick={() => setCrewMemberByName("Victor Glover")}
                  className={`w-2.5 h-2.5 lg:w-[15px] lg:h-[15px] rounded-full transition-colors duration-500 cursor-pointer ${
                    crewMember.name === "Victor Glover"
                      ? "bg-white"
                      : "bg-white/17 hover:bg-white/40"
                  }`}
                ></button>
                <button
                  aria-label="toggle crew member"
                  onClick={() => setCrewMemberByName("Anousheh Ansari")}
                  className={`w-2.5 h-2.5 lg:w-[15px] lg:h-[15px] rounded-full transition-colors duration-500 cursor-pointer ${
                    crewMember.name === "Anousheh Ansari"
                      ? "bg-white"
                      : "bg-white/17 hover:bg-white/40"
                  }`}
                ></button>
              </div>
            </div>
          </div>
          {/* Imagen */}
          <div className="flex flex-col justify-center items-center">
            <picture className="max-w-[271px] image-gradient md:mask-none lg:image-gradient md:max-w-[446px] lg:max-w-[539px] ">
              <source srcSet={crewMember.images.webp} type="image/webp" />
              <img
                src={crewMember.images.png}
                alt="Douglas Hurley"
                className="max-h-[340px] md:max-h-max"
              />
            </picture>
          </div>
        </div>
      </div>
    </main>
  );
}
