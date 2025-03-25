import { careerP, careerText } from "../utils/textData";

const Career = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28 px-8">
      <div className="m-auto text-center flex-col align-middle xl:w-[1110px]">
        <div className="font-semibold">
          <h1 className="m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e] sm:w-2/12 ">
            CAREER
          </h1>
          <p className="pb-4">Build Your Career With Us.</p>
          <p> {careerP.p}</p>
          <p className="mb-8 pb-7">{careerP.e}</p>
        </div>

        <div className="flex flex-wrap justify-center align-top xl:justify-between">
          <div>
            <img
              src="images/career.png"
              className="w-[490px] xl:w-[600px]"
            />
          </div>
          <div className="text-justify w-[490px]">
            <div className="my-4 text-3xl font-semibold text-[#003866]">
              Current Openings
            </div>
            {careerText.map(
              ({ role, description, experience, skills }, index) => (
                <div key={index} className=" bg-[#c7ffc4] p-4 my-4 text-lg">
                  <div>VACANCY FOR THE POST OF {role.toUpperCase()}</div>
                  <div>Experience - {experience}</div>
                  <div>Job Describtion - {description}</div>
                  <div>Skills - {skills}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
