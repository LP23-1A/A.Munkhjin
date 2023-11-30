import LocationIcon from "../ICons/LocantionIcon";
import GitIcon from "../ICons/GitIcon";
import Twittericon from "../ICons/TwitterIcon";
import FigmaIcon from "../ICons/FigmaIcon";
import Profile from "./../../../public/Pic.png";
import GreenIcon from "../ICons/GreenIcon";
export default function Main() {
  
  return (
    
    <>
   
      <div className="flex marginTop96px  flex-col-reverse md:flex-row items-center justify-center  ">
      
        <div className="leftMain">
          <h1 className="text-4xl md: mt-10 text-black font-bold dark:text-white">Hi, I’m Sagar 👋</h1>
          <p className="mt-2 ">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="flex gap-5 flex-col mt-10">
          <div className="flex ctrColumn">
            <LocationIcon />
            <p>Ahmedabad, India</p>
          </div>
          <div className="flex ctrColumn">
            <GreenIcon />
            <p>Available for new projects</p>
          </div>
   
          </div>
          <div className="flex mt-10">
            <GitIcon />
            <Twittericon />
            <FigmaIcon />
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
        <div className="rightMain w-[200px] ml-11">
          <img className=" border"
            src={Profile.src}
          />
          <div className="empty md: left-[-10px] dark:bg-[#374151]"></div>  
        </div>
        </div>
      
      </div>
    </>
  );
}
