import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import PropTypes from "prop-types";

const Dropdown = ({ title, links, menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openToggle = () => {
    setIsOpen(true);
  };

  const closeToggle = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="relative"
      onMouseEnter={openToggle}
      onMouseLeave={closeToggle}
    >
      <button className="flex items-center px-4 transition duration-300 text-[#003866] hover:text-[#18d26e] font-bold text-sm">
        {title}
        {isOpen ? (
          <FaAngleUp className="ml-2" />
        ) : (
          <FaAngleDown className="ml-2" />
        )}
      </button>
      {isOpen && (
        <div
          onMouseEnter={openToggle}
          onMouseLeave={closeToggle}
          className="absolute right-0 w-48 z-10 "
        >
          <div className="mt-2 bg-white rounded shadow-lg">
            {links.map((value, index) => (
              <Link
                key={index}
                to={`/${value}`}
                onClick={() => {
                  closeToggle(), handleClick(), menu();
                }}
                className="block px-4 py-2 text-[#003866] hover:text-[#18d26e]"
              >
                {value
                  .replace(/-/g, " ")
                  .split(" ")
                  .map(
                    (word) => word.charAt(0).toUpperCase() + word.slice(1) + " "
                  )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  menu: PropTypes.func,
};

export default Dropdown;
