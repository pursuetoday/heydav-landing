import Image from 'next/image';
import Icon1 from '/public/images/WhatOfferGit1.svg';
import Icon2 from '/public/images/WhatOfferGit2.svg';
import Icon3 from '/public/images/WhatOfferGit3.svg';
import Container from '@/layouts/container';

export default function WhatOfferGit() {
    return (
        <div className="min-h-[30rem] p-8 mt-[2rem] md:mb-[5rem] relative px-5 lg:mb-5">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center font-bold leading-[3.1rem] text-teal-500">How It Works</h2>
                    <p className="text-center my-4 text-xl">Experience a streamlined, intelligent, and secure code review process with AI QualityGuard - where quality meets efficiency.</p>
                    <div className="grid grid-cols-1 gap-4 mt-8 md:mt-16 md:grid-cols-2 md:gap-8 px-3">                    
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center mb-4">
                                <div className="bg-white rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4">
                                    <div className="w-9 relative">
                                        <Image src={Icon1} alt="Detailed code descriptions" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Instant PR Review</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        <span className='font-bold'>Seamless Integration</span>: As soon as you create a pull request, AI QualityGuard swings into action, scrutinizing the code minutely to offer optimizations and highlight security loopholes.
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
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Intelligent Recommendations</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        <span className='font-bold'>Code Harmony</span>: AI QualityGuard forewarns if the new code might interfere with existing functionalities, facilitating a harmonious integration of new and existing code.
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
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Best Practices and Quality Rating</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        <span className='font-bold'>Quality at a Glance</span>: AI QualityGuard evaluates the adherence to best practices in your PR and assigns a quality rating out of 10, providing a quick insight into the quality of the code and areas that might need attention.
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
  