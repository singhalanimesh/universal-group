import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { footerData, footerDataP } from "../utils/textData";

const Footer = () => {
  return (
    <footer className="w-full bg-[#024780] z-20 text-sm text-white">
      <div className="">
        <div className="mx-auto flex flex-wrap justify-center pt-12">
          <div className="px-4 mb-8 w-[350px]">
            <h1 className="pl-3 mb-4 border-l-[#18d26e] border-l-4 font-bold text-4xl tracking-[0.2em] ">
              UNIVERSAL GROUP
            </h1>
            <p className="text-justify">
            {footerDataP[0]}
            </p>
            <div className="flex pt-4">
              <Link
                to="https://www.facebook.com/WeAreUniversalGroup"
                target="blank"
                className="bg-white rounded-full p-2 mr-2"
              >
                <FaFacebookF color="#18d26e" size="20" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/universal-group-hvac/"
                target="blank"
                className="bg-white rounded-full p-2"
              >
                <FaLinkedinIn color="#18d26e" size="20" />
              </Link>
            </div>
          </div>

          {footerData.map((value, index) => (
            <div key={index} className="px-4 mb-8 w-[350px] leading-6">
              <h4 className="font-bold pb-2 mb-4 border-b-2 border-[#18d26e]">
                {value.office}
              </h4>
              <p>{value.address}</p>
              <p>
                <strong>Phone</strong>: {value.phone}
              </p>
              {value.email && (
                <p>
                  <strong>Email</strong> : {value.email}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto flex justify-center items-center pb-8">
          <div>
            &copy; <strong>Universal Energy Solutions.</strong>{" "}
            {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
