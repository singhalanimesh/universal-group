import { careerText } from "../utils/textData";

const Career = () => {
  return (
    <div className="bg-[#e3f5f8] pt-28">
      <div className="m-auto w-[1110px] text-center flex-col align-middle">
        <h1 className="w-2/12 m-auto mb-8 text-[32px] font-bold border-b-[3px] border-[#18d26e]">
          CAREER
        </h1>
        <p className="pb-4 font-semibold">Build Your Career With Us.</p>
        <p className="mb-8 pb-7 font-semibold">
          Interested Candidates can register interest for any current job
          openings in the given email with an attached CV and Role Mentioned in
          the subject. <br /> Email: info@universalgroupindia.org
        </p>
        <div className="flex justify-between align-top">
          <div><img
            src="src/assets/career.png"
            className="w-[600px]"
          /></div>

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
