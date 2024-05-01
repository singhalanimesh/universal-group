import { serviceText, serviceTextCard } from "../utils/textData";
import Card from "./Card";

const Services = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28">
      <div className="m-auto w-[1110px] text-center flex-col align-middle">
        <div>
          <h1 className="w-3/12 m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
            OUR SERVICES
          </h1>
          <p className="text-justify mb-8 pb-7">{serviceText["p"]}</p>
        </div>
        <div className="flex flex-wrap pt-4">
          {serviceTextCard.map(({ key, value, title }, index) => (
            <div key={index} className="w-[45%] mx-auto my-4 h-[570px]">
              <Card keyProp={key} h="570px" text={value} title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
