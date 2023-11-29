import Logos from '@/components/Data/SkillsData'
export default function ThirdMain() {
  return (
    <>
      <div className=" ml-11   md:mt-[300px] ">
        <div className='flex justify-center '>
        <p className="w-90px AboutBtn textalign ">Skills</p>

        </div>
        <p className="textalign mt-6">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className=" ml-10 w-[370px]  md:w-[768px]  lg:marginTop96px lg:w-[1440px] lg:ml-0"><Logos/></div>
    </>
  );
}
