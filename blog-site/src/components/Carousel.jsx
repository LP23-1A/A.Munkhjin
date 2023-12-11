export default function Carousel(props) {
  const index = 0; // useState

  //handler
  return (
    <div
      key={props.index}
      className="bg-cover w-[1216px] h-[600px] rounded-[12px] relative "
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className=" bg-white w-[518px]  p-[40px] absolute bottom-0 mb-[13px] ml-[11px] rounded-[12px] ">
        <p className=" text-white px-[10px] py-[4px] flex justify-center  rounded-[6px] bg-[#4B6BFB] w-fit text-[14px]">
          {props.tags}
        </p>
        <p className="text-black mt-[16px] font-bold text-[36px] h-[80px] leading-[40px] not-italic font-sans">
          {props.desc}
        </p>
        <p className="mt-[40px] text-[#97989F] text-[16px] font-[400]">
          {props.date}
        </p>
      </div>
    </div>
  );
}
