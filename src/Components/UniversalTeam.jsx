import { universalTeam, universalTeamCard } from "../utils/textData";
import Card from "./Card";

const UniversalTeam = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28">
      <div className="m-auto text-center flex-col align-middle xl:w-[1110px]">
        <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] sm:w-4/12 ">
          UNIVERSAL TEAM
        </h1>
        <p className=" mb-8 pb-7 font-semibold">{universalTeam["p"]}</p>
        <div className="flex flex-wrap">
          {universalTeamCard.map(({ key, title }, index) => (
            <div key={index} className="mx-auto w-[330px] my-4 lg:h-[408px] sm:w-[45%] ">
              <Card keyProp={key} h="408px" title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversalTeam;
