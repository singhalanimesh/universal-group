import { portfolioTextCurrent } from "../utils/portfolioData";
import PortfolioCard from "./PortfolioCard";
import ScrollTopButton from "./ScrollTopButton";

const CurrentPortfolio = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28">
      <div className="m-auto text-center flex-col align-middle xl:w-[1110px]">
        <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] sm:w-4/12 ">
          RUNNING PROJECTS
        </h1>
        <div className="flex flex-wrap mt-4">
          {portfolioTextCurrent.map(({ name, location, tr, id }, index) => (
            <div key={index} className="m-auto w-[330px]">
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
