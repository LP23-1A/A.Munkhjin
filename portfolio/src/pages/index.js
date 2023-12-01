import Navbar from "@/components/Section/Navbar";
import Main from "@/components/Section/Main";
import AboutSection from "@/components/Section/About";
import SkillsSection from "@/components/Section/Skills";
import Experience from "@/components/Section/Experience";
import Work from "@/components/Section/Work";
import Getintouch from "@/components/Section/GetInTouch";

import { Inter } from "next/font/google";


export default function Home() {

  return (
<>
<div className="w-full " >
        <Navbar  />
        <Main />
      <div >
        < AboutSection  />
      </div>
      <SkillsSection/>
      <div >
      <Experience  />
      </div>
      <Work />
      <Getintouch />
      </div>

</>
  );
}
