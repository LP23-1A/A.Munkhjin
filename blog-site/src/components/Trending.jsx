
export default function Trending(props) {
    return(
  
        <div className=" h-[320px] w-[289px] bg-no-repeat bg-cover rounded-[12px] relative" style={{backgroundImage: `url(${props.img})`}}>
            <div className="flex flex-col items-start justify-end pl-[28.5px] pr-[30.5px] pb-[28px] h-[320px] z-20 absolute">
            <p className=" text-white px-[10px] py-[4px] flex justify-center  rounded-[6px] bg-[#4B6BFB] w-[97px] text-[14px]">
                {props.tag}
            </p>
            <p className="text-white mt-[16px] font-bold text-[18px] not-italic font-sans">
                {props.desc}
            </p>
            </div>
        <span className=" bg-black rounded-[12px] h-[320px] w-[289px] absolute top-0 opacity-20"></span>
        </div>
    )
    
}