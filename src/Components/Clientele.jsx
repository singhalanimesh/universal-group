import { imagesClients } from "../utils/textData";
import Car from "./Car";

const Clientele = () => {
  return (
    <div className="p-8 pt-0">
      <div className="m-auto flex-col align-middle text-center xl:w-[1110px]">
        <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] lg:w-3/12">
          OUR CLIENTELE
        </h1>
        <Car
          imageClass={"h-[152px] w-[276px] mx-3"}
          images={imagesClients}
          source={`${import.meta.env.BASE_URL}images/clientele/`}
          size="auto"
        />
      </div>
    </div>
  );
};

export default Clientele;
