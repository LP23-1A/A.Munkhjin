import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function BlogDetail() {
  const [postData, setPostData] = useState({});
  const router = useRouter();
  const home = () => {
    router.push("/");
  };
  const viewAll = () => {
    router.push("/blogList");
  };
  const fetchPost = async () => {
    const response = await axios.get(
      "https://dev.to/api/articles" + "/" + router.query.id
    );
    setPostData(response.data);
  };
  useEffect(() => {
    if (router.isReady) {
      fetchPost();
    }
  }, [router.isReady]);

  return (
    <main className="w-full justify-center ">
      <Navbar home={home} blog={viewAll} />

      <div className="flex justify-center">
        {
          <div className="flex justify-center flex-col w-[800px] gap-[32px]">
            <h1 className="text-[36px] font-[600] font-sans text-[#181A2A]">
              {postData.title || <Skeleton />}
            </h1>
            <div className="flex gap-3">
              <p className="text-[14px] font-[400] text-[#696A75]">
                {postData.user?.name}
              </p>
              <p className="text-[14px] font-[400] text-[#696A75]">
                {postData.readable_publish_date || <Skeleton />}
              </p>
            </div>
            <img className="rounded-[12px]" src={postData.social_image} />
            <p className="text-[24px] font-[600] ">
              {postData.description || <Skeleton />}
            </p>
            <p className="text-[20px] font-[400] text-[#3B3C4A]">
              {postData.body_markdown || <Skeleton />}
            </p>
          </div>
        }
      </div>

      <Footer />
    </main>
  );
}

export default BlogDetail;
