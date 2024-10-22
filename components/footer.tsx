import Image from "next/image";
import logo from "../public/logo-inline-white.png";
export default function Footer() {
  return (
    <div className="flex w-full bottom-0 bg-black mx-auto flex-row justify-between items-center pt-4 pb-7 px-4 sm:pt-20 gap-3 sm:gap-64">
      <div className="W-20">
        <Image src={logo} alt="" className="w-23" />
      </div>
      <div className="pb-7 px-5 pt-7 flex justify-between max-w-[1200px] mx-auto ">
        <div className="text-white p-10 text-[10px] sm:text-[17px]"></div>
      </div>
      <div className="text-white text-[0.4rem] sm:text-[13px] sm:w-[100%] w-[70%]"></div>
      <div className="text-white"></div>
    </div>
  );
}
