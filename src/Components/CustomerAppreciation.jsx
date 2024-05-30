import { custappreciationCard } from "../utils/textData";
import Card from "./Card";

const CustomerAppreciation = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28 px-8">
      <div className="m-auto text-center flex-col align-middle xl:w-[1110px]">
        <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] lg:w-6/12">
          CUSTOMER APPRECIATION
        </h1>
        <p className="mb-8 pb-7 font-semibold">
          A Happy Customer is our Best Advertisement. Universal strives to
          exceed expectations always.
        </p>
        <div className="flex flex-wrap">
          {custappreciationCard.map(({ key, title }, index) => (
            <div
              key={index}
              className="mx-auto my-4 lg:h-[408px] sm:w-[450px] "
            >
              <Card keyProp={key} h="h-[408px]" title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerAppreciation;
