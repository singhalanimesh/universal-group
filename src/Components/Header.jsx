import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";
import useScroll from "../utils/useScroll";

const Header = () => {
  const isScrolled = useScroll(28);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`z-10 fixed top-0 left-0 w-full duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="py-8 h-20 flex justify-between bg-transparent">
        <div className="pl-16">
          <Link
            to="/"
            className="fixed pl-3 -mt-1 text-[#003866] border-l-[#18d26e] border-l-4 font-bold text-2xl tracking-[0.2em]"
            onClick={handleClick}
          >
            UNIVERSAL GROUP
          </Link>
        </div>
        <div className="flex pr-16">
          <Link
            to="/"
            className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm"
            onClick={handleClick}
          >
            HOME
          </Link>
          <Dropdown
            title={"ABOUT"}
            links={["about-us", "awards-and-achievements", "universal-team"]}
          />
          <Dropdown
            title={"PORTFOLIO"}
            links={["current-projects", "completed-projects"]}
          />
          {/* <div className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
            EVENTS
          </div> */}
          <Link
            to="/services"
            className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm"
            onClick={handleClick}
          >
            SERVICES
          </Link>
          <Link
            to="/career"
            className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm"
            onClick={handleClick}
          >
            CAREER
          </Link>
          <Link
            to="/contact"
            className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm"
            onClick={handleClick}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
