import Image from "next/image";
import HomeHeroFinal from '/public/images/final_hero_section.svg';
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function HeroDesign({ isWaitlist=false }: { isWaitlist?: boolean }) {
  const [shouldPriority, setShouldPriority] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShouldPriority(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        priority={shouldPriority}
      />
    </div>
  )
}
