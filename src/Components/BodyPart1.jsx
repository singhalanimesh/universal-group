import { Link } from "react-router-dom";

import { bodyTextCard, bodyWelcomeText } from "../utils/textData";
import Card from "./Card";

const BodyPart1 = () => {
  const handleLink = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="bg-white mb-8 p-8">
        <div className="m-auto w-[1110px] text-center flex-col align-middle">
          <h1 className="w-5/12 mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
            WELCOME TO UNIVERSAL
          </h1>
          <p className="mb-8 pb-7 text-[15px]">{bodyWelcomeText[0]}</p>
          <p className="mb-8 pb-7 text-[15px]">{bodyWelcomeText[1]}</p>
          <Link
            to="/about-us"
            onClick={handleLink}
            className="p-4 rounded-full text-white bg-[#18d26e] "
          >
            MORE ABOUT US
          </Link>
        </div>
      </div>

      <div className="bg-[#e3f5f8] my-8 p-8">
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
                <Link
                  to="/services"
                  onClick={handleLink}
                  className="-mt-9 ml-10 absolute text-[#003866] hover:text-[#18d26e] font-semibold"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyPart1;
