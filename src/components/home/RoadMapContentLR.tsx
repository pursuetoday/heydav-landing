import Image from 'next/image'
import Container from '@/layouts/container'
import { RoadMap } from '@/types';
import { cn } from '@/lib/utils';

export default function RoadMapContentLR({ roadMapContent, id, isProduct=false }: {
    roadMapContent: RoadMap[]
    id: number
    isProduct?: boolean
}) {
  return (
    <div className="min-h-[20rem] relative bg-[#EAFAF9] md:mt-[6rem] lg:mt-[4rem] px-5">      
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between py-5">
          <div className="lg:block lg:w-[70%] z-20 hidden">
            <div className={cn(
              "lg:w-[60rem] lg:-ml-12",
              id === 0 ? "mt-[-6rem]" : "mt-[-8rem] xl:mt-[-5rem]",
              id === 2 && "lg:-ml-[5.5rem] xl:-ml-[6.5rem]",
              id === 4 && "lg:-ml-6",
            )}>
              <Image 
                src={roadMapContent[id]?.image} 
                alt={roadMapContent[id]?.heading} 
                className={cn(
                  "w-full md:max-w-[38rem] lg:max-w-[80%] xl:max-w-[90%]",
                )}
                priority
              />
            </div>
          </div>          
          <div className={cn(
            "w-full z-20 leading-[80px] relative lg:mt-5 lg:leading-[60px] lg:w-1/2 py-5 lg:px-5",
            id === 0 ? "lg:py-3" : "lg:py-0"
          )}>
            <h2 className="lg:w-3/4 text-3xl md:text-[38px] font-bold leading-[45px] lg:leading-[57.92px] text-teal-500 text-center lg:text-left 2xl:whitespace-nowrap">
              {isProduct ? (
                <span>{roadMapContent[id]?.heading}</span>
              ) : (
                <>
                  {id === 0 && (
                    <>
                      <span className='2xl:hidden custom:block'>{roadMapContent[id]?.heading}</span>
                      <span className='hidden 2xl:block custom:hidden'>                
                        Effortless Codebase {" "}
                        <br className='hidden md:block' />Onboarding
                      </span>
                    </>
                  )}
                  {id === 2 && <span>{roadMapContent[id]?.heading}</span>}
                  {id === 4 && (
                    <>
                      <span className='2xl:hidden custom:block'>{roadMapContent[id]?.heading}</span>
                      <span className='hidden 2xl:block custom:hidden'>                
                        Automated Test Case   {" "}
                        <br className='hidden md:block' />Generation
                      </span>
                    </>
                  )}
                </>
              )}
            </h2>
            <p className="lg:w-4/5 text-black text-base font-normal mt-5 leading-6 text-center lg:text-left lg:leading-normal">
              {roadMapContent[id]?.subHeading ? (
                <span>
                  <span className='font-bold'>{roadMapContent[id]?.subHeading}</span>{" "}{roadMapContent[id]?.text}
                </span>
              ) : (
                <span>{roadMapContent[id]?.text}</span>
              )}
            </p>
          </div>  
          <div className="lg:hidden z-20">
            <div className={cn(
              id === 2 ? "mt-[-2rem]" : "mt-[-1rem]"
            )}>
              <Image 
                src={roadMapContent[id]?.image} 
                alt={roadMapContent[id]?.heading} 
                className="w-full xs:max-w-[30rem] md:max-w-[38rem]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>      
    </div>
  )
}
