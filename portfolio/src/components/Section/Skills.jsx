import Logos from '@/components/Data/SkillsData'
export default function ThirdMain() {
  return (
    <>
      <div className="marginTop96px">
        <div className='flex justify-center '>
        <p className="w-90px AboutBtn textalign ">Skills</p>

        </div>
        <p className="textalign mt-6">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="marginTop96px"><Logos/></div>
    </>
  );
}