import Image from 'next/image';
import Icon1 from '/public/images/offer-icon-1.svg';
import Icon2 from '/public/images/offer-icon-2.svg';
import Icon3 from '/public/images/offer-icon-3.svg';
import Icon4 from '/public/images/offer-icon-4.svg';
import Container from '@/layouts/container';

export default function WhatOfferVS() {
    return (
        <div className="min-h-[30rem] p-8 mt-[2rem] md:mb-[5rem] lg:mb-0 relative px-5 bg-[#EAFAF9]">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-teal-500 text-3xl xs:text-4xl font-bold text-center">Features</h2>
                    <div className="grid grid-cols-1 gap-4 mt-8 md:mt-16 md:grid-cols-2 md:gap-8 px-2">                    
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center mb-4">
                                <div className="bg-white rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4">
                                    <div className="w-9 relative">
                                        <Image src={Icon1} alt="Detailed code descriptions" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Comprehensive Code Descriptions</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        Instantly understand complex code segments with detailed explanations, fostering a deeper comprehension of your work.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4 md:pt-5">
                                <div className="bg-white rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4">
                                    <div className="w-9 relative">
                                        <Image src={Icon3} alt="Improvement Suggestions" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Write test scripts</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        HeyDev helps you write test scripts, so you can make sure your code is always working as intended.
                                    </p>
                                </div>
                            </div>
                        </div>
                
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center mb-4">
                                <div className="bg-white rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4">
                                    <div className="w-9 relative">
                                        <Image src={Icon2} alt="Write test scripts" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Improvement Recommendations</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        Elevate your code quality by receiving intelligent recommendations for optimizations and best practices.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4 md:pt-5 xl:pt-10 pr-8">
                                <div className="bg-white rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4">
                                    <div className="w-9 relative">
                                        <Image src={Icon4} alt="Security vulnerability alerts" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Security vulnerability alerts</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        Identify potential vulnerabilities in your code with advanced security scanning, and receive actionable suggestions to fortify your project.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
  }
  