// @ts-ignore
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] footer my-11">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
            <div className="font-bold text-[16px]">Sections</div>

            <Link href={`#skills`}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Skills</span>
              </p>
            </Link>
            <Link href={`#projects`}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Projects</span>
              </p>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <Link href={`https://github.com/khushj007`}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </Link>
            <Link href={`https://www.linkedin.com/in/khush-joshi-b4501724b/`}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <Link href={"/"}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">about me</span>
              </p>
            </Link>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                khushjoshi007@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center my-10 py-5">
          &copy; Made by khush joshi in 2023. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
