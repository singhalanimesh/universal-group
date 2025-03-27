import { Link } from "react-router-dom";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";

import Dropdown from "./Dropdown";
import useScroll from "../utils/useScroll";
import useWidth from "../utils/useWidth";

const Header1 = () => {
  const isScrolled = useScroll(28);
  const currentWidth = useWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (currentWidth > 640) setIsMenuOpen(false);
  };

  return (
    <header
      className={`z-10 fixed top-0 left-0 w-full duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="mt-4 h-20 flex justify-between pb-16 sm:pt-8 lg:pb-8 sm:mt-0">
        <div className="pl-4 sm:pl-12">
          <Link
            to="/"
            className="fixed pl-3 -mt-1 text-[#003866] border-l-[#18d26e] border-l-4 font-bold text-2xl tracking-[0.2em] w-12 sm:w-96"
            onClick={handleClick}
          >
            UNIVERSAL GROUP
          </Link>
        </div>

        <div>
          <div className={`md:hidden px-4 pl-20`} onClick={toggleMenu}>
            <LuMenu size={35} />
          </div>

          <div
            className={`${
              isMenuOpen || currentWidth > 768 ? " " : "hidden"
            } bg-white sm:bg-transparent mt-0 flex flex-col md:flex-row sm:my-8 lg:mt-0 lg:pr-16 `}
          >
            <Link
              to="/"
              onClick={() => {
                toggleMenu(), handleClick();
              }}
              className="px-2 my-1 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm"
            >
              HOME
            </Link>

            <Dropdown
              title="ABOUT"
              links={[
                "about-us",
                "customer-appreciation",
                "awards-and-achievements",
                "universal-team",
              ]}
              menu={toggleMenu}
            />

            <Dropdown
              title="PORTFOLIO"
              links={["completed-projects", "current-projects"]}
              menu={toggleMenu}
            />

            {/* <Link to="/events" onClick={toggleMenu} className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
            EVENTS
          </Link> */}

            <Link
              to="/services"
              onClick={() => {
                toggleMenu(), handleClick();
              }}
              className="px-2 my-1 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm"
            >
              SERVICES
            </Link>

            <div className="px-2 my-1 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
              <button
                onClick={() =>
                  window.open(
                    `${import.meta.env.BASE_URL}Universal_Credential.pdf`,
                    "_blank"
                  )
                }
              >
                CREDENTIAL
              </button>
            </div>

            <Link
              to="/career"
              onClick={() => {
                toggleMenu(), handleClick();
              }}
              className="px-2 my-1 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm"
            >
              CAREER
            </Link>

            <Link
              to="/contact"
              onClick={() => {
                toggleMenu(), handleClick();
              }}
              className="px-2 my-1 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
