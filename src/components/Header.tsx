import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768 ? true : false);
  const location = useLocation();

  return (
    <header className="relative w-full py-6 flex flex-row justify-between">
      <div className="pl-6 lg:pl-16 lg:mt-10 lg:flex lg:gap-16 lg:items-center lg:w-full">
        <Link to={"/"} className="min-w-12">
          <img src={logo} alt="Logo" />
        </Link>
        <hr className="hidden lg:block lg:w-full mr-[680px] text-white/25 z-30" />
      </div>
      <button
        aria-expanded={isOpen}
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
        className="focus-visible:bg-white/10 focus:outline-none mr-6 "
      >
        <img
          src={iconHamburger}
          alt="Menu"
          className={`cursor-pointer md:hidden  ${isOpen ? "hidden" : "block"}`}
        />
      </button>
      <div
        className={`z-10 bg-gray-950/15 md:bg-white/5 backdrop-blur-md flex flex-col absolute top-0 right-0 w-[254px]  min-h-[100vh] gap-12 md:flex-row pl-8 transform transition-transform duration-700 ease  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:items-center md:translate-x-0 md:w-[640px] md:min-h-auto md:h-24 md:max-h-24 md:px-10 md:justify-end lg:w-[736px]  lg:mt-10`}
      >
        <header className="flex justify-end py-8 pr-6 md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="cursor-pointer focus-visible:bg-white/10 focus:outline-none"
            tabIndex={!isOpen ? -1 : 0}
          >
            <img src={iconClose} alt="Close" />
          </button>
        </header>
        <nav className="flex flex-col md:flex-row gap-8 md:h-full ">
          <div
            className={`flex items-center md:justify-center transition-colors duration-800 border-r-[3px] border-transparent  md:border-r-0 md:border-b-[3px]  ${
              location.pathname === "/"
                ? "border-white"
                : "hover:border-white/50"
            }`}
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              tabIndex={!isOpen ? -1 : 0}
              className="font-barlow text-white flex gap-3 uppercase tracking-[2px] focus:outline-none focus-visible:bg-white/10"
            >
              <span className="font-bold md:hidden lg:block">00</span>
              Home
            </Link>
          </div>
          <div
            className={`flex items-center md:justify-center transition-colors duration-800 border-r-[3px] border-transparent  md:border-r-0 md:border-b-[3px]  ${
              location.pathname === "/destination"
                ? "border-white"
                : "hover:border-white/50"
            }`}
          >
            <Link
              to="/destination"
              onClick={() => setIsOpen(false)}
              tabIndex={!isOpen ? -1 : 0}
              className="font-barlow text-white flex gap-3 uppercase tracking-[2px] focus:outline-none focus-visible:bg-white/10"
            >
              <span className="font-bold">01</span>
              Destination
            </Link>
          </div>
          <div
            className={`flex items-center md:justify-center transition-colors duration-800 border-r-[3px] border-transparent  md:border-r-0 md:border-b-[3px]  ${
              location.pathname === "/crew"
                ? "border-white"
                : "hover:border-white/50"
            }`}
          >
            <Link
              to="/crew"
              onClick={() => setIsOpen(false)}
              tabIndex={!isOpen ? -1 : 0}
              className="font-barlow text-white flex gap-3 uppercase tracking-[2px] focus:outline-none focus-visible:bg-white/10"
            >
              <span className="font-bold">02</span>
              Crew
            </Link>
          </div>
          <div
            className={`flex items-center md:justify-center transition-colors duration-800 border-r-[3px] border-transparent  md:border-r-0 md:border-b-[3px]  ${
              location.pathname === "/technology"
                ? "border-white"
                : "hover:border-white/50"
            }`}
          >
            <Link
              to="/technology"
              onClick={() => setIsOpen(false)}
              tabIndex={!isOpen ? -1 : 0}
              className="font-barlow text-white flex gap-3 uppercase tracking-[2px] focus:outline-none focus-visible:bg-white/10"
            >
              <span className="font-bold">03</span>
              Technology
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
