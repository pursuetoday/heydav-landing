import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import OutlineButton from "../ui/OutlineButton";
import GitHubIcon from '/public/images/github.svg';
import VSCodeIconPurple from '/public/images/vscode_purple.svg';
import SecurityIcon from '/public/images/security.svg';
import LogoIcon from '/public/images/logo_icon.svg';
import BackgroundImage from '/public/images/bg-left.svg';
import BackgroundImageMobile from '/public/images/bg-left-mobile.svg';
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { cn } from "@/lib/utils";

export default function Products() {
  const { width } = useWindowDimensions();
  return (
    <div className="w-full min-h-[30rem] mb-[6rem] sm:my-[7rem] lg:my-[10rem] relative">
        <div className="hidden sm:block">
            <Image
                fill
                src={BackgroundImage}
                alt="Background Image"
                className="pr-20 object-cover rounded-r-full"
            />
        </div>
        <div className="flex flex-col items-center justify-between md:mt-0 sm:flex-row py-16">
            <div className="w-full p-16 z-20 sm:w-[65%] lg:w-[55%]">
                <h3 className="text-teal-500 text-3xl md:text-[40px] font-bold leading-[45px] sm:leading-[57.92px] text-center sm:text-left">
                    Elevate Your Coding with HeyDev's Sublime Products
                </h3>
                <p className="text-black text-base font-normal leading-normal mt-5 text-center sm:text-left">
                    Discover the power of HeyDev's two sub-products,{" "}
                    <br className="hidden md:block" /> designed to revolutionize your coding practices.
                </p>
                <div className="w-full flex flex-col md:flex-row justify-between items-center sm:items-start mt-8 gap-6 md:gap-8">
                    <Link href='/products/github'>
                        <SolidButton buttonText="Discover GitHub App" customStyle={"h-[48px] px-8"} />
                    </Link>
                    <Link href='/products/vscode' className="md:mr-9">
                        <OutlineButton  buttonText="Discover VSC Extension" customStyle={"h-[48px] px-3"} />
                    </Link>
                </div>
            </div>
            <div className="hidden sm:flex sm:relative">
                <div className={cn(
                    "w-36 h-32 lg:w-56 lg:h-40 absolute sm:right-[20rem] md:right-[25rem] lg:right-[33rem] bg-white rounded-lg p-4 gap-2 flex flex-col justify-center items-center shadow-md border border-gradient-to-r from-[#D8D8D870] to-[#C9C9C900]",
                    width > 767 && width < 803 ? "bottom-[14rem]" : "sm:bottom-[16rem] md:bottom-[12.5rem]"
                )}>
                    <div className="w-8 lg:w-12">
                        <Image src={GitHubIcon} alt="GitHub" />
                    </div>
                    <p className="text-center text-md lg:text-lg font-[500]">GitHub</p>
                </div>
                <div className={cn(
                    "w-36 h-32 lg:w-56 lg:h-40 absolute sm:right-[3rem] md:right-[10rem] bottom-[5rem] lg:right-[14rem] lg:bottom-[7rem] z-20 bg-white rounded-lg p-4 gap-2 flex flex-col justify-center items-center shadow-md border border-gradient-to-r from-[#D8D8D870] to-[#C9C9C900]",
                    width > 767 && width < 803 || width > 802 && width < 852 ? "md:right-[6rem]" : "md:right-[9rem]",
                )}>
                    <div className="w-8 lg:w-12">
                        <Image src={VSCodeIconPurple} alt="VSCode Purple" />
                    </div>
                    <p className="text-center text-md lg:text-lg font-[500] text-[#3B68FF]">Visual Studio Code</p>
                </div>
                <div className={cn(
                    "w-36 h-32 lg:w-56 lg:h-40 absolute -bottom-[1rem] lg:right-[25rem] lg:bottom-[0.1rem] bg-white rounded-lg p-4 gap-2 flex flex-col justify-center items-center shadow-md border border-gradient-to-r from-[#D8D8D870] to-[#C9C9C900]",
                    width > 767 && width < 803 || width > 802 && width < 852 ? "right-[12rem]" : "sm:right-[9rem] md:right-[15rem]",
                )}>
                    <div className="w-8 lg:w-12">
                        <Image src={SecurityIcon} alt="Security Icon" />
                    </div>
                    <p className="text-center text-md lg:text-lg font-[500] text-[#587EFF] opacity-80">Security vulnerability</p>
                </div>
                <div className={cn(
                    "w-36 h-32 lg:w-56 lg:h-40 absolute lg:right-[8rem] lg:-top-10 bg-white rounded-lg p-4 gap-2 flex flex-col justify-center items-center shadow-md border border-gradient-to-r from-[#D8D8D870] to-[#C9C9C900]",
                    width > 767 && width < 803 ? "top-20 right-[6rem]" : "sm:top-20 md:top-10 right-[8rem]"
                )}>
                    <div className="w-8 lg:w-12">
                        <Image src={LogoIcon} alt="Logo Icon" />
                    </div>
                    <p className="text-center text-md lg:text-lg text-teal-500">
                        <span className="font-normal">Hey</span>{" "}
                        <span className="font-bold">Dev</span>
                    </p>
                </div>
            </div>
        </div>
        {/* Mobile Responsive */}
        <div className="sm:hidden relative">
            <div className="block">
                <Image
                    src={BackgroundImageMobile}
                    alt="Background Image"
                    width={
                        width < 490 ? 
                            (width < 425 ? (width < 402 ? (width < 351 ? 300 : 350) : 400) : 420) : 
                            (width < 525 ? 450 : width < 580 ? 500 : 550)
                    }
                />
            </div>
            <div className="block">
                <div className={cn(
                    "absolute left-8 top-5 bg-white rounded-lg p-3 flex flex-col justify-center items-center shadow-md border border-gradient-to-r from-[#D8D8D870] to-[#C9C9C900]",
                    width < 351 ? "w-20 h-16" : "w-24 h-20 xs:w-32 xs:h-28"
                )}>
                    <div className={cn(
                        width < 351 ? "w-5" : "w-7 xs:w-8",
                    )}>
                        <Image src={GitHubIcon} alt="GitHub" />
                    </div>
                    <p className={cn(
                        "text-center font-[500]",
                        width < 351 ? "text-[10px] p-1" : "text-xs p-2"
                    )}>GitHub</p>
                </div>
                <div className={cn(
                    "z-20 absolute right-1/4 top-14 bg-white rounded-lg p-3 flex flex-col justify-center items-center shadow-md border border-gradient-to-r from-[#D8D8D870] to-[#C9C9C900]",
                    width < 495 ? width < 402 
                        ? width > 325 && width < 351 ? "right-[30%] top-1/4" : "right-[25%] top-1/4" 
                        : "right-[32%] top-1/4 xs:right-1/4  xs:top-14" 
                        : "right-[32%] top-1/4",
                    width < 351 ? "w-20 h-16" : "w-24 h-20 xs:w-32 xs:h-28"
                )}>
                    <div className={cn(
                        width < 351 ? "w-5" : "w-7 xs:w-8",
                    )}>
                        <Image src={VSCodeIconPurple} alt="VSCode Purple" />
                    </div>
                    <p className={cn(
                        "text-center font-[500]",
                        width < 351 ? "text-[9px]" : "text-xs xs:p-2"
                    )}>
                        <span className="whitespace-nowrap">Visual Studio</span>
                        <br />Code
                    </p>
                </div>
                <div className={cn(
                    "absolute bg-white rounded-lg p-3 flex flex-col justify-center items-center shadow-md border border-gradient-to-r from-[#D8D8D870] to-[#C9C9C900]",
                    width < 550 ? "left-[28%] top-[45%] xs:left-1/4  xs:top-36" : "left-[30%] top-[40%]",
                    width < 351 ? "w-20 h-16" : "w-24 h-20 xs:w-32 xs:h-28"
                )}>
                    <div className={cn(
                        width < 351 ? "w-5" : "w-7 xs:w-8",
                    )}>
                        <Image src={SecurityIcon} alt="Security Icon" />
                    </div>
                    <p className={cn(
                        "text-center font-[500]",
                        width < 351 ? "text-[9px]" : "text-xs xs:p-2"
                    )}>
                        Security vulnerability
                    </p>
                </div>
                <div className={cn(
                    "w-24 h-20 xs:w-32 xs:h-28 absolute bg-white rounded-lg p-3 flex flex-col justify-center items-center shadow-md border border-gradient-to-r from-[#D8D8D870] to-[#C9C9C900]",
                    width < 550 ? width < 402 ? 
                        width < 351 ? width < 285 ? "right-10 top-40" : "right-10 top-36" : "right-10 top-48" : 
                        "right-10 top-56" : 
                        "right-20 bottom-10",
                    width < 351 ? "w-20 h-16" : "w-24 h-20 xs:w-32 xs:h-28"
                )}>
                    <div className={cn(
                        width < 351 ? "w-5" : "w-7 xs:w-8",
                    )}>
                        <Image src={LogoIcon} alt="Logo Icon" />
                    </div>
                    <p className={cn(
                        "text-center text-teal-500",
                        width < 351 ? "text-[10px]" : "text-xs xs:text-sm p-2"
                    )}>
                        <span className="font-normal">Hey</span>{" "}
                        <span className="font-bold">Dev</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
