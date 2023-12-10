import { Card } from "@/components/Article";
import Trend from "@/components/Trending";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import { useEffect, useRef, useState } from "react";
import { uuid } from "uuidv4";
import axios from "axios";
import BlogList from "./blogList";
import { data } from "autoprefixer";


const dataTrending = [
  {
    img: "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: "Techonlogy",
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];
let api= axios.get("https://dev.to/api/articles?username=gereltuyamz")
export default function Home() {
  const [articleData, setArticleData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredArticleData, setFilteredArticleData] = useState([]);
  const [articleCount,setArticleCount] = useState(3);
  const [currentIndex,setCurrentIndex]= useState(0)
  const carouselRef= useRef(null)
  useEffect(() => {
    const fetchData = async () => {
      try {   const response = await api;
        setArticleData(response.data)}
   catch (err){
    console.log('aldaa', err);
   }
    };

    fetchData();
  }, []);




  useEffect(() => {
    setFilteredArticleData(articleData);
    setCategories([...new Set(articleData.map((item) => item.tags))]);
  }, [articleData]);

  const filterByCategory = (itemData, category) => {
    if (category && category == "all") {
      setFilteredArticleData(articleData);
      return;
    }
    const filterData = articleData.filter((item) => item.tags == itemData);
    setFilteredArticleData(filterData);
  };
  const handleLoadMore = () =>{
setArticleCount((prev) => prev + 3);
  } 
  const prevSlide =()=>{
    setCurrentIndex((prev)=>( prev -1 +articleData.length)%articleData.length)
    console.log(setCurrentIndex);
  }
  console.log(setCurrentIndex);
  const nextSlide = () =>{
    setCurrentIndex((next)=> (next +1)%articleData.length)
  }
  return (
    <main className="w-full ">
      <Navbar />

      <div  ref={carouselRef}  className=" flex items-center flex-col mt-[100px]">
      {console.log(carouselRef)}
        {articleData.map((e,index) => {
          return (
            <div key={index} className={`${index=== currentIndex ? "active":''}`}>
              <Carousel social_image={e.social_image} tags={e.tags} desc={e.title} date={e.date} />
            </div>
          );
        })}
        <div className="flex justify-end w-[1180px]">
          <button onClick={prevSlide} className="rounded-[6px] border-[1px] p-[10px]">{"<"}</button>
          <button onClick={nextSlide} className="rounded-[6px] border-[1px] p-[10px]">{">"}</button>
        </div>
      </div>
      <div className=" flex items-center flex-col">
        <p className="flex justify-start w-[1540px] font-bold text-[24px]">
          Trending
        </p>
        {dataTrending.map((e) => {
          return (
            <div>
              <Trend img={e.img} desc={e.desc} tag={e.tag} />
            </div>
          );
        })}
      </div>
      <div className="flex items-center flex-col mt-[100px]">
        <p className="flex justify-start w-[1440px] font-bold text-[24px]">
          All Blog Post
        </p>
        <div className=" flex justify-between w-full px-[352px] mt-[32px]">
          <div className="flex gap-[20px]">
            <button
              onClick={() => filterByCategory("", "all")}
              className="text-[12px] font-sans font-[700] text-[#D4A373]"
            >
              All
            </button>
            {categories &&
              categories.map((item) => {
                return (
                  <button  className="text-[12px] font-sans font-[700] text-[#495057]"
                    onClick={() => {
                      filterByCategory(item);
                    }}
                  >
                    {item}
                  </button>
                );
              })}
          </div>
          <button    className="text-[12px] font-sans font-[700] text-[#495057]">
            View All
          </button>
        </div>
        <div className="flex justify-center mt-[32px] gap-[20px] w-[1216px] flex-wrap">
          {filteredArticleData &&
            filteredArticleData.slice(0,articleCount).map((item) => {
              return (
                <Card
                  id={item.id}
                  social_image={item.social_image}
                  tag={item.tag}
                  title={item.title}
                  tags={item.tags}
                  readable_publish_date={item.readable_publish_date}
                />
              );
            })}
        </div>    {articleCount < filteredArticleData.length && (
        <button
          onClick={handleLoadMore}
          className="px-[20px] py-[12px] border-[1px] mt-[20px] rounded-[6px] font-sans text-[16px] font-[600] text-[#696A75]"
        >
          Load More
        </button>
      )}
    
      </div>
      <Footer />
    </main>
  );
}
