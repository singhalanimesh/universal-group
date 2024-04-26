import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 50;
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="py-8 h-20 flex justify-between bg-transparent">
        <div className="pl-8">
          <Link to="/">
            <div className="fixed pl-2 -mt-1 text-[#003866] border-l-[#18d26e] border-l-4 font-bold text-2xl tracking-[0.2em]">
              UNIVERSAL GROUP
            </div>
          </Link>
        </div>
        <div className="flex pr-16">
          <Link to="/">
            <div className="px-4 transitionduration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
              HOME
            </div>
          </Link>
          <Link to="/about">
            <div className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
              ABOUT
            </div>
          </Link>
          <Link to="/portfolio">
            <div className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
              PORTFOLIO
            </div>
          </Link>
          <Link to="/events">
            <div className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
              EVENTS
            </div>
          </Link>
          <Link to="/services">
            <div className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
              SERVICES
            </div>
          </Link>
          <Link to="/career">
            <div className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
              CAREER
            </div>
          </Link>
          <Link to="/contact">
            <div className="px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
              CONTACT US
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
