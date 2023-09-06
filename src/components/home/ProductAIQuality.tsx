import Image from "next/image";
import Link from "next/link";
import SolidButton from "../ui/SolidButton";
import Container from "@/layouts/container";
import Icon1 from '/public/images/aiQuality-icon1.svg';
import Icon2 from '/public/images/aiQuality-icon2.svg';
import Icon3 from '/public/images/aiQuality-icon3.svg';
import Icon4 from '/public/images/aiQuality-icon4.svg';

export default function ProductAIBuddy() {
  return (
    <div className="w-full min-h-[30rem] my-[2rem] md:mb-[4rem] lg:mb-0 relative">
      <Container>
        <div className="hidden lg:flex lg:relative">
          <div className="absolute rounded-[15px] mt-7 px-5">
            <div className="w-56 xl:w-[17rem] h-48 absolute bg-teal-500 rounded-[15px] shadow-sm">
              <div className="flex items-center py-4 px-5">
                <div className="z-20">
                  <Image 
                    src={Icon1}
                    alt="Hand Icon"
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="text-white text-sm font-medium leading-normal px-6 z-20">
                Drastically cuts down the time spent on manual reviews, letting you focus on what's essential.
              </div>
            </div>
          </div>
          <div className="absolute rounded-[15px] left-[27.75%] mt-7">
            <div className="w-56 xl:w-[17rem] lg:h-52 xl:h-48 absolute bg-teal-500 rounded-[15px] shadow-sm">
              <div className="flex items-center py-4 px-5">
                <div className="z-20">
                  <Image 
                    src={Icon2}
                    alt="Hand Icon"
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="text-white text-sm font-medium leading-normal px-6 z-20">
                Diligently analyzes your pull requests to pinpoint any potential security gaps and suggests intelligent enhancements.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-5 z-20 lg:py-16 lg:mt-32">
          <h3 className="text-teal-500 text-3xl md:text-4xl lg:text-[40px] font-bold leading-[45px] lg:leading-[57.92px] text-center lg:text-right lg:pr-10">
            AI QualityGuard
          </h3>
          <p className="text-black leading-normal mt-5 text-center lg:text-right text-2xl lg:text-3xl font-bold">
            Meet your personal quality{" "}
            <br className="hidden md:block"/>inspector for code reviews!
          </p>
          <div className="w-full flex flex-col lg:flex-row justify-between items-center xl:justify-end lg:items-end mt-8 gap-6 md:gap-8 pr-4 lg:pr-28">
            <Link href='/coming-soon'>
              <SolidButton buttonText="Learn More" customStyle={"lg:h-[48px] px-8"} />
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:relative">
          <div className="absolute rounded-[15px] -top-48 px-5">
            <div className="w-56 xl:w-[17rem] h-48 absolute bg-teal-500 rounded-[15px] shadow-sm">
              <div className="flex items-center py-4 px-5">
                <div className="z-20">
                  <Image 
                    src={Icon3}
                    alt="Code Icon"
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="text-white text-sm font-medium leading-normal px-6 z-20">
                Offers insightful suggestions to boost the quality and security of your code.
              </div>
            </div>
          </div>
          <div className="absolute rounded-[15px] left-[27.75%] -top-48">
            <div className="w-56 xl:w-[17rem] h-48 absolute bg-teal-500 rounded-[15px] shadow-sm">
              <div className="flex items-center py-4 px-5">
                <div className="z-20">
                  <Image 
                    src={Icon4}
                    alt="Fire Icon"
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="text-white text-sm font-medium leading-normal px-6 z-20">
                Facilitates a quicker, smarter, and safer coding journey, ensuring your outputs are consistently of high quality.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 my-10 lg:hidden">
          <div className="md:flex md:gap-8">
            <div className="rounded-[15px]">
              <div className="w-56 h-48 bg-teal-500 rounded-[15px] shadow-sm">
                <div className="flex items-center py-4 px-5">
                  <div className="z-20">
                    <Image 
                      src={Icon1}
                      alt="Hand Icon"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div className="text-white text-sm font-medium leading-normal px-6 z-20">
                  Drastically cuts down the time spent on manual reviews, letting you focus on what's essential.
                </div>
              </div>
            </div>
            <div className="rounded-[15px] mt-8 md:mt-0">
              <div className="w-56 h-52 bg-teal-500 rounded-[15px] shadow-sm">
              <div className="flex items-center py-4 px-5">
                <div className="z-20">
                  <Image 
                    src={Icon2}
                    alt="Hand Icon"
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="text-white text-sm font-medium leading-normal px-6 z-20">
                Diligently analyzes your pull requests to pinpoint any potential security gaps and suggests intelligent enhancements.
              </div>
            </div>
            </div>
          </div>
          <div className="md:flex md:gap-8">
            <div className="rounded-[15px]">
              <div className="w-56 h-48 bg-teal-500 rounded-[15px] shadow-sm">
                <div className="flex items-center py-4 px-5">
                  <div className="z-20">
                    <Image 
                      src={Icon3}
                      alt="Code Icon"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div className="text-white text-sm font-medium leading-normal px-6 z-20">
                  Offers insightful suggestions to boost the quality and security of your code.
                </div>
              </div>
            </div>
            <div className="rounded-[15px] mt-8 md:mt-0">
              <div className="w-56 h-48 bg-teal-500 rounded-[15px] shadow-sm">
                <div className="flex items-center py-4 px-5">
                  <div className="z-20">
                    <Image 
                      src={Icon4}
                      alt="Fire Icon"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div className="text-white text-sm font-medium leading-normal px-6 z-20">
                  Facilitates a quicker, smarter, and safer coding journey, ensuring your outputs are consistently of high quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
