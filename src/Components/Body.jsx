import { HiCog } from "react-icons/hi2";
import { TbAirConditioning } from "react-icons/tb";
import { BiHappyBeaming } from "react-icons/bi";

import { bodyTextIntro, universalTeam } from "../utils/textData";
import Car from "./Car";
import { Link } from "react-router-dom";
import BodyPart1 from "./BodyPart1";
import BodyPart2 from "./BodyPart2";

const Body = () => {
  const handleLink = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      <BodyPart1 />
      <BodyPart2 />

      <div className="bg-white my-8 ">
        <div className="m-auto w-[1110px] text-center flex-col align-middle">
          <h1 className="w-4/12 mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
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
            onClick={handleLink}
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
