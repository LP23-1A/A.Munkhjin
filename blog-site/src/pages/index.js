import { Card } from "@/components/Article";
import Trend from "@/components/Trending";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import axios from "axios";
import { filterByTags } from "@/utils/filterByTags";
import { Router, useRouter } from "next/router";
import Link from "next/link";

let api = axios.get("https://dev.to/api/articles");
export default function Home() {
  const [articleData, setArticleData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [discuss, setDiscuss] = useState([]);
  const [filteredArticleData, setFilteredArticleData] = useState([]);
  const [articleCount, setArticleCount] = useState(3);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setDiscuss(filterByTags(articleData, "discuss"));
  }, [articleData]);

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const response = await api;
      setArticleData(response.data);
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
  const handleLoadMore = () => {
    setArticleCount((prev) => prev + 3);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? articleData.length - 1 : prevIndex - 1
    );
  };
  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === articleData.length - 1 ? 0 : prevIndex + 1
    );
  };
  const DateFixer = (date) => {
    return date.split('-')[0]
  };
  return (
    <main className="w-full ">
      <div className="flex items-center flex-col mt-[100px]">
        <>
          {articleData.length !== 0 && (
            <Carousel
              activeIndex={index}
              image={articleData[index].social_image}
              tags={articleData[index].tags}
              desc={articleData[index].title}
              date={articleData[index].readable_publish_date}
            />
          )}
          <div className="flex justify-end w-[1180px]">
            <button
              onClick={prevSlide}
              className="rounded-[6px] border-[1px] p-[10px]"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="rounded-[6px] border-[1px] p-[10px]"
            >
              {">"}
            </button>
          </div>
        </>
      </div>
      <div className=" flex items-center flex-col">
        <p className="flex justify-start  font-bold text-[24px]">Trending</p>
        <div className="flex gap-[20px]">
          {discuss.slice(4, 8).map((e) => {
            return (
              <div id={e.id} className="flex">
                <Trend img={e.social_image} desc={e.title} tag={e.tags} />
              </div>
            );
          })}
        </div>
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
              categories.slice(0, 4).map((item) => {
                return (
                  <button
                    className="text-[12px] font-sans font-[700] text-[#495057]"
                    onClick={() => {
                      filterByCategory(item);
                    }}
                  >
                    {item}
                  </button>
                );
              })}
          </div>
          <a
            href="/blogList"
            className="text-[12px] font-sans font-[700] text-[#495057]"
          >
            View All
          </a>
        </div>
        <div className="flex justify-center mt-[32px] gap-[20px] w-[1216px] flex-wrap">
          {filteredArticleData &&
            filteredArticleData.slice(0, articleCount).map((item) => {
              let datefixer = DateFixer(item.published_at);
              return (
                <Link href={`/blog/${item.id}`}>
                  <Card
                    id={item.id}
                    social_image={item.social_image}
                    tag={item.tag}
                    title={item.title}
                    tags={item.tags}
                    dates={item.readable_publish_date}
                    year={datefixer}
                  />
                </Link>
              );
            })}
        </div>{" "}
        {articleCount < filteredArticleData.length && (
          <button
            onClick={handleLoadMore}
            className="px-[20px] py-[12px] border-[1px] mt-[20px] rounded-[6px] font-sans text-[16px] font-[600] text-[#696A75]"
          >
            Load More
          </button>
        )}
      </div>
    </main>
  );
}
