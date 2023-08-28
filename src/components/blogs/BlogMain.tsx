import { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import NextImage from '../common/NextImage';
import { MockData } from '@/types';
import PopularBlogsCard from './PopularBlogCards';

function BlogMain({ featuredPosts, popularPosts }: {
  featuredPosts: MockData[]
  popularPosts: MockData[]
}) {
  const [publishDate, setPublishDate] = useState('');
  useEffect(() => {
    setPublishDate(moment(featuredPosts[0].publishedDate).fromNow());
  }, [featuredPosts]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 gap-0 lg:gap-8 xl:gap-8">
        <div className="col-span-3">
          <h2 className="text-[14px]  text-center md:text-left  pb-1 font-semibold border-b-[1px] border-[#7b7b7b]">
            FEATURED ARTICLES
          </h2>
          <Link href={`/blogs/${featuredPosts[0].slug}`}>
            <div className="mt-[2rem] h-[200px] xl:h-[365px] lg:h-[365px] md:h-[400px] sm:h-[320px] xs:h-[200px]  relative rounded-lg overflow-hidden ">
              <NextImage
                alt="post cover"
                src={featuredPosts[0].coverImage}
                placeholder="blur"
                blurDataURL={featuredPosts[0].coverImage}
                layout="fill"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                objectFit="cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-[20px] md:text-[24px] font-bold">
                {featuredPosts[0].heading}
              </h3>
            </div>
            <div className=" mt-4">
              <p className="text-black text-[18px] leading-[33px]">
                {featuredPosts[0].metaDes}
              </p>
            </div>
            <p className="text-black text-[16px] mt-2">{publishDate}</p>
          </Link>
        </div>

        <div className="col-span-2">
          <h2 className="text-[14px] text-center md:text-left  mt-10 lg:mt-0 xl:mt-0  pb-1 font-semibold border-b-[1px] border-[#7b7b7b]">
            MOST POPULAR
          </h2>
          <div className="mt-6">
            POPULAR POSTS
            {popularPosts && !!popularPosts.length && popularPosts.map((item, i) => (
              <div key={i} className="mb-6">
                <PopularBlogsCard featuredPosts={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogMain;
