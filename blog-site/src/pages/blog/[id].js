import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { data } from "autoprefixer";
const customAxios = async (...args) => {
  try {
    const res = await axios(...args);
    return res;
  } catch (error) {
    console.error(error);
  }
};

function BlogDetail(){
  const router = useRouter(); 
  const idData = router.query.id
  const { data, error, isLoading } = useSWR(
   idData?('https://dev.to/api/articles/' + idData):null,
    customAxios
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(data);
  // return <main>{data?.data?.title}</main>
  return (
    <main className="w-full justify-center ">
      <div className="flex justify-center">
        {
          <div className="flex justify-center flex-col w-[800px] gap-[32px]">
            <h1 className="text-[36px] font-[600] font-sans text-[#181A2A]">
              {data?.data?.title || <Skeleton />}
            </h1>
            <div className="flex gap-3">
              <p className="text-[14px] font-[400] text-[#696A75]">
                {data?.data?.user?.name}
              </p>
              <p className="text-[14px] font-[400] text-[#696A75]">
                {data?.data?.publsihet_at || <Skeleton />}
              </p>
            </div>
            <img className="rounded-[12px]" src={data?.data?.social_image} />
            <p className="text-[24px] font-[600] ">
              {data?.data?.description || <Skeleton />}
            </p>
            <p className="text-[20px] font-[400] text-[#3B3C4A]">
              {data?.data?.body_markdown || <Skeleton />}
            </p>
          </div>
        }
      </div>
    </main>
  );
}

export default BlogDetail;
