import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import Container from "@/layouts/container";
import Icon1 from '/public/images/aiCode-hand-icon.svg';
import Icon2 from '/public/images/aiCode-darts.svg';
import Icon3 from '/public/images/offer-icon-3.svg';
import Icon4 from '/public/images/aiCode-fire.svg';

export default function ProductAIBuddy() {
  return (
    <div className="w-full min-h-[37rem] mb-[4rem] mt-[2rem] lg:mb-[5rem] relative bg-[#EAFAF9]">
        <Container>
            <div className="hidden lg:flex lg:relative">
                <div className="absolute rounded-[15px] left-1/2 mt-7">
                    <div className="w-56 xl:w-[17rem] h-48 absolute bg-white rounded-[15px] shadow-sm">
                        <div className="flex items-center py-4 px-5">
                            <div className="w-11 h-11 bg-opacity-40 rounded-[14px] bg-teal-300 flex justify-center items-center z-20">
                                <Image 
                                    src={Icon1}
                                    alt="Hand Icon"
                                    className="w-8 h-8"
                                />
                            </div>
                        </div>
                        <div className="text-black text-sm font-medium leading-normal px-6 z-20">
                            Always by your side, helping you navigate through the complexities of coding with ease.
                        </div>
                    </div>
                </div>
                <div className="absolute rounded-[15px] right-[24%] mt-14">
                    <div className="w-56 xl:w-[17rem] h-48 absolute bg-white rounded-[15px] shadow-sm">
                        <div className="flex items-center py-4 px-5">
                            <div className="w-11 h-11 bg-opacity-40 rounded-[14px] bg-teal-300 flex justify-center items-center z-20">
                                <Image 
                                    src={Icon2}
                                    alt="Hand Icon"
                                    className="w-6 h-6"
                                />
                            </div>
                        </div>
                        <div className="text-black text-sm font-medium leading-normal px-6 z-20">
                            Ready to untangle complex functions and offer smart optimizations at any time.
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-5 z-20 mt-10 lg:py-16 lg:mt-32">
                <h3 className="text-teal-500 text-3xl md:text-4xl lg:text-[40px] font-bold leading-[45px] lg:leading-[57.92px] text-center lg:text-left lg:ml-10">
                    AI CodeBuddy
                </h3>
                <p className="text-black leading-normal mt-5 text-center lg:text-left text-2xl lg:text-3xl font-bold">
                    Say hello to your reliable{" "}
                    <br className="hidden md:block"/>
                    <span className="lg:ml-10">coding companion!</span>
                </p>
                <div className="w-full flex flex-col lg:flex-row justify-between items-center xl:justify-start lg:items-start mt-8 gap-6 md:gap-8 ml-2 lg:ml-[10%]">
                    <Link href='/products/vscode'>
                        <SolidButton buttonText="Learn More" customStyle={"lg:h-[48px] px-8"} />
                    </Link>
                </div>
            </div>
            <div className="hidden lg:flex lg:relative">
                <div className="absolute rounded-[15px] left-1/2 -top-48">
                    <div className="w-56 xl:w-[17rem] h-48 absolute bg-white rounded-[15px] shadow-sm">
                        <div className="flex items-center py-4 px-5">
                            <div className="w-11 h-11 bg-opacity-40 rounded-[14px] bg-teal-300 flex justify-center items-center z-20">
                                <Image 
                                    src={Icon3}
                                    alt="Code Icon"
                                    className="w-6 h-6"
                                />
                            </div>
                        </div>
                        <div className="text-black text-sm font-medium leading-normal px-6 z-20">
                            Effortlessly crafts and delivers test scenarios and codes to streamline your project.
                        </div>
                    </div>
                </div>
                <div className="absolute rounded-[15px] right-[24%] -top-[10.25rem]">
                    <div className="w-56 xl:w-[17rem] h-48 absolute bg-white rounded-[15px] shadow-sm">
                        <div className="flex items-center py-4 px-5">
                            <div className="w-11 h-11 bg-opacity-40 rounded-[14px] bg-teal-300 flex justify-center items-center z-20">
                                <Image 
                                    src={Icon4}
                                    alt="Fire Icon"
                                    className="w-6 h-6"
                                />
                            </div>
                        </div>
                        <div className="text-black text-sm font-medium leading-normal px-6 z-20">
                            Like having a seasoned developer at your disposal, guiding you to code smarter and quicker, every time.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-8 my-10 lg:hidden">
                <div className="md:flex md:gap-8">
                    <div className="rounded-[15px]">
                        <div className="w-56 h-48 bg-white rounded-[15px] shadow-sm">
                            <div className="flex items-center py-4 px-5">
                                <div className="w-11 h-11 bg-opacity-40 rounded-[14px] bg-teal-300 flex justify-center items-center z-20">
                                    <Image 
                                        src={Icon1}
                                        alt="Hand Icon"
                                        className="w-8 h-8"
                                    />
                                </div>
                            </div>
                            <div className="text-black text-sm font-medium leading-normal px-6 z-20">
                                Always by your side, helping you navigate through the complexities of coding with ease.
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[15px] mt-8 md:mt-0">
                        <div className="w-56 h-48 bg-white rounded-[15px] shadow-sm">
                            <div className="flex items-center py-4 px-5">
                                <div className="w-11 h-11 bg-opacity-40 rounded-[14px] bg-teal-300 flex justify-center items-center z-20">
                                    <Image 
                                        src={Icon2}
                                        alt="Hand Icon"
                                        className="w-6 h-6"
                                    />
                                </div>
                            </div>
                            <div className="text-black text-sm font-medium leading-normal px-6 z-20">
                                Ready to untangle complex functions and offer smart optimizations at any time.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:gap-8">
                    <div className="rounded-[15px]">
                        <div className="w-56 h-48 bg-white rounded-[15px] shadow-sm">
                            <div className="flex items-center py-4 px-5">
                                <div className="w-11 h-11 bg-opacity-40 rounded-[14px] bg-teal-300 flex justify-center items-center z-20">
                                    <Image 
                                        src={Icon3}
                                        alt="Code Icon"
                                        className="w-6 h-6"
                                    />
                                </div>
                            </div>
                            <div className="text-black text-sm font-medium leading-normal px-6 z-20">
                                Effortlessly crafts and delivers test scenarios and codes to streamline your project.
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[15px] mt-8 md:mt-0">
                        <div className="w-56 h-48 bg-white rounded-[15px] shadow-sm">
                            <div className="flex items-center py-4 px-5">
                                <div className="w-11 h-11 bg-opacity-40 rounded-[14px] bg-teal-300 flex justify-center items-center z-20">
                                    <Image 
                                        src={Icon4}
                                        alt="Fire Icon"
                                        className="w-6 h-6"
                                    />
                                </div>
                            </div>
                            <div className="text-black text-sm font-medium leading-normal px-6 z-20">
                                Like having a seasoned developer at your disposal, guiding you to code smarter and quicker, every time.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
