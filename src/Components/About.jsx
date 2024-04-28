import { abouttextcard, abouttext } from "../utils/textdata";
import Card from "./Card";

const About = () => {
  return (
    <div>
      <div className="bg-[#e3f5f8] pt-28 pb-8">
        <div className="m-auto w-[1110px] flex-col align-middle ">
          <div>
            <h1 className="w-2/12 m-auto mb-8 text-center text-[32px] font-bold border-b-[3px] border-[#18d26e]">
              ABOUT US
            </h1>
            <p className=" text-center mb-8 pb-7 text-[15px]">
              {abouttext["p1"]}
            </p>
            <p className="text-center mb-8 pb-7 text-[15px]">
              {abouttext["p2"]}
            </p>
          </div>
          <div className="flex">
            {abouttextcard.map(({ key, value }, index) => (
              <div key={index} className="w-[30%] mx-auto my-4 h-[476px]">
                <Card key={key} keyProp={key} h="476px" text={value} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-12">
        <div className="m-auto w-[1110px] flex-col align-middle text-gray-600">
          <div>
            <h1 className="w-7/12 m-auto mb-8 text-center text-[22px] font-bold border-b-[3px] border-[#18d26e]">
              UNIVERSAL OFFERS SOLUTIONS FOR YOUR BUILDINGS
            </h1>
            <p className="text-center mb-8 pb-7 text-[15px]">
              Universal pioneered the use of TES (Thermal Energy Storage
              Technology)in Eastern India. In combination on and independently,
              depending upon which option will be the most cost-effective
              solution for our valuable clients.
            </p>
          </div>
          <div className="my-4 flex">
            <div className="w-2/4 px-4">
              <div className="my-[7.5px] p-[6px] pl-8 bg-gray-200 text-sm">
                Complete HVAC Solutions (Design to execution and maintenance)
              </div>
              <div className="my-[7.5px] p-[6px] pl-8 bg-gray-200 text-sm">
                Ventilation System(Kitchen, Basement, Car-Park etc)
              </div>
              <div className="my-[7.5px] p-[6px] pl-8 bg-gray-200 text-sm">
                Power Management(Complete Power Infrastructure Planning )
              </div>
              <div className="my-[7.5px] p-[6px] pl-8 bg-gray-200 text-sm">
                Fire Engineering (Design to execution)
              </div>
            </div>
            <div className="w-2/4 px-4">
              <img src="src\assets\universal_about.jpg" alt="" />
            </div>
          </div>
          <div>
            <h1 className="w-5/12 m-auto my-8 pt-4 text-center text-[22px] font-bold border-b-[3px] border-[#18d26e]">
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
            <div className="my-4 text-center text-lg">
                <strong>Universal Energy Solutions (P) Ltd.</strong>
                <br />
                Air-Conditioning, PowerManagement, Fire Engineering,
                Ventilation, R & D
              </div><div className="my-4 text-center text-lg">
                <strong>Universal Sales</strong>
                <br />
                Retail Sales & After-sales service.
              </div>
              <div className="my-4 text-center text-lg">
                <strong>Universal Sales & Projects</strong>
                <br />
                HVAC solutions for Cotext-center
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
