import MobileMenu from "./MobileMenu";
import SunIcon from "../ICons/Icon";
import { useState } from "react";
import { useTheme } from "next-themes";
import MoonIcon from "../ICons/MoonIcon";
export default function Navbar() {
  const [isOpen , setIsOpen] = useState(false)
  const {theme , setTheme} = useTheme()
  const MenuButton =() =>{
    setIsOpen(!isOpen)
  }
  const ThemeChange = () => {
    if (theme == 'dark') {
      setTheme('light')
    }
    if (theme == 'light' ) {
      setTheme('dark') 
    }
  }

  return (
    <>
      <nav className={`flex spaceBwn ml-[30px] px-[10px]  ctrColumn     lg:max-w-[1280px] lg:px-[60px] md:ml-[80px] `}>
        <div>

        <h1 className="text-4xl font-bold text-black  dark:text-white">{"<SS/>"}</h1>
        </div>
        <div className=" hidden md:flex ctrColumn gap24px dark:text-white ">
          
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contacdsadt</p>
       
        <div>
        <button onClick={ThemeChange} className="iconBtn dark:hidden">
            <SunIcon />
          </button>
          <button onClick={ThemeChange} className="hidden dark:flex">
<MoonIcon/>
          </button>
        </div>
      
         

          <button className="navBtn flex items-center p-3 dark:bg-white dark:text-black">Download CV</button>
        </div> 
        <button className="md:hidden w-[48px] mr-[20px] " onClick={MenuButton}>
          <img src="data:image/webp;base64,UklGRhgBAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSGAAAAABHyAQSPFomR0RkUFRJKlRfCAWaZjBRu6t2uXJL6L/ity2bahT0vGQ0eFy0wxNztHiAm0hnT7oVwofNaHcNEOTc7S4QFtIpw/6lcJHTSg3zdDkHC0u0BbS6YN+pfBRgxtWUDggkgAAAFAIAJ0BKmAAYAA+uUqgTKcko6I6qVjgFwlnAM9srxLk3ubAstf0jtqEWWqs8emtvU4mZx7wZap3jOEgXXdi3QgYyGHHn0O4xq+IAAD+9YMABM/eF/+7cAvn0C80oAb9TkpTp/9kR0qivbgaAC7rGt3pA3CSmFBvT7yv/3bf+n3RN0qmmwML72T4G26dp6iKuWQA" alt="" />
          </button>
      </nav>
      {
        isOpen && <MobileMenu onClick={ThemeChange} setIsOpen={setIsOpen} />
       
      }
    </>
  );
}

