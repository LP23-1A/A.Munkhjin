import WorkZurag from "../../../public/Picture.png";
import Suggest from "./WorkData";
export { WorkImg, WorkDesc };

function WorkImg() {
  return (
    <>
    <div className=" workImg"><img className="w-[300px]  md:w-[300px] lg:w-[500px]" src={WorkZurag.src} /></div>
      
    </>
  );
}
function WorkDesc() {
  return (
    <>
      <div className="Workdesc" >
        <div className="flex justify-items-end width576px">
        <h2 className="text-2xl font-bold">Fiskil</h2>

        </div>
        <div className="mt-5" >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante <br />ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia <br />curae.
        </p>    
        <div className="mt-5">
        <Suggest/> 
        </div>   
        </div>
            
      </div>
    </>
  );
}
