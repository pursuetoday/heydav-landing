import Link from 'next/link';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { MockData } from '@/types';
import NextImage from '../common/NextImage';

function PopularBlogsCard({ featuredPosts } : { featuredPosts: MockData }) {
  const [publishDate, setPublishDate] = useState('');
  useEffect(() => {
    setPublishDate(moment(featuredPosts?.publishedDate).fromNow());
  }, [featuredPosts]);

  return (
    <Link href={`/blogs/${featuredPosts?.slug}`}>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 gap-2">
        <div className="col-span-3">
          <div className="mb-1">
            <h3 className="text-[18px] font-bold">{featuredPosts?.heading}</h3>
          </div>
          <div className="mb-1">
            <p className="text-black text-[13px]">
              {featuredPosts?.subHeading}
            </p>
          </div>
          <p className="text-black text-[12px] ">{publishDate}</p>
        </div>

        <div className="col-span-2">
          <div className=" mt-[0.3rem] h-[200px] xl:h-[100px] lg:h-[100px] md:h-[400px] sm:h-[320px] xs:h-[200px]  relative rounded-lg overflow-hidden ">
            <NextImage
              alt="post cover"
              src={featuredPosts?.coverImage}
              placeholder="blur"
              blurDataURL={featuredPosts?.coverImage}
              layout="fill"
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PopularBlogsCard;
