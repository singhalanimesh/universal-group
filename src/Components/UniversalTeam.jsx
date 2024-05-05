import { universalTeam, universalTeamCard } from "../utils/textData";
import Card from "./Card";

const UniversalTeam = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28">
      <div className="m-auto w-[1110px] text-center flex-col align-middle">
        <h1 className="w-4/12 m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
          UNIVERSAL TEAM
        </h1>
        <p className=" mb-8 pb-7 font-semibold">{universalTeam["p"]}</p>
        <div className="flex flex-wrap">
          {universalTeamCard.map(({ key, title }, index) => (
            <div key={index} className="mx-auto my-4 lg:h-[408px] sm:w-[45%] ">
              <Card keyProp={key} h="408px" title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversalTeam;
