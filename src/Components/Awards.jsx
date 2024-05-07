import { awardsCard } from "../utils/textData";
import Card from "./Card";

const Awards = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28 px-8">
      <div className="m-auto text-center flex-col align-middle xl:w-[1110px]">
        <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] lg:w-6/12">
          AWARDS AND ACHIEVEMENTS
        </h1>
        <p className="mb-8 pb-7 font-semibold">
          Top Performer Dealer of Daikin VRV System in Whole of India. Top
          Performer Dealer of Hitachi in Eastern India.
        </p>
        <div className="flex flex-wrap">
          {awardsCard.map(({ key, title }, index) => (
            <div key={index} className="mx-auto my-4 lg:h-[408px] sm:w-[450px] ">
              <Card keyProp={key} h="408px" title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
