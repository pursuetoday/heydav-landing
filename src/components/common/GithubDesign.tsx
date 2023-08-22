import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import GithubImage from '/public/images/Github_images.svg';
import Githubback from '/public/images/github_back.svg';
import BackgroundImage from '/public/images/bg-right.svg';
import BackgroundImageMobile from '/public/images/bg-right-mobile.svg';
import { cn } from "@/lib/utils";

export default function Github({ isGithub=false }: {
  isGithub?: boolean
}) {
  return (
    <div className="min-h-[35rem] my-[5rem] md:my-[10rem] relative">
      <div className="hidden md:block">
        <Image
          fill
          src={BackgroundImage}
          alt="Background Image"
          className="pl-20 object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full z-20 mt-10 md:w-[45%] leading-[80px] xl:px-20 2xl:px-40">
          <div className="flex justify-end md:justify-start">
            <div className="flex items-center justify-center md:hidden relative">
              <h3 className="ml-20 text-3xl xs:text-4xl whitespace-nowrap z-20 absolute xs:pr-12 text">GitHub App</h3>
            </div>
            <div className="w-48 xs:-mt-3 xs:mr-10 md:ml-16 md:mr-0">
              <Image 
                src={Githubback} 
                alt="Github Icon Background" 
                className="w-full max-w-[10rem] xs:max-w-[20rem]"
              />
              <h3 className="hidden md:block text-center absolute top-44">GitHub App</h3>
            </div>
          </div>
          <p className="w-full text-black text-base font-normal leading-normal mt-5 text-center md:text-left px-5 md:w-4/5">
            HeyDev, your GitHub app for PR-level code reviews, enhances your coding journey. Detailed code insights guide reviewers, while optimization tips boost performance. Security scans safeguard your code, and seamless testing ensures flawless functionality. Elevate your PRs with HeyDev - where coding brilliance meets streamlined reviews!
          </p>
          <div className="w-full flex flex-col items-center md:flex-row md:justify-center md:pr-28">
            <Link href='/products/github'>
              <SolidButton buttonText="Learn More" customStyle={"h-[48px] px-8"} />
            </Link>                
          </div>
        </div>   
        <div className="hidden md:block md:w-1/2 z-20">
          <div className={cn(
            isGithub ? "mt-[-20rem]" : "mt-[-10rem]",
            "md:w-[43.75rem]"
          )}>
            <Image 
              src={GithubImage} 
              alt="VSCode Images" 
              className="max-w-[35rem] lg:max-w-full"
            />
          </div>
        </div>   
      </div>
      {/* Mobile Responsive */}
      <div className="md:hidden relative mt-16">
        <div className="block">
          <Image
            fill
            src={BackgroundImageMobile}
            alt="Background Image"
            className="pl-10 max-w-[45rem] object-contain"
          />
        </div>
        <div className="mt-10 z-20">
          <div className="md:w-[43.75rem]">
            <Image 
              src={GithubImage} 
              alt="VSCode Images"
              className="w-full max-w-[38rem]" 
            />
          </div>
        </div>   
      </div>
    </div>
  )
}
