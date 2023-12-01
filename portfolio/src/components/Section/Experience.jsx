import DrawFourth from "../Data/ExperienceData";
export default function Experience() {
  return (
    <>
      <div className="max-w-full sm:w-full md:w-full lg:mt-[200px] experience dark:bg-[#111827]">
        <div className="flex ctrRow">
          <p className="AboutBtn textalign ">Experience</p>
        </div>

        <p className="textalign mt-6">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="mr-[20px] ">
        <DrawFourth />
        </div>
       
      </div>
    </>
  );
}
