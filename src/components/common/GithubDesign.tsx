import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import GithubImage from '/public/images/Github_images.svg';
import Githubback from '/public/images/github_back.svg';
import BackgroundImage from '/public/images/bg-right.svg';
import BackgroundImageMobile from '/public/images/bg-right-mobile.svg';
import Container from "@/layouts/container";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { cn } from "@/lib/utils";

export default function Github({ isGithub=false }: {
  isGithub?: boolean
}) {
  const { width } = useWindowDimensions();
  return (
    <div className="min-h-[35rem] my-[5rem] md:my-[2rem] lg:my-[10rem] relative">
      <div className="hidden lg:block">
        <Image
          fill
          src={BackgroundImage}
          alt="Background Image"
          className="pl-8 object-cover"
        />
      </div>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-0">
          <div className="w-full z-20 mt-10 lg:w-[45%] leading-[80px]">
            <div className="flex justify-end lg:justify-start">
              <div className="flex items-center justify-center lg:hidden relative">
                <h3 className="ml-20 text-3xl xs:text-4xl whitespace-nowrap z-20 absolute xs:pr-12 text">GitHub App</h3>
              </div>
              <div className="w-48 xs:-mt-3 xs:mr-10 lg:ml-16 lg:mr-0">
                <Image 
                  src={Githubback} 
                  alt="Github Icon Background" 
                  className="w-full max-w-[10rem] xs:max-w-[20rem]"
                />
                <h3 className="hidden lg:block text-center absolute top-44">GitHub App</h3>
              </div>
            </div>
            <p className="w-full text-black text-base font-normal leading-normal mt-5 text-center md:px-5 lg:px-0 lg:text-left lg:w-4/5 xl:-mx-2">
              HeyDev, your GitHub app for PR-level code reviews, enhances your coding journey. Detailed code insights guide reviewers, while optimization tips boost performance. Security scans safeguard your code, and seamless testing ensures flawless functionality. Elevate your PRs with HeyDev - where coding brilliance meets streamlined reviews!
            </p>
            <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:pr-36">
              <Link href='/products/github'>
                <SolidButton buttonText="Learn More" customStyle={"h-[48px] px-8"} />
              </Link>                
            </div>
          </div>   
          <div className="hidden lg:block lg:w-1/2 z-20">
            <div className={cn(
              isGithub ? "mt-[-20rem]" : "mt-[-10rem]",
              "lg:w-[43.75rem]"
            )}>
              <Image 
                src={GithubImage} 
                alt="VSCode Images" 
                className="max-w-[35rem] lg:max-w-full"
              />
            </div>
          </div>   
        </div>
      </Container>
      {/* Mobile Responsive */}
      <div className="lg:hidden relative mt-16 md:mt-28">
        <div className="block">
          <Image
            fill
            src={BackgroundImageMobile}
            alt="Background Image"
            className={cn(
              "max-w-[45rem] md:min-w-full object-contain rounded-l-full",
              width > 829 && width < 1024 ? "pl-48" : "pl-10"
            )}
          />
        </div>
        <div className={cn(
          "pl-10 pb-10 z-20 md:flex md:justify-end",
        )}>
          <Image 
            src={GithubImage} 
            alt="VSCode Images"
            className="w-full max-w-[38rem]" 
          />
        </div>   
      </div>
    </div>
  )
}
