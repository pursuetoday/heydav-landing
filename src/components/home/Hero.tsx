import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import Container from "@/layouts/container";

export default function Hero() {
  return (
    <Container>
        <div className="bg-white flex justify-center md:px-12 pb-[2rem] pt-[4rem] lg:pt-[5rem]">
            <div className="flex flex-col items-center md:w-[90%]">
                <h1 className="text-[28px] leading-9 text-center sm:text-[28px] md:text-[54px] lg:text-[54px] md:leading-[4rem] lg:leading-[4rem] lg:max-w-[90%] text-teal-500">
                    Code Better, Ship Faster
                </h1>
                <h2 className="text-[20px] leading-9 text-center sm:text-[20px] md:text-[40px] lg:text-[40px] md:leading-[4rem] lg:leading-[4rem] lg:max-w-[90%] my-2">
                    Reducing Development Time, the Smart Way
                </h2>
                <p className="pt-3 text-center mb-5 text-[#000] text-[18px] md:text-[22px] lg:text-[22px] xl:text-[22px] leading-[24px] md:leading-[33px] lg:leading-[33px] xl:leading-[33px]  lg:w-[80%]">
                    With tools that facilitate code understanding, security analysis, and intelligent refactoring, coupled with automated test case generation and expedited code reviews, <span className="font-bold">HeyDev.ai</span>{" "} helps you achieve faster software releases without compromising quality.
                </p>
                <Link 
                    href='https://calendly.com/heydev/30min'
                    target="_blank"
                    rel="noreferrer"
                >
                    <SolidButton
                        chevron
                        withArrow
                        buttonText="Book a Demo"
                        customStyle={"mx-2 md:mx-0 cursor-pointer"}
                    />
                </Link>
            </div>
        </div>
    </Container>
  )
}
