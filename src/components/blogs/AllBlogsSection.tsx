import { useState, useMemo } from 'react';
import LatestBlogCard from './LatestBlogCard';
import { MockData } from '@/types';
import { posts } from '@/constants/blogs';
import Pagination from './Pagination';

function AllBlogSection({ featuredPosts }: { featuredPosts: MockData[] }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [filteredPosts, setFilteredPosts] = useState<MockData[]>(posts);
  const PageSize = 6;  
  
  // Whenever current page changes, update the table data (data has also been memoized)
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return featuredPosts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, featuredPosts]);

  return (
    <div>
      <div className="  lg:w-[60%] xl:w-[60%]">
        <h2 className="text-[14px] text-center md:text-left  pb-1 font-semibold border-b-[1px] border-[#7b7b7b]">
          LATEST ARTICLES
        </h2>
      </div>

      {currentTableData && !!currentTableData.length && currentTableData?.map((el, i) => (
        <div key={i} className="mb-10 space-y-20 lg:mt-8 lg:space-y-20">
          <LatestBlogCard data={el} />
        </div>
      ))}

      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalCount={featuredPosts.length}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default AllBlogSection;
