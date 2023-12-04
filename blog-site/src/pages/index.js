import  { Card,ArticleProps } from "@/components/Article";
import Trending from "@/components/Trending";
const dataCard = [
  {
    img: "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1702857600&Signature=GtIcIcyrku03di6uhi0mfVSqHwIdIsUNoUQebv4ln3q84G9ZINAh~g63In7v1hCCoAUoAP2aTUyCsm0UHjL-VzZqeJwqljXEBvlG38XfWgPV0jOZS41GSMMySeIgQ-5a6beEdkq3-nVqA8DtYQ5tFNSBjsKIZZlJohL6yXlNmptCXdFuApfCK6nWzmbfiNgeW-g3FK0QgNJNPlJaJFhYBW7ic31MDvl416i18XVjJb3BD8ahSb1F7OqOffjqQOGVpbAL4r4vPSLE8tV4YbaMpt1sknJsMh0hxR4lDqQ0txf88uFFFPq7xf9FpZyaEIntEtG8EVMtjjmahArIWExyCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022 ",
  },
];

const data = [
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
export default function Home() {
  return (
    <main>
      <Trending />
      <div className=" flex justify-between">
        <div className="flex gap-10">
          {" "}
          <h2>All</h2>
          {data.map((e) => {
            return < ArticleProps tag={e.tag} />;
          })}
        </div>

        <h2>View All</h2>
      </div>
      <div>
        {dataCard.map((e) => {
          return <Card img={e.img} tag={e.tag} title={e.title} date={e.date} />;
        })}
      </div>
    </main>
  );
}
