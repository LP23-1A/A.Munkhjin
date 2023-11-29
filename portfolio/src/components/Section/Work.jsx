import { WorkDesc } from "../Data/WorkSetup";
import { WorkImg } from "../Data/WorkSetup";
export default function Work() {
  return (
    <>
    <div className="mt-40">
    <div className="flex ctrRow ">
        <p className="AboutBtn textalign">Work</p>
      </div>
      <p className="flex ctrRow mt-5">
        Some of the noteworthy projects I have built:
      </p>
      <div className="mt-20">
        <div className=" flex flex-col  md:flex-row ctrRow gap24px ">
          <WorkImg />
          <WorkDesc />
        </div>
        <div className=" flex flex-col-reverse   md:flex-row  ctrRow  gap24px ">
          <WorkDesc />
          <WorkImg />
        </div>
        <div className="flex-col flex md:flex-row   ctrRow  gap24px ">
          <WorkImg />
          <WorkDesc />
        </div>
      </div>
    </div>

    </>
  );
}
