import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function BlogDetail() {
  // const [postData, setPostData] = useState({});
  const customAxios = async (...args) => {
    try {
      const res = await axios.get(...args);
      return res;
    } catch (error) {
      return error;
    }
  };

  const router = useRouter();
  const { postData, error } = useSWR(
   `https://dev.to/api/articles/${router?.query?.id || "1697125"}`,
    customAxios
  );
  console.log(postData);

  if (error) return <div>Failed to load</div>;
  if (!postData) return <div>Loading...</div>;
  console.log(datefixer);
  return (
    <main className="w-full justify-center ">
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
                {postData.publsihet_at || <Skeleton />}
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
    </main>
  );
}

export default BlogDetail;
