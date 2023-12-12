import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/Article";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
let api = axios.get("https://dev.to/api/articles");
export default function BlogList() {
  const router = useRouter();
  const home = () => {
    router.push("/");
  };
  const blog = () => {
    router.push("/blogList");
  };
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
  return (
    <>
      <Navbar home={home} blog={blog} />
      <div className="flex items-center flex-col mt-[100px]">
        <p className="flex justify-start w-[1440px] font-bold text-[24px]">
          All Blog Post
        </p>
        <div className="flex justify-center mt-[32px] gap-[20px] w-[1216px] flex-wrap">
          {articleData &&
            articleData.slice(0, articleCount).map((item) => {
              return (
                <Link href={`/blog/${item.id}`}>
                  <Card
                    id={item.id}
                    social_image={item.social_image}
                    tag={item.tag}
                    title={item.title}
                    tags={item.tags}
                    readable_publish_date={item.readable_publish_date}
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
      <Footer />
    </>
  );
}
