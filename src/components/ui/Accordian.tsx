import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react';
import { Icons } from './Icons';
import { cn } from '@/lib/utils';
  
  function Icon({ open }: { open: boolean }) {
    return !open ? (
        <div className="border rounded-md h-7 w-9 flex justify-center items-center">
            <Icons.plus className='text-gray-400' />
        </div>
    ) : (
        <div className="border rounded-md h-7 w-9 flex justify-center items-center">
            <Icons.minus className='text-gray-400' />
        </div>
    );
  }
  
  function Accordions({ open, onClick, heading, body, from, isLast }: {
    open: boolean
    heading: string
    body: string
    from: string
    isLast?: boolean
    onClick: () => void
  }) {
    return (
      <Accordion
        icon={<Icon open={open} />}
        open={open}
        className={cn(
          'text-center cstm-accordian',
          from === 'nutshell'
            ? 'border-b-[1px] border-[#F1F1F1]'
            : isLast
            ? 'px-4'
            : 'border-b-[1px] border-[#F1F1F1] px-4'
        )}
      >
        <AccordionHeader
          onClick={onClick}
          className={cn(
            'text-left border-none',
            'text-[18px] font-medium text-black'
          )}
        >
          {heading}
        </AccordionHeader>
        <AccordionBody
          className={cn(
            'text-left',
            from === 'nutshell'
              ? 'text-[18px] text-[#212529] font-normal leading-[33px] '
              : 'text-[18px] text-black font-normal leading-[33px]'
          )}
        >
          {body}
        </AccordionBody>
      </Accordion>
    );
  }
  export default Accordions;
  