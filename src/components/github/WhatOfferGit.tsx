import Image from 'next/image';
import Icon1 from '/public/images/WhatOfferGit1.svg';
import Icon2 from '/public/images/WhatOfferGit2.svg';
import Icon3 from '/public/images/WhatOfferGit3.svg';
import Container from '@/layouts/container';

export default function WhatOfferGit() {
    return (
        <div className="min-h-[30rem] p-8 mt-[2rem] md:mb-[5rem] lg:mb-0 relative px-5 bg-[#EAFAF9]">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-teal-500 text-3xl xs:text-4xl font-bold text-center">Features</h2>
                    <div className="grid grid-cols-1 gap-4 mt-8 md:mt-16 md:grid-cols-2 md:gap-8 px-3">                    
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center mb-4">
                                <div className="bg-white rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4">
                                    <div className="w-9 relative">
                                        <Image src={Icon1} alt="Detailed code descriptions" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Automated Code Analysis</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        HeyDev's app conducts thorough code reviews at the pull request level, pinpointing issues and potential enhancements.
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
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Effortless Integration</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        Seamlessly integrates into your GitHub workflow, making code improvement an organic part of your development process.
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
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">In-Depth Feedback</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        Receive insightful comments directly within GitHub, providing clear explanations and actionable suggestions.
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
  