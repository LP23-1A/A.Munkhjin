import Message from "../ICons/MessageIcon";
import Callicon from "../ICons/Callicon";
import Duplicate from "../ICons/DuplicateIcon";
import Twittericon from "../ICons/TwitterIcon";
import FigmaIcon from "../ICons/FigmaIcon";
import GitIcon from "../ICons/GitIcon";
export default function Getintouch() {
  return (
    <>
      <div className="      mt-40       flex ctrRow directionColumn">
        <div className=" flex ctrRow">
          <p className="AboutBtn text-center dark:bg-[#374151] dark:text-white">Get in Touch</p>
        </div>
        <div className="flex justify-center items-center mt-10">
        <p className="w-max dark:text-[#D1D5DB] ">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        </div>
       
        <div className="flex ctrRow ctrColumn mt-20">
            <Message/>
            <h1 className=" text-[24px] sm:text-4xl dark:text-white">
            reachsagarshah@gmail.com
            </h1>
            <Duplicate/>
        </div>
        <div className="flex ctrRow ctrColumn mt-10">
            <Callicon/>
            <h1 className="text-[24px] sm:text-4xl dark:text-white">
            +91 8980500565
            </h1>
            <Duplicate/>
        </div>
        <div>
            <div className="flex ctrRow dark:text-[#D1D5DB] ">

            <p>You may also find me on these platforms!</p>
            </div>
            <div className="flex ctrRow">
                <GitIcon/>
                <Twittericon/>
                <FigmaIcon/>
            </div>
            <div className="flex ctrRow marginTop96px dark:text-[#D1D5DB]">

            <p>2023 | Designed and coded with ❤️️ by Sagar Shah</p>
            </div>
        </div>
      </div>
    </>
  );
}
