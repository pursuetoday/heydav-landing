import Container from "@/layouts/container";
import Image from "next/image";
import Box7 from '/public/images/box7.svg';

export default function BlogHero() {
  return (
    <Container>
        <div className="flex items-center justify-center mt-12 lg:mt-[36px]">
          <h1 className="text-[28px] leading-9 text-center sm:text-[28px] md:text-[54px] lg:text-[54px] md:leading-[4rem] lg:leading-[4rem] lg:max-w-[90%]">
            Unveiling the Extraordinary
          </h1>
        </div>
        <div className="flex items-center justify-center mt-3">
          <p className="pt-3 text-center text-teal-500 text-[18px] md:text-[22px] lg:text-[22px] xl:text-[22px] leading-[24px] md:leading-[33px] lg:leading-[33px] xl:leading-[33px]">
            Journeys Through Untold Narratives
          </p>
        </div>
        <div className="hidden md:mt-10 md:flex md:justify-end">
            <Image src={Box7} alt="Heydev box" width={500} height={500} />
        </div>
        {/* <div className="mb-10 mt-10 md:mt-24 lg:md-24 xl:mt-24">
          <BlogMain
            featuredPosts={featuredPosts}
            currentPageNumber={currentPageNumber}
            popularPosts={popularPosts}
          />
        </div> */}
    </Container>
  )
}
