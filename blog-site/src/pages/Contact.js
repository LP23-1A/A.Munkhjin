export default function Contact() {
return (
  <div className="w-full">  
     <div className="flex flex-col items-center gap-[30px]">
        <div>
        <div className="flex flex-col gap-[10px]" > 
            <h1 className="font-[600] text-[36px]">
           Contact Us 
        </h1>
        <p className="w-[643px]" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        </div>
        <div className="flex gap-[50px] mt-[20px]">
            <div className=" rounded-[12px] border-2 p-[16px] max-w-[262px] h-fit flex flex-col gap-[10px]">
                <h2 className="text-[24px] font-[600] ">
                    Address
                </h2>
                <p className="text-[#696a75] text-[18px] font-[400]">
                1328 Oak Ridge Drive, Saint Louis, Missouri
                </p>
            </div>
            <div className=" rounded-[12px] border-2 p-[16px] max-w-[262px] h-fit flex flex-col gap-[10px]">
                <h2 className="text-[24px] font-[600] ">
                  Contact
                </h2>
                <p className="text-[#696a75] text-[18px] font-[400]">
                313-332-8662
                info@email.com
                </p>
            </div>
        </div>
        </div>
        <div className=" pt-[29px] pl-[35px] pr-[130px] pb-[26px] bg-[#F6F6F7] h-fit w-[643px] gap-[20px] flex flex-col ">
            <div>
                <h1 className="text-[18px] font-[600] ">
                    Leave a Message
                </h1>
                <div className="flex gap-[60px]">
                    <input className=" w-[191px] h-[10px] p-[14px] rounded-[5px]" placeholder="Your Name" />
                    <input className=" w-[191px] h-[10px] p-[14px] rounded-[5px]" placeholder="Your Email" />
                </div>
            </div>
            <input className="p-[14px] h-[7px] rounded-[5px] flex-shrink-0 w-[444px]" placeholder="Subject"/>
            <input className="p-[14px] h-[106px] w-[444px] " placeholder="Write a message"/>
            <button className=" w-[130px] h-fit rounded-[6px] px-[16px] py-[10px] bg-[#4b6bfb] text-[14px] text-[#fff]">
                Send message
            </button>
        </div>        
    </div>
  </div>
)
    
}