import { portfolioTextCard } from "../utils/portfolioData";
import PortfolioCard from "./PortfolioCard";

const CompletedPortfolio = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28">
      <div className="m-auto w-[1110px] text-center flex-col align-middle">
        <h1 className="w-3/12 m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
          OUR PORTFOLIO
        </h1>
        <p>Trust us before hiring us! Presenting some of our best works till date to give you a glimpse of our hard work, determination, approach and execution. Hope you like it!</p>
        <div className="flex flex-wrap my-4">
          {portfolioTextCard.map(({ name, location, tr, id }, index) => (
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
    </div>
  );
};

export default CompletedPortfolio;
