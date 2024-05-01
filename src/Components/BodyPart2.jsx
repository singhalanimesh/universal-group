import { Link } from "react-router-dom";

import PortfolioCard from "./PortfolioCard";
import { portfolioTextMilestone } from "../utils/portfolioData";

const BodyPart2 = () => {
  const handleLink = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="bg-white my-8">
        <div className="m-auto w-[1110px] text-center flex-col align-middle">
          <h1 className="w-7/12 mx-auto mb-8 text-3xl font-bold border-b-[3px] border-[#18d26e]">
            AUTHORIZED CHANNEL PARTNERS OF
          </h1>
          <div className="flex justify-around">
            <img src="src\assets\Daikin.png" alt="" className="m-auto" />
            <img src="src\assets\Hitachi.png" alt="" className="m-auto" />
          </div>
        </div>
      </div>

      <div className="bg-[#e3f5f8] my-8 p-8">
        <div className="m-auto w-[1110px] text-center flex-col align-middle">
          <h1 className="w-3/12 mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
            OUR PORTFOLIO
          </h1>
          <div className="flex flex-wrap pb-8">
            {portfolioTextMilestone.map(({ name, location, tr, id }, index) => (
              <div key={index} className="m-auto w-[45%]">
                <PortfolioCard
                  name={name}
                  location={location}
                  tr={tr}
                  id={id}
                />
              </div>
            ))}
          </div>
          <Link
            to="/portfolio"
            onClick={handleLink}
            className="p-4 rounded-full text-white bg-[#18d26e] "
          >
            SEE ALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BodyPart2;
