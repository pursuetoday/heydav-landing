import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import { VSCODE_EXTENSION } from "@/routes";
import FinalVSCodeImage from "public/images/p-1-dup-1.png";
import Container from "@/layouts/container";
import { cn } from "@/lib/utils";

export default function VSCode({ isVSCode }: {
  isVSCode?: boolean
}) {
  return (
    <div className={cn(
      "min-h-[30rem] relative",
      isVSCode ? "lg:my-[5rem]" : "bg-[#EAFAF9] my-[5rem] md:my-[2rem] lg:my-[5rem]",
    )}>      
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="hidden lg:block lg:w-[70%] z-20 lg:pl-2">
            <div className="mt-[-5rem] lg:w-[60rem]">
              <Image 
                src={FinalVSCodeImage} 
                alt="VSCode Images" 
                className="w-full md:max-w-[38rem] lg:max-w-[80%] xl:max-w-[90%]"
              />
            </div>
          </div>          
          <div className="w-full z-20 leading-[80px] relative px-5 lg:mt-5 lg:leading-[60px] lg:w-[60%] lg:ml-10 xl:ml-10">
            <h2 className="lg:w-3/4 text-3xl md:text-[38px] font-bold leading-[45px] lg:leading-[57.92px] text-teal-500 text-center lg:text-left 2xl:whitespace-nowrap">              
              <>
                <span className='2xl:hidden custom:block'>Elevate Your Coding Workflow</span>
                <span className='hidden 2xl:block custom:hidden'>                
                  Elevate Your Coding  {" "}
                  <br className='hidden md:block' />Workflow
                </span>
              </>
            </h2>
            <p className="lg:w-4/5 text-black text-base font-normal mt-5 leading-6 text-center lg:text-left lg:leading-normal">
              <span className="font-bold">HeyDev's VSC extension</span>{" "}transforms your IDE into a collaborative powerhouse.{" "}
              <br className="hidden lg:block" />Sync your projects effortlessly and have your coding queries answered instantly by HeyDev.{" "}
              <br className="hidden lg:block" />From unraveling complex code segments to scripting test scenarios, HeyDev is your dedicated coding companion.
            </p>
            <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:pr-14 xl:pr-20 lg:mt-2">
              <Link href={VSCODE_EXTENSION}>
                <SolidButton 
                  buttonText={!isVSCode ? "Learn More" : "Try Now"} 
                  customStyle={"h-[48px] px-8"} 
                />
              </Link>                
            </div>
          </div>  
          <div className="lg:hidden z-20">
            <div className="mt-[-1rem]">
              <Image 
                src={FinalVSCodeImage} 
                alt="VSCode Images"  
                className="w-full xs:max-w-[30rem] md:max-w-[38rem]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>      
    </div>
  )
}
