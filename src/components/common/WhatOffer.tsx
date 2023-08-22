import Image from 'next/image';
import Icon1 from '/public/images/offer-icon-1.svg';
import Icon2 from '/public/images/offer-icon-2.svg';
import Icon3 from '/public/images/offer-icon-3.svg';
import Icon4 from '/public/images/offer-icon-4.svg';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { cn } from '@/lib/utils';

export default function WhatOffer({ isGithub=false, isVSCode=false }: {
    isGithub?: boolean
    isVSCode?: boolean
}) {
    const { width } = useWindowDimensions();
    return (
        <section className="min-h-[30rem] bg-white p-8 mt-[5rem] md:mb-[5rem] lg:mb-0 relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-teal-500 text-3xl xs:text-4xl font-bold text-center">What do we offer?</h2>
                <div className="grid grid-cols-1 gap-4 mt-8 md:mt-16 md:grid-cols-2 md:gap-8">
                    
                    <div className="flex flex-col items-center gap-4 w-[95%]">
                        <div className="flex items-center mb-4">
                            <div className="bg-white rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4">
                                <div className="w-9 relative">
                                    <Image src={Icon1} alt="Detailed code descriptions" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Detailed code descriptions</h3>
                                <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                    HeyDev provides detailed descriptions of your code, making it
                                    easier to understand.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4 lg:pt-5">
                            <div className="bg-white rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4">
                                <div className="w-9 relative">
                                    <Image src={Icon2} alt="Improvement Suggestions" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Improvement suggestions</h3>
                                <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                    HeyDev suggests improvements to your code, helping you optimize
                                    for performance and maintainability.
                                </p>
                            </div>
                        </div>
                    </div>
            
                    <div className="flex flex-col items-center gap-4 w-[95%]">
                        <div className="flex items-center mb-4">
                            <div className="bg-white rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4">
                                <div className="w-9 relative">
                                    <Image src={Icon3} alt="Write test scripts" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Write test scripts</h3>
                                <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                    HeyDev helps you write test scripts, so you can make sure your
                                    code is always working as intended.
                                </p>
                            </div>
                        </div>
                        <div className={cn(
                            "flex items-center mb-4",
                            width > 767 && width < 784 || width > 849 && width < 908 ? "pt-5": ""
                        )}>
                            <div className="bg-white rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4">
                                <div className="w-9 relative">
                                    <Image src={Icon4} alt="Security vulnerability alerts" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Security vulnerability alerts</h3>
                                <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                    HeyDev alerts you to potential security vulnerabilities in your
                                    code, helping you keep your applications secure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
  }
  