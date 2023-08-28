import { useState } from 'react';
import { Tooltip } from '@material-tailwind/react';
import { fDate } from '@/lib/utils';
import { Icons } from '@/components/ui/Icons';
import NextImage from '@/components/common/NextImage';
import { IconType, MockData, SocialsType } from '@/types';

const SOCIALS: SocialsType[] = [
  {
    id: 1,
    name: 'Facebook',
    getHref: (url: string) => `https://www.facebook.com/sharer.php?u=${url}`
  },

  {
    id: 2,
    name: 'LinkedIn',
    getHref: (url: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
  },
  {
    id: 3,
    name: 'Instagram',
    getHref: (url: string) => `https://twitter.com/intent/tweet?url=${url}`
  }
];


function BlogHero({ blog } : { blog: MockData | undefined }) {
  const url = `http://localhost:3000/blog/${blog?.slug}`;
  const [hasCopied, setCopied] = useState<boolean>(false);

  function getIconComponent(iconType: IconType) {
    const iconMap: Record<IconType, JSX.Element> = {
      Facebook: <Icons.facebook2 size={18}  />,
      LinkedIn: <Icons.linkedin2 size={18} />,
      Instagram: <Icons.instagram2 size={18} />,
    };
  
    // Return the corresponding icon component or null if not found
    return iconMap[iconType] || null;
  }

  return (
    <div className="mt-[30px]">
      <div className="flex flex-row">
        <div className="flex items-center gap-x-4 text-xs mb-2">
          <p className="relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-sm text-gray-900 hover:bg-gray-300">
            {blog?.tags ? blog?.tags[0] : 'Default'}
          </p>
        </div>
      </div>
      <div className="main-heading-container mb-5 ">
        <h1 className="mb-4 text-[1.8rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem]">
          {blog?.heading}
        </h1>
        <p className="text-[#637381] text-[22px] mb-4">{blog?.subHeading}</p>
      </div>
      <div className="">
        <div>
          <div className="grid grid-cols-1 items-center lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-4 mb-5">
            <div>
              <div className="flex flex-row justify-start items-center">
                <Icons.calendar size={18} className="mt-[1px] mr-[8px]  text-teal-500" />
                <p className="text-[11px] sm:text-[14px] font-semibold text-[#637381]">
                  {blog?.updatedDate &&
                  new Date(blog?.updatedDate) > new Date(blog?.publishedDate)
                    ? `Last updated :  ${fDate(blog?.updatedDate)}`
                    : `Published : ${fDate(blog?.publishedDate)}`}
                </p>
                <div className="hidden sm:flex">
                  <Icons.category size={18} className="mt-[1px] ml-[30px] mr-[8px] text-teal-500" />
                  <p className="text-[14px] font-semibold text-[#637381]">
                    {blog?.tags ? blog?.tags[0] : 'Default'}
                  </p>
                </div>
                <Icons.user size={18} className="mt-[1px] ml-[30px]  text-teal-500 mr-[8px]" />
                <p className="text-[11px] sm:text-[14px] font-semibold text-[#637381]">
                  {blog?.author || 'Anonymous'}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center mt-[5px] flex-row justify-start md:justify-end lg:justify-end xl:justify-end">
                <p className="text-[16px] font-bold text-[#303030] ">Share</p>
                {SOCIALS.map((item, i) => {
                  if (i !== SOCIALS.length - 1) {
                    return (
                      <span
                        key={item.id + i}
                        role="presentation"
                        className="border border-black rounded-full p-[0.4rem] cursor-pointer  ml-[16px]"
                        onClick={() => window.open(item.getHref(url), '_blank').focus()}
                      >
                        {getIconComponent(item.name)}
                      </span>
                    );
                  }
                  return (
                    <div key={item.id + i + i} className="flex">
                      <span
                        role="presentation"
                        className="border border-black rounded-full p-[0.4rem] cursor-pointer  ml-[16px]"
                        onClick={() => window.open(item?.getHref(url), '_blank').focus()}
                      >
                        {getIconComponent(item.name)}
                      </span>
                      <Tooltip content={hasCopied ? 'Copied!' : 'Copy link'}>
                        <span
                          role="presentation"
                          className="border border-black rounded-full p-[0.4rem] cursor-pointer  ml-[16px] "
                          onClick={() => {
                            setCopied(true);
                            navigator.clipboard.writeText(url);
                            setTimeout(() => setCopied(false), 1000);
                          }}
                        >
                          <Icons.copy height={18} />
                        </span>
                      </Tooltip>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[200px] xxl:h-[560px] xl:h-[560px] lg:h-[560px] md:h-[450px] sm:h-[320px] xs:h-[200px]  relative rounded-lg overflow-hidden ">
          <NextImage
            alt="post cover"
            src={blog?.coverImage  || ""}
            placeholder={blog?.coverImage ? "blur" : "empty"}
            blurDataURL={blog?.coverImage || ""}
            layout="fill"
            objectFit="cover"
          />
        </div>        
      </div>
    </div>
  );
}

export default BlogHero;
