import Image from "next/image";
import HomeHeroFinal from '/public/images/final_hero_section.svg';
import { cn } from "@/lib/utils";

export default function HeroDesign({ isWaitlist=false }: {
  isWaitlist?: boolean
}) {
  return (
    <div className={cn(
      isWaitlist ? "block relative" : "hidden lg:block lg:relative"
    )}>
      <Image 
        src={HomeHeroFinal}
        alt="Home Hero"
        className={cn(
          'w-full md:max-w-[38rem] lg:max-w-none',
          isWaitlist ? "" : ""
        )}
        priority
      />
    </div>
  )
}
