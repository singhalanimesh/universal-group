import Card from "./Card";

const Awards = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28">
      <div className="m-auto w-[1110px] text-center flex-col align-middle">
        <h1 className="w-6/12 m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
          AWARDS AND ACHIEVEMENTS
        </h1>
        <p className="mb-8 pb-7 font-semibold">
          Top Performer Dealer of Daikin VRV System in Whole of India. Top
          Performer Dealer of Hitachi in Eastern India.
        </p>
        <div className="flex flex-wrap">
          <div key={"index"} className="w-[45%] mx-auto my-4 h-[408px]">
            <Card keyProp={"key"} h="408px" title={"title"} />
          </div>
          <div key={"index"} className="w-[45%] mx-auto my-4 h-[408px]">
            <Card keyProp={"key"} h="408px" title={"title"} />
          </div>
          <div key={"index"} className="w-[45%] mx-auto my-4 h-[408px]">
            <Card keyProp={"key"} h="408px" title={"title"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
