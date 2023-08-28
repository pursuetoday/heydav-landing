import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import Box2 from '/public/images/final_git_box.svg';
import FinalGithubImage from '/public/images/final_git.svg';
import Container from "@/layouts/container";

export default function Github() {
  return (
    <div className="min-h-[35rem] my-[3rem] relative">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-0">
          <div className="lg:hidden z-20 mt-5">
            <div className="flex justify-end">
              <Image 
                src={Box2}
                alt="Box2"
                className="mt-[-2rem] mb-[3.5rem] xs:mb-[3rem]"
              />
            </div>
            <div className="mt-[-4rem] lg:w-[43.75rem]">
              <Image 
                src={FinalGithubImage} 
                alt="Github Images" 
                className="w-full md:max-w-[38rem] lg:max-w-[35rem]"
              />
            </div>
          </div>       
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
              <Link href='/products/github'>
                <SolidButton buttonText="Learn More" customStyle={"h-[48px] px-8"} />
              </Link>                
            </div>
          </div>   
          <div className="hidden lg:block lg:w-[60%] z-20 relative px-5">
            <div className="flex justify-end">
              <Image 
                src={Box2}
                alt="Box2"
                className="mt-[-1rem] mx-[-3rem] custom:mx-[-8rem] lg:max-w-[90%]"
              />
            </div>
            <div>
              <div className="lg:w-[35rem] xl:w-[43.5rem]">
                <Image 
                  src={FinalGithubImage} 
                  alt="GitHub Images" 
                  className="max-w-[35rem] lg:max-w-[95%]"
                />
              </div>
            </div>
          </div>   
        </div>
      </Container>
    </div>
  )
}