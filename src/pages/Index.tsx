import { Link } from "react-router-dom";
export default function Index() {
  return (
    <main className="fadeIn p-6 md:px-10 md:py-32 lg:px-0 lg:py-32 lg:max-w-[1110px] lg:mx-auto grid grid-cols-1 lg:grid-cols-2 lg:pt-[280px]">
      <div className="flex flex-col items-center lg:items-start gap-6 lg:mt-auto">
        <span className="text-indigo-200 uppercase font-barlow-condensed text-base tracking-[0.15em] md:text-[28px] md:tracking-[4px] leading-[1.2145] ">
          So, you want to travel to
        </span>
        <h1 className="text-center lg:text-left flex flex-col gap-6 font-bellefair text-[80px] md:text-[144px] text-white uppercase leading-[1.1459]">
          Space
        </h1>
        <p className="text-center lg:text-left text-indigo-200 font-barlow md:text-[16px] lg:text-[18px] leading-[29px]  max-w-[322px] md:max-w-[512px] lg:max-w-[540px] ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex justify-center pt-[119px] md:pt-16 lg:pt-0 lg:mt-auto">
        <Link
          to="/destination"
          className="group relative flex justify-center items-center bg-white text-gray-950 hover:text-gray-950/50 focus:text-gray-950/50 cursor-pointer uppercase rounded-full h-[144px] w-[144px] md:h-[272px] md:w-[272px] font-bellefair text-[18px] md:text-[32px] hover:outline-amber-50 focus:outline-0"
        >
          <span>Explore</span>
          <span className="absolute transition-all duration-500 rounded-full bg-white/0 -z-10 h-[144px] w-[144px] md:h-[272px] md:w-[272px] group-hover:w-[232px] group-hover:h-[232px] group-hover:md:w-[448px] group-hover:md:h-[448px] group-focus:w-[232px] group-focus:h-[232px] group-focus:md:w-[448px] group-focus:md:h-[448px] group-hover:bg-white/10 group-focus:bg-white/10"></span>
        </Link>
      </div>
    </main>
  );
}
