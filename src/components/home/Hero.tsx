import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import HeroDesign from "./HeroDesign";
import Container from "@/layouts/container";

export default function Hero() {
  return (
    <Container>
        <div className="bg-white flex items-center mt-[2rem] pt-[2rem] pb-[5rem] flex-col md:mt-0 md:flex-row lg:space-x-16 justify-between lg:px-5">
            <div className="w-full flex flex-col px-[2rem] sm:px-[2rem] md:-mx-[12px] md:mt-16 lg:-mx-0 lg:px-0 lg:w-[50%] lg:mt-24">
                <h1 className="mb-6 text-center md:text-left text-teal-500 font-bold">
                    HeyDev: Empowering
                    {" "}
                    Your Development
                    Workflow
                </h1>
                <p className="mb-6 text-lg leading-7 text-center md:text-left">
                    All-in-one solution where innovation meets efficiency in your development journey. 
                    Transform your coding experience with our cutting-edge tools tailored to enhance productivity and code quality.
                </p>
                <div className="w-full mt-4 md:flex">
                    <Link href='/'>
                        <SolidButton
                            withArrow
                            buttonText="Get Started"
                            customStyle={"mx-2 md:mx-0 cursor-pointer"}
                        />
                    </Link>
                </div>
            </div>
            <HeroDesign />
        </div>
    </Container>
  )
}
