import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import FinalGithubImage from "public/images/p-6.png";
import Container from "@/layouts/container";
import { GITHUB_APP } from "@/routes";

export default function Github() {
  return (
    <div className="min-h-[35rem] my-[3rem] relative">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-0">
          <div className="w-full z-20 mt-10 lg:w-[40%] leading-[80px] px-5">
            <h3 className="lg:w-4/5 text-3xl md:text-[38px] font-bold leading-[45px] lg:leading-[57.92px] text-teal-500 text-center lg:text-left xl:whitespace-nowrap">
              Instant Code Reviews
            </h3>
            <p className="w-full text-black text-base font-normal leading-normal mt-5 text-center md:px-5 lg:px-0 lg:text-left lg:w-4/5">
              <span className="font-bold">HeyDev's GitHub App -</span>{" "} your code review partner in crime.{" "}
              <br className="hidden lg:block" />Say goodbye to manual PR reviews. HeyDev meticulously analyzes your PRs, providing insightful feedback and actionable suggestions.{" "}
              <br className="hidden lg:block" />Elevate your team's coding standards and watch your projects shine.
            </p>
            <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:pr-36">
              <Link href={GITHUB_APP}>
                <SolidButton buttonText="Try Now" customStyle={"h-[48px] px-8"} />
              </Link>                
            </div>
          </div>   
          <div className="block lg:w-[60%] z-20 relative px-5 mt-[5rem] md:mt-0">
            <div className="mt-[-5rem] lg:w-[43.75rem] xl:w-[48rem] 2xl:w-[55rem]">
              <Image 
                src={FinalGithubImage} 
                alt="GitHub Images" 
                className="w-full md:max-w-[38rem] lg:max-w-[80%] xl:max-w-[90%]"
                priority
              />
            </div>
          </div>   
        </div>
      </Container>
    </div>
  )
}