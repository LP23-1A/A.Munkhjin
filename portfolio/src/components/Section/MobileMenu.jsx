import SunIcon from "../ICons/Icon"
import MoonIcon from "../ICons/MoonIcon"
export default function MobileMenu({onClick, setIsOpen}) {
    const closeHandler = () => {
        setIsOpen(false)
    }
    return(
     
        <>
<div className="z-10 w-screen h-screen top-0 left-0 absolute bg-[#00000070] flex justify-end ">
                <div className="w-10/12 h-screen p-4 bg-white dark:bg-[#1F2937] dark:text-white">
                    <div className="flex justify-between">
                        <button onClick={closeHandler}>
                       <p className="font-bold text-lg">x</p>
                        </button>
                    </div>
                    <hr className="mt-4" />
                    <ul className="py-4 flex flex-col gap-4">
                        {
                            ['About','Work','Testimonials','Contact'].map(item => (
                                <li className="list-none">{item}</li>
                            ))
                        }
                    </ul>
                    <hr className="mt-4" />
                    <div className="py-4">
                        <div className="flex justify-between">
                            <p>Switch theme</p>
                            <div>
                            <button onClick={onClick} className="dark:hidden">
                                <SunIcon/>
                            </button>
                            <button className="hidden dark:flex" onClick={onClick}>
                                <MoonIcon/>
                            </button>
                            </div>
                         
                       
                        </div>

                        <button className="mt-4 w-full bg-black text-white px-4 py-1.5 rounded-lg font-medium">
                            Download CV
                        </button>
                    </div>

                </div>
            </div>
         
        </>
    )
    
}