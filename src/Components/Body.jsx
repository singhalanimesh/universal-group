import { universalTeam } from "../utils/textData";
import { Link } from "react-router-dom";
import BodyPart1 from "./BodyPart1";
import BodyPart2 from "./BodyPart2";
import BodyBackground from "./BodyBackground";
import Clientele from "./Clientele";

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
        <div className="m-auto w-[1110px] text-center flex-col align-middle">
          <h1 className="w-4/12 mx-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
            UNIVERSAL TEAM
          </h1>
          {universalTeam["p"]}
          <div className="flex justify-around py-8">
            <img
              src="src\assets\motivation-tour-1.jpeg"
              className="mx-auto w-[520px] rounded-md"
            />
            <img
              src="src\assets\motivation-tour-2.jpeg"
              className="mx-auto w-[520px] rounded-md"
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
