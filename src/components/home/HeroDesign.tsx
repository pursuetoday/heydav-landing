import Image from "next/image";
import Box4 from '/public/images/box4.svg';
import Box5 from '/public/images/box5.svg';
import Box6 from '/public/images/box6.svg';
import { cn } from "@/lib/utils";

export default function HeroDesign({ isWaitlist=false } : {
  isWaitlist?: boolean
}) {
  return (
    <div className="hidden lg:block lg:relative">
      <div className="w-[36rem] h-[37.5rem] left-12 top-0 absolute rounded-[35px] border-[3px] opacity-50 border-teal-600" />
      <div className="absolute left-[5rem] top-[5rem] bg-teal-600 opacity-50 h-[2.5px] w-full" />
      <div className="left-[3rem] top-[1.5rem] absolute opacity-50 ml-14">
        <span className="text-teal-600 text-2xl font-medium">Ask</span>
        <span className="text-teal-600 text-2xl font-bold"> @</span>
        <span className="text-teal-600 text-2xl font-normal">Hey</span>
        <span className="text-teal-600 text-2xl font-bold">Dev</span>
      </div>
      <Image 
        src={Box4} 
        alt="Box4" 
        width={470} 
        className={cn(
          !isWaitlist ? " mt-[4.5rem] right-24" : "mt-[8rem] right-40",
          "relative z-10"
        )} 
      />
      <Image 
        src={Box5} 
        alt="Box5" 
        width={440} 
        className={cn(
          !isWaitlist ? "right-24" : "right-36",
          "relative z-10 ml-[4.5rem]"
        )} 
      />
      {!isWaitlist && <Image src={Box6} alt="Box6" width={440} className="relative z-10 right-16" />}
    </div>
  )
}
