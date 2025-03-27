import { FaHome } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import { LiaHospitalSolid } from "react-icons/lia";

import { bodyTextIntro, imagesHero } from "../utils/textData";
import Car from "./Car";

const BodyBackground = () => {
  return (
    <div>
      <div className="relative">
        <Car
          imageClass={"h-screen opacity-40"}
          images={imagesHero}
          source={`${import.meta.env.BASE_URL}images/`}
          size="100%"
        />
        <div className="absolute inset-0 flex justify-center h-52 my-auto">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/Universal_Logo.png`}
              className="h-32"
            />
            <p className="text-center text-[#005294] font-bold">
              Universal is a complete HVAC <br />
              (Heating Ventilation and Air-Conditioning)
              <br /> Solutions Company
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#18d26e] ">
        <div className="m-auto flex flex-wrap md:w-[750px] lg:w-[1020px] xl:w-[1100px]">
          {bodyTextIntro.map(({ name, value, icon, color }, index) => (
            <div
              key={index}
              className={`p-8 h-[288px] w-full lg:w-[320px] xl:w-[340px] ${
                color ? "bg-[#003866]" : ""
              }`}
            >
              {icon == "h" ? (
                <LiaHospitalSolid size="60" color="white" />
              ) : icon == "t" ? (
                <BiBuildings size="60" color="white" />
              ) : (
                <FaHome size="60" color="white" />
              )}
              <h4 className="my-4 text-lg text-white">{name}</h4>
              <p className="text-white text-justify">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyBackground;
