import Car from "./Car";

const Clientele = () => {
  const images = [
    "images/clientele/diamond_logo.jpg",
    "images/clientele/alcove_logo.jpg",
    "images/clientele/iit-patna_logo.jpg",
    "images/clientele/merlin_logo.jpg",
    "images/clientele/orbitgroup_logo.jpg",
    "images/clientele/peerless_logo.jpg",
    "images/clientele/psgroup_logo.jpg",
    "images/clientele/quest-mall-kolkata-logo.jpg",
    "images/clientele/siddha_logo.jpg",
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
