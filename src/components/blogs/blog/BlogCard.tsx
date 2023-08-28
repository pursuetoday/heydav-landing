import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import moment from 'moment';
import { MockData } from '@/types';
import NextImage from '@/components/common/NextImage';

function BlogCard({ element, isHomePage=false }: {
    element: MockData
    isHomePage?: boolean
}) {
  const [publishDate, setPublishDate] = useState('');
  useEffect(() => {
    setPublishDate(moment(element.publishedDate).format('ll'));
  }, [element]);
  return (
    <div>
      <article
        key={element.slug}
        className=" flex mb-6 md:mb-16 lg:mb-16   flex-col items-start"
      >
        <div className="relative w-full rounded-2xl hover:cursor-pointer">
          <div className=" w-full rounded-2xl xs-[200px]  h-[170px] sm:h-[150px] lg:h-[13.6rem] sm:aspect-[2/1] lg:aspect-[3/2] xl:h-[12.7rem]">
            <NextImage
              src={element.coverImage}
              alt="blog post"
              layout="fill"
              objectFit="cover"
              className="rounded-lg  lg:object-cover md:object-cover"
            />
          </div>
        </div>
        <div className="max-w-xl  flex flex-col  flex-grow">
          <div className="mt-5 flex items-center gap-x-4 text-xs">
            <time dateTime={publishDate} className="text-black/80">
              {publishDate}
            </time>
            <Link
              href="/"
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-black/80 hover:bg-gray-100"
            >
              Marketing
            </Link>
          </div>
          <div className="group relative flex-grow flex flex-col  ">
            {isHomePage ? (
              <h3 className="mt-3 text-[20px] font-semibold md:text-[24px] lg:font-semibold lg:text-[24px] ">
                <Link href={`/blogs/${element.slug}`}>
                  {element.heading.slice(0, 48).concat('...')}
                </Link>
              </h3>
            ) : (
              <p className="mt-3 text-[20px] font-semibold md:text-[24px] lg:font-semibold lg:text-[24px] ">
                <Link href={`/blogs/${element.slug}`}>
                  {element.heading.slice(0, 48).concat('...')}
                </Link>
              </p>
            )}
            <Link
              href={`/blogs/${element.slug}`}
              className=" md:overflow-hidden h-[170px] md:h-[110px]  flex-grow"
            >
              <p className="mt-2 leading-[33px]    font-normal text-[18px]   text-darkColor">
                {element.metaDes
                  .replace(/<[^>]*>?/gm, '')
                  .replace('&#39;', "'")}
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogCard;
