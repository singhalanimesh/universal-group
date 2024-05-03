import { TbAirConditioning } from "react-icons/tb";
import { bodyTextIntro } from "../utils/textData";
import Car from "./Car";
import { HiCog } from "react-icons/hi2";
import { BiHappyBeaming } from "react-icons/bi";

const BodyBackground = () => {
  const images = [
    "src\\assets\\Universal_House.jpg",
    "src\\assets\\Universal_House.jpg",
    "src\\assets\\Universal_House.jpg",
  ];
  return (
    <div><div className="relative">
    <Car h={"screen opacity-40"} images={images}/>
    <div className="absolute inset-0 flex justify-center h-52 my-auto">
      <div>
        <img src="src/assets/Universal_Logo.png" className="h-32" />
        <p className="text-center text-[#005294]  font-bold">
          Universal is a complete HVAC <br />
          (Heating Ventilation and Air-Conditioning)
          <br /> Solutions Company
        </p>
      </div>
    </div>
  </div><div className="bg-[#18d26e] ">
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
    </div></div>
  );
};

export default BodyBackground;
