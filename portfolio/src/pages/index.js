import Navbar from "@/components/Section/Navbar";
import Main from "@/components/Section/Main";
import SecondMain from "@/components/Section/About";
import ThirdMain from "@/components/Section/Skills";
import FourthMain from "@/components/Section/Experience";
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
        <SecondMain  />
      </div>
      <ThirdMain />
      <div >
      <FourthMain   />
      </div>
      <Work />
      <Getintouch />
      </div>

</>
  );
}
