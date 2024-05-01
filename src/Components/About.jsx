import {
  aboutTextCard,
  aboutText,
  aboutTextService,
  aboutTextCompany,
} from "../utils/textData";
import Card from "./Card";

const About = () => {
  return (
    <div>
      <div className="bg-[#e3f5f8] pt-28 pb-8">
        <div className="m-auto w-[1110px] flex-col align-middle text-center">
          <div>
            <h1 className="w-2/12 m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
              ABOUT US
            </h1>
            <p className="mb-8 pb-7 text-[15px]">
              {aboutText["p1"]}
            </p>
            <p className="mb-8 pb-7 text-[15px]">
              {aboutText["p2"]}
            </p>
          </div>

          <div className="flex">
            {aboutTextCard.map(({ key, value, title }, index) => (
              <div key={index} className="w-[30%] mx-auto my-4 h-[476px]">
                <Card keyProp={key} h="476px" text={value} title={title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-12">
        <div className="m-auto w-[1110px] flex-col align-middle text-gray-600 text-center">
          <div>
            <h1 className="w-7/12 m-auto mb-8 text-[22px] font-bold border-b-[3px] border-[#18d26e]">
              UNIVERSAL OFFERS SOLUTIONS FOR YOUR BUILDINGS
            </h1>
            <p className="mb-8 pb-7 px-12 text-[15px]">
              {aboutText["p3"]}
            </p>
          </div>

          <div className="my-4 flex">
            <div className="w-2/4 px-4">
              {aboutTextService.map((index) => (
                <div
                  key={index}
                  className="my-[7.5px] p-[6px] pl-8 bg-gray-200 text-sm"
                >
                  {index}
                </div>
              ))}
            </div>
            <div className="w-2/4 px-4">
              <img src="src\assets\universal_about.jpg" alt="" />
            </div>
          </div>

          <div>
            <h1 className="w-5/12 mx-auto my-8 pt-4 text-[22px] font-bold border-b-[3px] border-[#18d26e]">
              UNIVERSAL GROUP COMPRISES OF
            </h1>
            <p className="text-center mb-8 pb-7 text-[15px]">
              Universal Group now boasts a team of 250 highly skilled and
              efficient staff members
            </p>
          </div>

          <div className="my-4 flex">
            <div className="w-2/4 px-4">
              <img src="src\assets\universal_group.png" alt="" />
            </div>
            <div className="w-2/5 px-4 m-auto">
              {aboutTextCompany.map(({ key, value }, index) => (
                <div key={index} className="my-4 text-center text-lg">
                  <strong>{key}</strong>
                  <br />
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
