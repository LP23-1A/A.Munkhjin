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
  const [Dark,SetDark] = useState(true)
  const Handler = () =>{
      SetDark(!Dark)
  }
  return (
    <div className={`${Dark && "bg-black text-white"}`}>
      <div className="FirstPage " >
        <Navbar Handler={Handler} Dark={Dark} />
        <Main />
      </div>
      <div className="secondPage">
        <SecondMain />
      </div>

      <ThirdMain />
      <FourthMain />
      <Work />
      <Getintouch />
    </div>
  );
}
