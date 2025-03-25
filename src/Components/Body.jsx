import { Link } from "react-router-dom";

import { universalTeam } from "../utils/textData.js";
import BodyPart1 from "./BodyPart1";
import BodyPart2 from "./BodyPart2";
import BodyBackground from "./BodyBackground";
import Clientele from "./Clientele";
import ScrollTopButton from "./ScrollTopButton";

const Body = () => {
  const handleLink = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <BodyBackground />

      <BodyPart1 />

      <BodyPart2 />

      <Clientele />

      <div className="bg-[#e3f5f8] p-8 pb-12">
        <div className="m-auto text-center flex-col align-middle xl:w-[1110px] ">
          <h1 className="mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] lg:w-4/12 ">
            UNIVERSAL TEAM
          </h1>
          {universalTeam["p"]}
          <div className="flex flex-wrap justify-around py-8">
            <img
              src="images/motivation-tour-1.jpeg"
              className="mx-auto w-[520px] rounded-md m-4"
            />
            <img
              src="images/motivation-tour-2.jpeg"
              className="mx-auto w-[520px] rounded-md m-4"
            />
          </div>
          <Link
            to="/universal-team"
            onClick={handleLink}
            className="p-4 rounded-full text-white bg-[#18d26e] hover:bg-[#13a456]"
          >
            SEE ALL
          </Link>
        </div>
      </div>
      <ScrollTopButton />
    </div>
  );
};

export default Body;
