import { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import { MockData } from '@/types';
import NextImage from '../common/NextImage';

function LatestBlogCard({ data }: { data: MockData }) {
  const [publishDate, setPublishDate] = useState('');
  useEffect(() => {
    setPublishDate(moment(data.publishedDate).format('ll'));
  }, [data]);
  return (
    <Link href={`/blogs/${data.slug}`}>
      <div
        key={data.slug}
        className="flex mt-10 md:mt-10 lg:mt-0 xl:mt-0 flex-col  lg:flex-col"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div>
            <div className="flex flex-row">
              <div className="flex items-center gap-x-4 text-xs mb-2">
                <time dateTime={data.publishedDate} className="text-gray-900">
                  {publishDate}
                </time>
                <p className="relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-sm text-gray-900 hover:bg-gray-300">
                  {data?.tags ? data?.tags[0] : 'Default'}
                </p>
              </div>
            </div>
            <div className="group relative">
              <h3 className="mt-3 md:mt-0 lg:mt-0 xl:mt-0 mb-1 text-[24px] font-bold  text-black">
                <span className="absolute inset-0" />
                {data.heading}
              </h3>
            </div>
            <div className="group relative max-w-xl">
              <p className="mt-3 text-[18px]  text-black">{data?.metaDes}</p>
            </div>
            <div className="mt-3 flex border-t border-gray-900/5 pt-6">
              <div className="relative flex items-center gap-x-4">
                <NextImage
                  src={data?.authorAvatar}
                  alt="coverImage"
                  width={50}
                  height={50}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-sm text-gray-900">
                    <p className="absolute text-[18px] inset-0" />
                    {data?.author}
                  </div>
                  {/* remove after data comes from contentfull */}
                  <p className="text-gray-900 text-[16px]">{data?.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:mt-[10px] lg:mt-[8px] xl:mt-[8px] h-[200px] xl:h-[302px] lg:h-[270px]  sm:h-[320px] xs:h-[200px]  relative rounded-lg overflow-hidden ">
            <NextImage
              alt="post cover"
              src={data.coverImage}
              placeholder="blur"
              blurDataURL={data.coverImage}
              layout="fill"
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              objectFit="cover"
              // className="object-cover md:object-fill lg:object-cover xl:object-cover"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LatestBlogCard;
