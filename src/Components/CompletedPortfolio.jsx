import { portfolioTextCard } from "../utils/portfolioData";
import Clientele from "./Clientele";
import PortfolioCard from "./PortfolioCard";
import ScrollTopButton from "./ScrollTopButton";

const CompletedPortfolio = () => {
  return (
    <div>
      <div className="bg-[#e3f5f8] pt-28 pb-6 mb-8">
        <div className="m-auto text-center flex-col align-middle xl:w-[1110px]">
          <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] sm:w-5/12 ">
            COMPLETED PROJECTS
          </h1>
          <p>
            Trust us before hiring us! Presenting some of our best works till
            date to give you a glimpse of our hard work, determination, approach
            and execution. Hope you like it!
          </p>
          <div className="flex flex-wrap my-4">
            {portfolioTextCard.map(({ name, location, tr, id }, index) => (
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
      </div>
      <Clientele />
      <ScrollTopButton />
    </div>
  );
};

export default CompletedPortfolio;
