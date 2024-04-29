import { FaLocationDot } from "react-icons/fa6";

import { contacttextb, contacttextm } from "../utils/textdata";

const Contact = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28">
      <div className="m-auto w-[1110px] flex-col align-middle">
        <h1 className="w-3/12 m-auto mb-8 text-center text-[32px] font-bold border-b-[3px] border-[#18d26e]">
          CONTACT US
        </h1>
        <p className="text-center mb-7 pb-7 font-semibold">
          Feel free to contact us. We are always at your service.
        </p>
        <div className="flex flex-wrap text-center">
          {contacttextm.map(({ office, address }, index) => (
            <div key={index} className="w-5/12 pb-4 m-auto">
              <div className="flex justify-center m-4">
                <FaLocationDot size={45} color={"#18d26e"} />
              </div>
              <div className="text-lg text-[#999999] font-bold">{office}</div>
              <div className="my-4 text-xs font-semibold">{address}</div>
            </div>
          ))}
          {contacttextb.map(({ office, group, address }, index) => (
            <div key={index} className="w-[245px] m-4">
              <div className="flex justify-center m-4">
                <FaLocationDot size={45} color={"#18d26e"} />
              </div>
              <div className=" text-lg text-[#999999] font-bold">{office}</div>
              <div className="my-4 text-[#999999] font-semibold">{group}</div>
              <div className="my-4 text-xs font-semibold">{address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
