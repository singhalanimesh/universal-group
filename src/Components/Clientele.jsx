// import { Carousel } from "@mantine/carousel";
import Car from "./Car";

const Clientele = () => {
  const images = [
    "src/assets/clientele/alcove_logo.jpg",
    "src/assets/clientele/diamond_logo.jpg",
    "src/assets/clientele/iit-patna_logo.jpg",
    "src/assets/clientele/merlin_logo.jpg",
    "src/assets/clientele/orbitgroup_logo.jpg",
    "src/assets/clientele/peerless_logo.jpg",
    "src/assets/clientele/psgroup_logo.jpg",
    "src/assets/clientele/quest-mall-kolkata-logo.jpg",
    "src/assets/clientele/siddha_logo.jpg",
  ];

  return (
    <div className="pb-8">
      <div className="m-auto w-[1110px] flex-col align-middle text-center">
        <h1 className="w-3/12 m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
          OUR CLIENTELE
        </h1>
        <Car h={"[30px] m-4"} images={images} />
      </div>
    </div>
  );
};

export default Clientele;
