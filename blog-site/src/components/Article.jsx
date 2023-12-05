
 function Card(props) {
    console.log(props);
    return ( 
         <div id={props.keyid} className=" flex flex-col w-[392px] rounded-[12px] border-solid border-[#E8E8EA)] bg-[#FFF] border-[1px] gap-[16px] justify-center p-[16px]">
                    <img className="h-[240px] w-[360px] rounded-[6px]" src={props.img} />
                    <div>
                    <h2  className=" text-[#4B6BFB] px-[10px] py-[4px] flex justify-center  rounded-[6px] bg-[#4b6bfb0d] w-[97px] text-[14px]" >{props.category}</h2>
                    <h3 className=" text-[#181A2A] text-[24px] font-semibold leading-[28px] mt-[16px] " >{props.title}</h3>
                    <h5 className="mt-[20px] text-[#97989F] text-[16px] font-[400]" >{props.date}</h5>
                    </div>
                 
                </div>
    )
    
}
 function ArticleProps(props) {

    return(
        
        <div >  
        <button   className="text-[12px] font-sans font-[700] text-[#495057]">{props.category}</button>
    </div>
    )
    
}
export { Card , ArticleProps}