import DrawFourth from "../Data/ExperienceData";
export default function FourthMain() {
  return (
    <>
      <div className=" ml-14 lg:marginTop96px experience">
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
