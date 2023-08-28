// import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
// import { DOTS, usePagination } from 'src/hooks/usePagination';

import { DOTS, usePagination } from "@/hooks/usePagination";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/Icons";

export default function Pagination(props: {
    currentPage: number
    totalCount: number
    pageSize: number
    onPageChange: (page: any) => void
    siblingCount?: number
}) {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });
  const lastPage = paginationRange[paginationRange.length - 1];
  const disableNext = currentPage === lastPage;
  const disablePrev = currentPage === 1;
  
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  
  const nextHandle = () => !disableNext && onPageChange(page => page + 1);
  const previousHandle = () => !disablePrev && onPageChange(page => page - 1);

  return (
    <div className='flex flex-col justify-center items-center gap-[2%] mt-12 md:mt-20'>
      <hr className="w-full text-gray-100" />
      <div className='flex justify-between items-center mt-6'>
        <div 
          onClick={previousHandle} 
          className={cn(
            disablePrev ? 'pointer-events-none opacity-70' : '',
            'p-[1%] cursor-pointer absolute left-1 xs:left-5 md:left-28 text-gray-500'
          )}
        >
          <div className='flex justify-center items-center text-lg md:text-sm'>
            <Icons.arrowLeft />
            <span className='hidden pl-2 md:block'>Previous</span>
          </div>
        </div>
        {!!paginationRange.length && paginationRange.map((pageNumber, idx) => {
          return pageNumber === DOTS ? (
            <p key={idx} className='rounded-md px-3 py-1 text-gray-400 hover:cursor-default'>&#8230;</p>
          ) : (
            <p
              className={cn(
                  currentPage === pageNumber ? 'bg-primary text-light' : 'text-gray-500',
                  'rounded-md px-4 text-sm md:text-xs py-2.5 cursor-pointer'
              )}
              key={idx}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </p>
          )
        })}
        <div
          onClick={nextHandle} 
          className={cn(
            disableNext ? 'pointer-events-none opacity-70' : '',
            'p-[1%] cursor-pointer absolute right-1 xs:right-5 md:right-28 text-primary'
          )}
        >
          <div className='flex justify-center items-center text-lg md:text-sm'>
            <span className='hidden pr-2 md:block'>Next</span>
            <Icons.arrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}
