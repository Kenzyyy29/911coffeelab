import Link from "next/link";
import {GiCoffeeBeans} from "react-icons/gi";

const links = [
 {
  name: "menu",
  path: "https://911-coffee.vercel.app/menu?outlet=SdklgpIniivxWPXwLeau",
 },
 {
  name: "promo",
  path: "https://911-coffee.vercel.app/promo?outlet=SdklgpIniivxWPXwLeau",
 },
 {
  name: "bundling",
  path: "https://911-coffee.vercel.app/bundling?outlet=SdklgpIniivxWPXwLeau",
 },
 {
  name: "career",
  path: "https://911-coffee.vercel.app/career",
 },
];

export default function Home() {
 return (
  <div className="relative h-[100dvh] w-full overflow-hidden bg-[#010101]">
   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/50"></div>
   <div className="sticky w-full flex flex-col items-center justify-between h-full p-4 py-[100px] md:py-[40px]">
    <div className=" bg-white rounded-full flex items-center justify-center w-[110px] h-[110px] shadow-lg">
     {/* <h1
      className="text-4xl text-black"
      style={{fontFamily: "Agency FB"}}>
      9/1/1
     </h1> */}
     <GiCoffeeBeans className="text-4xl fill-black" />
    </div>
    <div className="flex flex-col gap-4">
     {links.map((link) => (
      <Link
       key={link.name}
       href={link.path}
       className="bg-black/60 backdrop-blur-2xl py-4 px-8 w-sm md:w-md rounded-full flex items-center justify-center text-white capitalize text-xl border shadow-lg hover:scale-105 transition-all ease-in-out duration-300">
       {link.name}
      </Link>
     ))}
    </div>
    <h1 className="flex flex-col items-center text-gray-400">
     Supported by{" "}
     <span className="text-white font-bold text-xl">
      <Link href="https://codevora.id">Codevora.id</Link>
     </span>
    </h1>
   </div>
  </div>
 );
}
