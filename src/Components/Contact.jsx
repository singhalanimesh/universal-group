import { FaLocationDot } from "react-icons/fa6";

import { contactText } from "../utils/textData";

const Contact = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28 px-8">
      <div className="m-auto text-center flex-col align-middle xl:w-[1110px] ">
        <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] md:w-3/12 ">
          CONTACT US
        </h1>
        <p className="mb-7 pb-7 font-semibold">
          Feel free to contact us. We are always at your service.
        </p>
        <div className="flex flex-wrap">
          {contactText.map(({ office, group, address }, index) => (
            <div key={index} className="mx-auto mb-4 w-[330px] sm:w-[500px]">
              <div className="flex justify-center mx-4">
                <FaLocationDot size={45} color={"#18d26e"} />
              </div>
              <div className="mt-4 text-lg text-[#999999] font-bold">
                {office}
              </div>
              <div className="my-4 text-[#999999] font-semibold">{group}</div>
              <div className="my-4 mx-auto text-xs font-semibold w-72">
                {address}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
