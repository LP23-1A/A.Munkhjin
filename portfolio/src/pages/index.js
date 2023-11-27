import Navbar from "@/components/Section/Navbar";
import Main from "@/components/Section/Main";
import SecondMain from "@/components/Section/About";
import ThirdMain from "@/components/Section/Skills";
import FourthMain from "@/components/Section/Experience";
import Work from "@/components/Section/Work";
import Getintouch from "@/components/Section/GetInTouch";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [Dark,SetDark] = useState(false)
  const Handler = () =>{
      SetDark(!Dark)
  }
  return (
    <div className={`${Dark && " text-white bg-black"}`}>
      <div className="FirstPage " >
        <Navbar Handler={Handler} Dark={Dark} />
        <Main />
      </div>
      <div className={`${Dark && 'bg-black'}`}>
        <SecondMain  />
      </div>

      <ThirdMain />
      <div className={`${Dark && 'bg-black text-black'}`}>
      <FourthMain   />
      </div>
      <Work />
      <Getintouch />
    </div>
  );
}
