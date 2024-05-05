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
    <div className="p-8 pt-0">
      <div className="m-auto flex-col align-middle text-center xl:w-[1110px]">
        <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] lg:w-3/12">
          OUR CLIENTELE
        </h1>
        <Car h={"[30px] m-4"} images={images} />
      </div>
    </div>
  );
};

export default Clientele;
