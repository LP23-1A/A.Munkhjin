import  { Card,ArticleProps } from "@/components/Article";
import Trend from "@/components/Trending";
import Navbar from "@/components/Navbar";
const dataCard = [
  {
    img: "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1702857600&Signature=GtIcIcyrku03di6uhi0mfVSqHwIdIsUNoUQebv4ln3q84G9ZINAh~g63In7v1hCCoAUoAP2aTUyCsm0UHjL-VzZqeJwqljXEBvlG38XfWgPV0jOZS41GSMMySeIgQ-5a6beEdkq3-nVqA8DtYQ5tFNSBjsKIZZlJohL6yXlNmptCXdFuApfCK6nWzmbfiNgeW-g3FK0QgNJNPlJaJFhYBW7ic31MDvl416i18XVjJb3BD8ahSb1F7OqOffjqQOGVpbAL4r4vPSLE8tV4YbaMpt1sknJsMh0hxR4lDqQ0txf88uFFFPq7xf9FpZyaEIntEtG8EVMtjjmahArIWExyCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022 ",
  },
];
const dataTrending =[{
  img:'https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  tag:"Techonlogy"
  ,desc:"The Impact of Technology on the Workplace: How Technology is Changing"
}]

const dataTag = [
  {
    tag: "Design",
  },
  {
    tag: "Travel",
  },
  {
    tag: "Fashion",
  },
  {
    tag: "Technology",
  },
  {
    tag: "Branding",
  },
];
console.log(dataTrending);
export default function Home() {
 
  return (
    <main className="w-full r">
       <Navbar/>
       <div className=" flex justify-center">
        {dataTrending.map((e)=>{
          return ( <div>
            <Trend img={e.img} desc={e.desc} tag={e.tag}/>
          </div>
            
          )
        })}
       </div>
      <div className=" flex justify-between ">
        <div className="flex gap-10"> 
          <h2>All</h2>
          {dataTag.map((e) => {
            return < ArticleProps tag={e.tag} />;
          })}
        </div>
        <h2>View All</h2>
      </div>
      <div className="flex justify-center">
        {dataCard.map((e) => {
          return <Card img={e.img} tag={e.tag} title={e.title} date={e.date} />;
        })}
      </div>
    </main>
  );
}
