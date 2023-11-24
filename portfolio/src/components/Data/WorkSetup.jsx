import WorkZurag from "../../../public/Picture.png";
import Suggest from "./WorkData";
export { WorkImg, WorkDesc };

function WorkImg() {
  return (
    <>
    <div className="workImg"><img src={WorkZurag.src} /></div>
      
    </>
  );
}
function WorkDesc() {
  return (
    <>
      <div className="Workdesc" >
        <div className="flex justifyStart width576px">
        <h2>Fiskil</h2>

        </div>
        <div >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>    
        <div>
        <Suggest/> 
        </div>   
        </div>
            
      </div>
    </>
  );
}
