import Link from 'next/link';
import OutlineButton from '@/components/ui/OutlineButton';
import BlogCard from './BlogCard';
import { MockData } from '@/types';

export default function TopBlogs({ topBlogs }: { topBlogs: MockData[] }) {
  return (
    <div>
      <div className="mt-[100px] flex justify-center">
        <p className="text-[20px] font-bold text-center  sm:text-[30px] md:text-[40px] lg:text-[48px] lg:w-[80%]">
          Related{' '}
          <span
            className="text-primaryColor"
            style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
          >
            Blogs
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
        {topBlogs && !!topBlogs.length && topBlogs.slice(0, 3).map((element, i) => (
          <BlogCard element={element} key={i} />
        ))}
      </div>
      <div className="mb-28 flex justify-center">
        <div className="mt-[1.3rem] md:mt-[0rem] lg:pt-[0rem]">
          <Link href="/blogs">
            <OutlineButton 
                chevron
                withArrow
                buttonText="View all Blogs"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
