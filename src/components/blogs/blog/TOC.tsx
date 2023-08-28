import { useEffect, useState } from 'react';
import Link from 'next/link';

type DataType = {
  id: string
  tag: string
  heading?: string
  subHeading?: string
}

function TOC({ slug }: { slug : string }) {
  const [content, setContent] = useState<DataType[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.slice(1);
      document.getElementById(hash)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }, []);

  useEffect(() => {
    const data: DataType[] = [];
    document.querySelectorAll('h2, h3, h4, h5').forEach((ele) => {
      if (ele.tagName === 'H2' || ele.id !== 'booknow') {
        if (ele.id !== 'booknow') {
          data.push({
            heading: ele.innerHTML
              .replace(/<[^>]*>?/gm, '')
              .replace('&#39;', '')
              .replace('&amp;', '')
              .replace('&nbsp;', '')
              .replace(':', ''),
            tag: ele.tagName,
            id: ele.id
          });
        }
      } else {
        data.push({
          subHeading: ele.innerHTML
            .replace(/<[^>]*>?/gm, '')
            .replace('&#39;', '')
            .replace('&amp;', '')
            .replace('&nbsp;', '')
            .replace(':', ''),
          tag: ele.tagName,
          id: ele.id
        });
      }
    });
    setContent(data);
  }, []);
  const onContentClick = (id: string) => setActive(id);

  return (
    <div className="pt-10 sticky top-[5rem]">
      <p className="text-[18px] font-semibold text-gray-800 dark:text-white">
        Table of Contents
      </p>
      <div className="relative  md:hidden lg:block xl:block p-5 rounded-md ml-1">
        <div className="overflow-y-auto">
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-none">
            {content &&
              content.map((item, index) => (
                <div key={index} id={item.id} className="scroll-target">
                  {item.heading && (
                    <li
                      onClick={() => onContentClick(item.id)}
                      id={item.id}
                      className={`text-[16px] ${
                        item.tag === 'H2'
                          ? 'leading-5'
                          : 'leading-[18.5px] ml-6'
                      } cursor-pointer ${
                        active === item.id
                          ? 'text-primaryColor border-primaryColor'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Link
                        href={`/blogs/${slug.trim()}/#${item.heading
                          .trim()
                          .replace(/<[^>]*>?/gm, '')
                          .replace(/&#39;/g, '')
                          .replace(/&amp;/g, '')
                          .replace(/&nbsp;/g, '')
                          .replace(/:/g, '')
                          .replaceAll(' ', '-')}`}
                        className={`text-left hover:underline hover:text-primaryColor hover:underline-offset-4 ${
                          active === item.id
                            ? 'underline underline-offset-4'
                            : ''
                        }`}
                      >
                        {item.heading}
                      </Link>
                    </li>
                  )}
                  {item.subHeading && (
                    <li
                      onClick={() => onContentClick(item.id)}
                      id={item.id}
                      className={`text-sm leading-3 cursor-pointer ml-11 ${
                        active === item.id
                          ? 'text-primaryColor'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Link
                        href={`/blogs/${slug.trim()}/#${item.subHeading
                          .trim()
                          .replace(/<[^>]*>?/gm, '')
                          .replace(/&#39;/g, '')
                          .replace(/&amp;/g, '')
                          .replace(/&nbsp;/g, '')
                          .replace(/:/g, '')
                          .replaceAll(' ', '-')}`}
                        className={`text-left ${
                          active === item.id
                            ? 'underline underline-offset-4'
                            : ''
                        }`}
                      >
                        {item.subHeading}
                      </Link>
                    </li>
                  )}
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TOC;
