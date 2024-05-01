import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28">
      <div className="m-auto w-[1110px] text-center flex-col align-middle">
        <h1 className="w-3/12 m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
          OUR PORTFOLIO
        </h1>
        <div className="flex flex-wrap my-4">
          <div className="m-auto w-[30%]">
            <PortfolioCard/>
          </div>
          <div className="m-auto w-[30%]">
            <PortfolioCard/>
          </div>
          <div className="m-auto w-[30%]">
            <PortfolioCard/>
          </div>
          <div className="m-auto w-[30%]">
            <PortfolioCard/>
          </div>
          <div className="m-auto w-[30%]">
            <PortfolioCard/>
          </div>
          <div className="m-auto w-[30%]">
            <PortfolioCard/>
          </div>
          <div className="m-auto w-[30%]">
            <PortfolioCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
