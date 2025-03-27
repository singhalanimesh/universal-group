import { Link } from "react-router-dom";

import PortfolioCard from "./PortfolioCard";
import { portfolioTextMilestone } from "../utils/portfolioData";

const BodyPart2 = () => {
  const handleLink = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="bg-white my-8 px-8">
        <div className="m-auto text-center flex-col align-middle xl:w-[1110px] ">
          <h1 className="mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] lg:w-8/12">
            AUTHORIZED CHANNEL PARTNERS OF
          </h1>
          <div className="flex justify-around">
            <img
              src={`${import.meta.env.BASE_URL}images/Daikin.png`}
              className="m-auto h-32 sm:h-full"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/Hitachi.png`}
              className="m-auto h-32 sm:h-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#e3f5f8] my-8 p-8">
        <div className="m-auto text-center flex-col align-middle xl:w-[1110px]">
          <h1 className="mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] lg:w-3/12">
            OUR PORTFOLIO
          </h1>
          <div className="flex flex-wrap pb-8">
            {portfolioTextMilestone.map(({ name, location, tr, id }, index) => (
              <div key={index} className="m-auto lg:w-[31%]">
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
            to="/completed-projects"
            onClick={handleLink}
            className="p-4 rounded-full text-white bg-[#18d26e] hover:bg-[#13a456]"
          >
            SEE ALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BodyPart2;
