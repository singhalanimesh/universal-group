import { FaAngleUp } from "react-icons/fa";

import useScroll from "../utils/useScroll";

const ScrollTopButton = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isScrolled = useScroll(500);

  return (
    <div>
      {isScrolled && (
        <div>
          <button
            className="fixed bottom-4 right-4 bg-[#18d26e] text-white p-4 rounded-full shadow-md hover:bg-[#13a456] focus:outline-none"
            onClick={handleScroll}
          >
            <FaAngleUp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollTopButton;
