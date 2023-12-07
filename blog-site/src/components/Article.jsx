export function Card(props) {
  return (
    <div
      id={props.id}
      className=" flex flex-col w-[392px] rounded-[12px] border-solid border-[#E8E8EA)] bg-[#FFF] border-[1px] gap-[16px] justify-center p-[16px]"
    >
      <img className="h-[240px] w-[360px] rounded-[6px]" src={props.social_image} />
      <div>
        <h2 className=" text-[#4B6BFB] px-[10px] py-[4px] flex justify-center  rounded-[6px] bg-[#4b6bfb0d] w-fit text-[14px]">
          {props.tags}
        </h2>
        <h3 className=" text-[#181A2A] text-[24px] h-[80px] font-semibold leading-[28px] mt-[16px] ">
          {props.title}
        </h3>
        <h5 className="mt-[20px] text-[#97989F] text-[16px] font-[400]">
          {props.readable_publish_date}
        </h5>
      </div>
    </div>
  );
}
