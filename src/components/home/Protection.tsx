import Image from 'next/image'
import Container from '@/layouts/container'
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Icon1 from '/public/images/protection-icon-1.svg';
import Icon2 from '/public/images/protection-icon-2.svg';
import BackImage from '/public/images/back-protection.svg';
import BackImageGradient from '/public/images/back-protection-gradient.svg';
import { cn } from '@/lib/utils';

export default function Protection() {
  const { width } = useWindowDimensions();
  return (
    <div className="w-full min-h-[33rem] mb-[4rem] mt-[2rem] lg:mb-[6rem] relative">
        <div className="absolute -inset-2 bg-teal-500 bg-opacity-25 rounded-full blur-[100px] hidden lg:flex" />
        <Image 
            src={BackImage}
            alt='Background Image'
            blurDataURL={BackImage}
            className={cn(
                "absolute top-0 left-0 w-full",
                width > 2500 && width <= 3200 && "h-[65rem]",
                width > 3200 && width <= 3600 && "h-[70rem]",
                width > 3600 && width <= 4000 && "h-[75rem]",
                width > 4000 && width <= 4400 && "h-[78rem]",
                width > 4400 && width <= 4650 && "h-[80rem]",
            )}
        />
        <Container>
            <div className="z-40 flex flex-col items-center mt-10">
                <div className='z-20 flex flex-col items-center mt-16'>
                    <h2 className="text-3xl md:text-[38px] font-bold leading-[45px] lg:leading-[57.92px] text-teal-500 text-center lg:text-left xl:whitespace-nowrap">
                        Protecting Your Work, Every Line of Code
                    </h2>
                    <h3 className="text-[20px] leading-9 text-center sm:text-[20px] md:text-[20px] xl:text-[25px] lg:max-w-[90%] my-2 font-normal p-2">
                        HeyDev relies on high-quality tech and strong encryption. It also uses smart AI to quickly stop any insecure coding mistakes as they happen.
                    </h3>
                </div>
                <div className="z-20 flex flex-col lg:flex-row justify-center items-center mt-10 px-3 gap-6 lg:gap-14 lg:mt-12">
                    <div className="bg-teal-500 p-2 m-2 rounded-lg w-full md:w-3/4 xl:w-1/3 xl:h-[16rem]">
                        <div className="flex items-center py-2 px-4">
                                <div className="w-14 h-14 bg-opacity-40 rounded-[14px] flex justify-center items-center z-20">
                                    <Image 
                                        src={Icon1}
                                        alt="Code Sync Icon"
                                        blurDataURL={Icon1}
                                        className="w-10 h-10"
                                    />
                                </div>
                        </div>
                        <h4 className='text-white text-lg font-semibold px-6'>
                            Code Sync & Encryption
                        </h4>
                        <p className="text-white text-sm lg:text-base font-medium leading-normal px-6 z-20 mt-2 mb-4">
                            Easily sync your code with our platform while we handle encryption and protection. Your code remains confidential and intact during synchronization
                        </p>
                    </div>
                    <div className="bg-teal-500 p-2 m-2 rounded-lg w-full md:w-3/4 xl:w-1/3 xl:h-[16rem]">
                        <div className="flex items-center py-2 px-4">
                                <div className="w-14 h-14 bg-opacity-40 rounded-[14px] flex justify-center items-center z-20">
                                    <Image 
                                        src={Icon2}
                                        alt="Support Icon"
                                        blurDataURL={Icon2}
                                        className="w-10 h-10"
                                    />
                                </div>
                        </div>
                        <h4 className='text-white text-lg font-semibold px-6'>
                            Dedicated Support
                        </h4>
                        <p className="text-white text-sm lg:text-base font-medium leading-normal px-6 z-20 mt-2 mb-4">
                            Our security experts are here to assist you. Reach out with any security concerns or questions, and we'll provide the support you need.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
