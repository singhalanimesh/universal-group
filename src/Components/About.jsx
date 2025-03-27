import {
  aboutTextCard,
  aboutText,
  aboutTextService,
  aboutTextCompany,
} from "../utils/textData";
import Card from "./Card";
import ScrollTopButton from "./ScrollTopButton";

const About = () => {
  return (
    <div>
      <div className="bg-[#e3f5f8] pt-28 p-8">
        <div className="m-auto flex-col align-middle text-center xl:w-[1110px]">
          <div>
            <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] md:w-3/12">
              ABOUT US
            </h1>
            <p className="mb-8 pb-7 text-[15px]">{aboutText.p1}</p>
            <p className="mb-8 pb-7 text-[15px]">{aboutText.p2}</p>
          </div>

          <div className="flex flex-wrap">
            {aboutTextCard.map(({ key, value, title }, index) => (
              <div
                key={index}
                className="w-full mx-auto my-4 h-[476px] sm:w-[60%] md:w-[45%] lg:w-[30%]"
              >
                <Card
                  keyProp={key}
                  h="h-[476px] mx-auto w-[280px] sm:w-full"
                  text={value}
                  title={title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-12 px-8">
        <div className="m-auto flex-col align-middle text-gray-600 text-center xl:w-[1110px] ">
          <div>
            <h1 className="m-auto mb-8 text-[22px] font-bold border-b-[3px] border-[#18d26e] lg:w-7/12 ">
              UNIVERSAL OFFERS SOLUTIONS FOR YOUR BUILDINGS
            </h1>
            <p className="mb-8 pb-7 px-12 text-[15px]">{aboutText.p3}</p>
          </div>

          <div className="my-4 justify-center flex flex-wrap">
            <div className="w-[450px] px-4 md:w-2/4 ">
              {aboutTextService.map((index) => (
                <div key={index} className="mb-[7.5px] p-2 bg-gray-200 text-sm">
                  {index}
                </div>
              ))}
            </div>
            <div className="w-[450px] px-4 md:w-2/4">
              <img
                src={`${import.meta.env.BASE_URL}images/universal_about.jpg`}
                alt="About Image"
              />
            </div>
          </div>

          <div>
            <h1 className="mx-auto my-8 pt-4 text-[22px] font-bold border-b-[3px] border-[#18d26e] lg:w-5/12">
              UNIVERSAL GROUP COMPRISES OF
            </h1>
            <p className="text-center mb-8 pb-7 text-[15px]">{aboutText.p4}</p>
          </div>

          <div className="my-4 justify-center flex flex-wrap">
            <div className="w-96 px-4 md:w-2/4 ">
              <img
                src={`${import.meta.env.BASE_URL}images/universal_group.png`}
                alt=""
              />
            </div>
            <div className="w-[324px] px-4 m-auto md:w-2/5">
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
      <ScrollTopButton />
    </div>
  );
};

export default About;
