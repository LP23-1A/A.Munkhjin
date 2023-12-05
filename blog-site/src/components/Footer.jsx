import { Facebook, Twitter, Instagram, Linkedin } from "@/Icons/SocialIcons";
import MetaBLogIcon from "@/Icons/MetablogIcon";
export default function Footer() {
  return (
    <footer className="bg-[#F6F6F7] pt-[64px] px-[352px] mt-[100px]">
      <div className=" flex justify-between">
        <div>
          <p>About</p>
          <p className="mt-[12px] w-[280px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  <br />enim
            ad minim veniam
          </p>
          <p className="mt-[24px]">
            Email: <span> info@jstemplate.net</span>
          </p>
          <p>
            Phone: <span>880 123 456 789</span>
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-[26px]">
            <Facebook/>
            <Twitter/>
            <Instagram/>
            <Linkedin/>
        </div>
      </div>
      <hr />
      <div className=" flex justify-between items-center py-[32px]">
        <div>
        <MetaBLogIcon/>
        <p>
        © All Rights Reserved.
        </p>
        </div>
        <div className="flex gap-[10px]">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}
