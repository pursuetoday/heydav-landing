import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import VSCodeImage from '/public/images/Vscode_images.svg';
import VSCodeBack from '/public/images/vscode_black.svg';
import BackgroundImage from '/public/images/bg-left.svg';
import BackgroundImageMobile from '/public/images/bg-left-mobile.svg';
import ContainerWrap from "@/layouts/container-wrap";
import DynamicContainerWrap from "@/layouts/container-wrap";

export default function VSCode() {
  return (
    <div className="min-h-[35rem] my-[5rem] md:my-[2rem] lg:my-[10rem] relative">
      <div className="absolute right-0 top-0 mt-[-2rem] px-14 lg:mt-[-6.25rem]">
        <Image 
          src={VSCodeBack}
          alt="VS Code background" 
          className="max-w-[15rem] lg:max-w-full"
        />
      </div>

      <div className="hidden lg:block">
        <Image
          fill
          src={BackgroundImage}
          alt="Background Image"
          className="pr-20 object-cover rounded-r-full"
        />
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center py-5">
        <div className="hidden lg:block lg:w-1/2 z-20">
          <div className="mt-[-12.5rem] lg:w-[43.75rem]">
            <Image 
              src={VSCodeImage} 
              alt="VSCode Images" 
              className="max-w-[35rem] lg:max-w-full"
            />
          </div>
        </div>
        
        {/* <ContainerWrap> */}
          <DynamicContainerWrap>
            <div className="w-full z-20 mt-10 leading-[80px] relative px-5 lg:mt-5 lg:leading-[60px] lg:w-[60%]">
              <h3 className="lg:w-4/5 text-3xl md:text-[38px] font-bold leading-[45px] lg:leading-[57.92px] text-center lg:text-left xl:whitespace-nowrap">
                Visual Studio Code Extension
              </h3>
              <p className="lg:w-4/5 text-black text-base font-normal mt-5 leading-6 text-center lg:text-left lg:leading-normal">
                Embark on a coding odyssey like no other with HeyDev - your ultimate coding companion!{" "}
                <br className="hidden md:block"/>Unravel intricacies as detailed code descriptions breathe life into your logic.{" "}
                <br className="hidden md:block"/>Let HeyDev be your guardian, warding off lurking security vulnerabilities and ensuring your applications are an impenetrable fortress.{" "} 
                <br className="hidden md:block"/>And fear not, for in the realm of testing, HeyDev orchestrates a symphony of precision, composing test scripts that sing the melody of flawless functionality.{" "} 
                <br className="hidden md:block"/>Elevate your code into a masterpiece, where complexity meets clarity, and every keystroke resonates with brilliance.
              </p>
              <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:pr-14 lg:mt-2">
                <Link href='/products/vscode'>
                  <SolidButton buttonText="Learn More" customStyle={"h-[48px] px-8"} />
                </Link>                
              </div>
            </div>  
          </DynamicContainerWrap>
        {/* </ContainerWrap> */}
      </div>
      
      {/* Mobile Responsive */}
      <div className="lg:hidden relative mt-10">
        <div className="block">
          <Image
            fill
            src={BackgroundImageMobile}
            alt="Background Image"
            className="pr-10 max-w-[45rem] object-contain rounded-r-full"
          />
        </div>
        <div className="mt-15 z-20">
          <Image 
            src={VSCodeImage} 
            alt="VSCode Images" 
            className="w-full max-w-[38rem]"
          />
        </div>   
      </div>
    </div>
  )
}
