import Container from "@/layouts/container";
import HeroDesign from "../home/HeroDesign";
import WaitlistForm from "./WaitlistForm";
import { cn } from "@/lib/utils";

export default function Waitlist({ isGithub=false, isVSCode=false }: {
  isGithub?: boolean
  isVSCode?: boolean
}) {
  return (
    <Container>
      <div className={cn(
        "min-h-[30rem] flex flex-col items-center md:pt-10 lg:pt-0 lg:flex-row lg:space-x-16 justify-between z-20",
        isGithub || isVSCode ? "mt-[3rem] lg:mt-0" : ""
      )}>
        <div className="w-full px-4 xs:px-5 lg:w-[60%] flex flex-col z-20">
          <h1 className="text-center lg:text-left text-teal-500 font-bold text-4xl md:text-5xl">Newsletter</h1>
          <p className="my-4 text-lg leading-7 text-center lg:text-left">Subscribe to get the latest news about HeyDev.</p>
          <div className="mt-4 md:mx-auto md:w-3/4 lg:mx-0">
            <WaitlistForm />            
          </div>
        </div>
        <div className="my-[3rem] hidden lg:block z-20">
          <HeroDesign isWaitlist />
        </div>
      </div>
    </Container>
  )
}
