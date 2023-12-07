import { Card } from "@/components/Article";
import Trend from "@/components/Trending";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import DATA from "@/components/constant/Data";
import axios from "axios";

const DATA_CAROUSEL = [
  {
    img: "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: "Techonology",
    desc: "Grid system for better Design User Interface",
    date: "August 20, 2022",
  },
];

const dataTrending = [
  {
    img: "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: "Techonlogy",
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];
let api= axios.get("https://dev.to/api/articles?username=gereltuyamz");

export default function Home() {
  const [articleData, setArticleData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredArticleData, setFilteredArticleData] = useState([]);
  const [articleCount,setArticleCount] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api;
      setArticleData(response.data)
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
  return (
    <main className="w-full ">
      <Navbar />

      <div className=" flex items-center flex-col mt-[100px]">
        {DATA_CAROUSEL.map((e) => {
          return (
            <>
              <Carousel img={e.img} tag={e.tag} desc={e.desc} date={e.date} />
            </>
          );
        })}
        <div className="flex justify-end w-[1180px]">
          <button className="rounded-[6px] border-[1px] p-[10px]">{"<"}</button>
          <button className="rounded-[6px] border-[1px] p-[10px]">{">"}</button>
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
                  <button
                    onClick={() => {
                      filterByCategory(item);
                    }}
                  >
                    {item}
                  </button>
                );
              })}
          </div>
          <button className="text-[12px] font-sans font-[700] text-[#495057]">
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
