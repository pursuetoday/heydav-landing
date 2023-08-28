import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import VSCodeImage from '/public/images/Vscode_images.svg';
import FinalVSCodeImage from '/public/images/final_vscode_image.svg';
import BackgroundImageMobile from '/public/images/bg-left-mobile.svg';
import Container from "@/layouts/container";
import { cn } from "@/lib/utils";

export default function VSCode({ isVSCode }: {
  isVSCode?: boolean
}) {
  return (
    <div className={cn(
      "min-h-[35rem] relative",
      isVSCode ? "my-[2rem] lg:my-[5rem]" : "bg-[#EAFAF9] my-[5rem] md:my-[2rem] lg:my-[5rem]",
    )}>      
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between py-5">
          <div className="lg:block lg:w-1/2 z-20 lg:pl-2">
            <div className="mt-[-4rem] lg:w-[43.75rem]">
              <Image 
                src={FinalVSCodeImage} 
                alt="VSCode Images" 
                className="w-full md:max-w-[38rem] lg:max-w-[30rem]"
              />
            </div>
          </div>          
          <div className="w-full z-20 mt-10 leading-[80px] relative px-5 lg:mt-5 lg:leading-[60px] lg:w-[60%] lg:ml-10 xl:ml-0">
            <h3 className="lg:w-4/5 text-3xl md:text-[38px] font-bold leading-[45px] lg:leading-[57.92px] text-teal-500 text-center lg:text-left xl:whitespace-nowrap">
              Elevate Your Coding Workflow
            </h3>
            <p className="lg:w-4/5 text-black text-base font-normal mt-5 leading-6 text-center lg:text-left lg:leading-normal">
              <span className="font-bold">HeyDev's VSC extension</span>{" "}transforms your IDE into a collaborative powerhouse.{" "}
              <br className="hidden lg:block" />Sync your projects effortlessly and have your coding queries answered instantly by HeyDev.{" "}
              <br className="hidden lg:block" />From unraveling complex code segments to scripting test scenarios, HeyDev is your dedicated coding companion.
            </p>
            <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:pr-14 lg:mt-2">
              <Link href='/products/vscode'>
                <SolidButton 
                  buttonText={!isVSCode ? "Learn More" : "Try Now"} 
                  customStyle={"h-[48px] px-8"} 
                />
              </Link>                
            </div>
          </div>  
        </div>
      </Container>      
    </div>
  )
}
