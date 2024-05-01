import { HiCog } from "react-icons/hi2";
import { TbAirConditioning } from "react-icons/tb";
import { BiHappyBeaming } from "react-icons/bi";

import {
  bodyTextCard,
  bodyWelcomeText,
  bodyTextIntro,
  universalTeam,
} from "../utils/textData";
import Car from "./Car";
import { Link } from "react-router-dom";
import Card from "./Card";

const Body = () => {
  return (
    <div>
      <Car />

      <div className="bg-[#18d26e] ">
        <div className="m-auto w-[1110px] flex">
          {bodyTextIntro.map(({ name, value, icon, color }, index) => (
            <div
              key={index}
              className={`w-1/3 p-8 h-[288px] ${color ? "bg-[#003866]" : ""}`}
            >
              {icon == "h" ? (
                <HiCog size="60" color="white" />
              ) : icon == "t" ? (
                <TbAirConditioning size="60" color="white" />
              ) : (
                <BiHappyBeaming size="60" color="white" />
              )}
              <h4 className="my-4 text-lg text-white">{name}</h4>
              <p className="text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#e3f5f8] mb-8 p-8">
        <div className="m-auto w-[1110px] text-center flex-col align-middle">
          <h1 className="w-5/12 mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
            WELCOME TO UNIVERSAL
          </h1>
          <p className="mb-8 pb-7 text-[15px]">{bodyWelcomeText[0]}</p>
          <p className="mb-8 pb-7 text-[15px]">{bodyWelcomeText[1]}</p>
          <Link
            to="/about-us"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="p-4 rounded-full text-white bg-[#18d26e] "
          >
            MORE ABOUT US
          </Link>
        </div>
      </div>

      <div className="bg-white my-8">
        <div className="m-auto w-[1110px] text-center flex-col align-middle">
          <h1 className="w-3/12 mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
            OUR SERVICES
          </h1>
          <div className="flex flex-wrap pt-4">
            {bodyTextCard.map(({ key, value, title }, index) => (
              <div
                key={index}
                className="w-[23%] mx-auto h-[413px] shadow text-sm tracking-wide"
              >
                <Card keyProp={key} h="413px" text={value} title={title} />
              </div>
            ))}
          </div>{" "}
        </div>
      </div>

      <div className="bg-[#e3f5f8] my-8 p-8">
        <div className="m-auto w-[1110px] text-center flex-col align-middle">
          <h1 className="w-6/12 mx-auto mb-8 text-3xl font-bold border-b-[3px] border-[#18d26e]">
            Authorized Channel Partners Of
          </h1>
          <div className="flex justify-around">
            <img src="src\assets\Daikin.png" alt="" className="m-auto" />
            <img src="src\assets\Hitachi.png" alt="" className="m-auto" />
          </div>
        </div>
      </div>

      <div className="bg-white my-8">
        <div className="m-auto w-[1110px] text-center flex-col align-middle">
          <h1 className="w-5/12 mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
            OUR PORTFOLIO
          </h1>
          <div className="flex">
            <div className="w-[31%] mx-auto">
              <Card keyProp={"key"} h="413px" title={"title"} />
            </div>
            <div className="w-[31%] mx-auto">
              <Card keyProp={"key"} h="413px" title={"title"} />
            </div>
            <div className="w-[31%] mx-auto">
              <Card keyProp={"key"} h="413px" title={"title"} />
            </div>
          </div>
          <Link
            to="/portfolio"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="p-4 rounded-full text-white bg-[#18d26e] "
          >
            SEE ALL
          </Link>
        </div>
      </div>

      <div className="bg-[#e3f5f8] my-8 p-8 ">
        <div className="m-auto w-[1110px] text-center flex-col align-middle">
          <h1 className="w-6/12 mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
            UNIVERSAL TEAM
          </h1>
          {universalTeam["p"]}
          <div className="flex justify-around py-8">
            <img
              src="src\assets\motivation-tour-1.jpeg"
              className="mx-auto w-[520px]"
            />
            <img
              src="src\assets\motivation-tour-2.jpeg"
              className="mx-auto w-[520px]"
            />
          </div>
          <Link
            to="/universal-team"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="p-4 rounded-full text-white bg-[#18d26e] "
          >
            SEE ALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
