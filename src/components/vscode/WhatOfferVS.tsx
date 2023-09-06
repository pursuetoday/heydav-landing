import Image from 'next/image';
import Icon1 from '/public/images/offer-icon-1.svg';
import Icon2 from '/public/images/offer-icon-2.svg';
import Icon3 from '/public/images/offer-icon-3.svg';
import Container from '@/layouts/container';

export default function WhatOfferVS() {
    return (
        <div className="min-h-[30rem] p-8 mt-[2rem] md:mb-[5rem] relative px-5 lg:mb-5">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center font-bold leading-[3.1rem] text-teal-500">How It Works</h2>
                    <p className="text-center my-4 text-xl">
                        Embarking on a coding journey with AI CodeBuddy is like having a knowledgeable companion by your side, guiding you every step of the way. 
                        <br /><br />
                        Here's how it revolutionizes your coding experience:
                    </p>
                    <div className="grid grid-cols-1 gap-4 mt-8 md:mt-16 md:grid-cols-2 md:gap-8 px-2">                    
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center mb-4">
                                <div className="rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4 mb-16 md:mb-32 lg:mb-28">
                                    <div className="w-9 relative">
                                        <Image src={Icon1} alt="Detailed code descriptions" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Whole Codebase Indexing</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        <span className='font-bold'>Ask Anything, Anytime</span>: AI CodeBuddy indexes your entire codebase, setting up a vast knowledge base that you can query at any time. Whether it's a specific function or an overall code structure, all the answers are just a question away.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4 md:pt-5">
                                <div className="rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4 mb-16 md:mb-40 lg:mb-36">
                                    <div className="w-9 relative">
                                        <Image src={Icon3} alt="Improvement Suggestions" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Interactive Chat Interface</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                        <span className='font-bold'>Conversations with Your Code</span>: Featuring an intuitive chat interface, AI CodeBuddy allows for smooth communication. Ask any question or seek advice on coding dilemmas; AI CodeBuddy is there to converse and assist, making your coding process feel like a friendly dialogue.
                                    </p>
                                </div>
                            </div>
                        </div>
                
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center mb-4">
                                <div className="rounded-3xl border border-gray-200 w-20 h-[4.2rem] px-4 flex items-center justify-center text-white mr-4 mb-16 md:mb-52 lg:mb-48">
                                    <div className="w-9 relative">
                                        <Image src={Icon2} alt="Write test scripts" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-teal-500 text-xl sm:text-2xl font-medium mb-2">Multifunctional One-Click Solutions</h3>
                                    <p className="text-neutral-800 text-sm sm:text-base font-normal">
                                    <span className='font-bold'>All-in-One Code Assistance</span>: AI CodeBuddy is equipped to provide explanations, suggest refactoring options, analyze security, and even generate test cases—all with a single click. Its multifaceted approach means you have a tool that caters to a broad spectrum of your coding needs, saving you time and effort.
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
  