import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/Article";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

let api = axios.get("https://dev.to/api/articles");
export default function BlogList() {
  const [articleData, setArticleData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await api;
      setArticleData(res.data);
    };
    getData();
  }, [articleData]);

  const [articleCount, setArticleCount] = useState(12);
  const handleLoadMore = () => {
    setArticleCount((prev) => prev + 3);
  };
  const DateFixer = (date) => { 
    return date.split('-')[0]
  };
  return (
    <>
      <div className="flex items-center flex-col mt-[100px]">
        <p className="flex justify-start w-[1440px] font-bold text-[24px]">
          All Blog Post
        </p>
        <div  className="flex justify-center mt-[32px] gap-[20px] w-[1216px] flex-wrap ">
          {articleData &&
            articleData.slice(0, articleCount).map((item) => {
              let datefixer = DateFixer(item.published_at);
              return (
                <Link href={`/blog/${item.id}`}>
                  <Card 
                    id={item.id}
                    social_image={item.social_image }
                    tag={item.tag  || <Skeleton count={10}/>}
                    title={item.title  || <Skeleton count={10}/>}
                    tags={item.tags  || <Skeleton count={10}/>}
                    dates={item.readable_publish_date  || <Skeleton count={10} />}
                    year={datefixer}
                  />
                </Link>
              );
            })}
        </div>{" "}
        {articleCount < articleData.length && (
          <button
            onClick={handleLoadMore}
            className="px-[20px] py-[12px] border-[1px] mt-[20px] rounded-[6px] font-sans text-[16px] font-[600] text-[#696A75]"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}
