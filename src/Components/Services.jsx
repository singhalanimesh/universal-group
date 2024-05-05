import { serviceText, serviceTextCard } from "../utils/textData";
import Card from "./Card";

const Services = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28 px-8">
      <div className="m-auto text-center flex-col align-middle xl:w-[1110px]">
        <div>
          <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] lg:w-3/12">
            OUR SERVICES
          </h1>
          <p className="text-justify mb-8 pb-7">{serviceText["p"]}</p>
        </div>
        <div className="flex flex-wrap pt-4">
          {serviceTextCard.map(({ key, value, title }, index) => (
            <div key={index} className="mx-auto my-4 h-[600px] md:w-[45%] ">
              <Card keyProp={key} h="600px" text={value} title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
