import Image from 'next/image'
import Container from '@/layouts/container'
import { RoadMap } from '@/types';
import { cn } from '@/lib/utils';

export default function RoadMapContentRL({ roadMapContent, id }: {
    roadMapContent: RoadMap[]
    id: number
}) {
  return (
    <div className={cn(
      "min-h-[30rem] relative bg-white px-5",
      id === 5 ? "" : "md:my-[2rem]",
      id === 3 && "md:mt-[4rem] md:mb-[2rem]",
    )}>      
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">         
          <div className="w-full z-20 mt-10 leading-[80px] relative px-5 lg:mt-5 lg:leading-[60px] lg:w-[60%]">
            <h2 className="lg:w-4/5 text-3xl md:text-[38px] font-bold leading-[45px] lg:leading-[57.92px] text-teal-500 text-center lg:text-left xl:whitespace-nowrap">
                {roadMapContent[id]?.heading}
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
          <div className="lg:block lg:w-[60%] xl:w-[70%] z-20 mt-[6rem]">
            <div className="mt-[-5rem] lg:w-[43.75rem] xl:w-[48rem] 2xl:w-[55rem]">
              <Image 
                src={roadMapContent[id]?.image} 
                alt={roadMapContent[id]?.heading} 
                className="w-full md:max-w-[38rem] lg:max-w-[80%] xl:max-w-[90%]"
                priority
              />
            </div>
          </div> 
        </div>
      </Container>      
    </div>
  )
}
