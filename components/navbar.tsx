import Link from "next/link";
import logo from "@/public/logo-inline-white.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="bg-[#0b1421]  w-full p-5 flex justify-between items-center lg:px-48 text-white text-xs md:text-xl font-extrabold">
      <Link href={"/"}>
        <Image src={logo} alt="" className="w-20" />
      </Link>
      <div className="flex gap-8 font-bold sm:text-[20px]">
        <Link href="/about">Home</Link>
        <Link href="/projet">About</Link>
        <Link href="/don" className="">Services</Link>
      </div>
    </div>
  );
}
