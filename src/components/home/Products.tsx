import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import OutlineButton from "../ui/OutlineButton";
import FinalProductImage from '/public/images/final_products.svg';
import Container from "@/layouts/container";

export default function Products() {
  return (
    <div className="w-full min-h-[20rem] my-[5rem] lg:my-[7rem] relative">
        <Container>
            <div className="flex flex-col items-center justify-between md:mt-0 lg:flex-row">
                <div className="flex relative lg:hidden">
                    <Image 
                        src={FinalProductImage}
                        alt="Final Product Images"
                        className="w-full md:max-w-[35rem]"
                    />
                </div> 
                <div className="w-full py-16 px-5 z-20 lg:w-[55%]">
                    <h3 className="text-teal-500 text-3xl md:text-[40px] font-bold leading-[45px] lg:leading-[57.92px] text-center lg:text-left">
                        Elevate Your Coding Experience - Try Now
                    </h3>
                    <p className="text-black text-base font-normal leading-normal mt-5 text-center lg:text-left">
                        Our AI-driven solutions enhance your coding{" "}
                        <br className="hidden md:block"/>experience, offering precise code insights, efficient{" "}
                        <br className="hidden md:block" />collaboration, and a clearer path to mastering your craft.
                    </p>
                    <div className="w-full flex flex-col lg:flex-row justify-between items-center xl:justify-start lg:items-start mt-8 gap-6 md:gap-8">
                        <Link href='/products/github'>
                            <SolidButton buttonText="Discover GitHub App" customStyle={"h-[48px] px-8"} />
                        </Link>
                        <Link href='/products/vscode' className="lg:mr-9">
                            <OutlineButton  buttonText="Discover VSC Extension" customStyle={"h-[48px] px-3"} />
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:flex lg:relative">
                    <Image 
                        src={FinalProductImage}
                        alt="Final Product Images"
                        className="lg:max-w-[28rem] xl:max-w-[35rem]"
                    />
                </div> 
            </div>
        </Container>
    </div>
  )
}
