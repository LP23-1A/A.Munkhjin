export default function Carousel(props) {
  return (
    <div
      className="bg-cover w-[1216px] h-[600px] rounded-[12px] relative "
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className=" bg-white w-[518px]  p-[40px] absolute bottom-0 mb-[13px] ml-[11px] rounded-[12px] ">
        <p className=" text-white px-[10px] py-[4px] flex justify-center  rounded-[6px] bg-[#4B6BFB] w-[97px] text-[14px]">
          {props.tag}
        </p>
        <p className="text-black mt-[16px] font-bold text-[36px] h-[80px] leading-[40px] not-italic font-sans">
          {props.desc}
        </p>
        <p className="mt-[20px] text-[#97989F] text-[16px] font-[400]">
          {props.date}
        </p>
      </div>
    </div>
  );
}
