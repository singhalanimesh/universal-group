import { portfolioTextCurrent } from "../utils/portfolioData";
import PortfolioCard from "./PortfolioCard";
import ScrollTopButton from "./ScrollTopButton";

const CurrentPortfolio = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28">
      <div className="m-auto w-[1110px] text-center flex-col align-middle">
        <h1 className="w-3/12 m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
          OUR PORTFOLIO
        </h1>
        <div className="flex flex-wrap my-4">
          {portfolioTextCurrent.map(({ name, location, tr, id }, index) => (
            <div key={index} className="m-auto w-[30%]">
              <PortfolioCard
                name={name}
                location={location}
                tr={tr}
                // type={type}
                id={id}
              />
            </div>
          ))}
        </div>
      </div>
      <ScrollTopButton />
    </div>
  );
};

export default CurrentPortfolio;
