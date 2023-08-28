/* eslint-disable */
import { useState } from 'react';
import Accordions from '@/components/ui/Accordian';
import { FAQType } from '@/types';

export default function Nutshell({ faqQuestions } : { faqQuestions: FAQType[] }) {
  const [open, setOpen] = useState<number>(0);
  const [faqdata] = useState([
    ...faqQuestions?.map((v, i) => ({
      title: v.questionName,
      body: v.acceptedAnswerText,
      headingId: `flush-heading${i}`,
      collapseId: `flush-collapse${i}`
    }))
  ]);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <div className="">
        <p className="text-[1.7rem] font-bold pt-10">In a nutshell</p>
        {faqdata &&
          faqdata.map((e, i) => (
            <Accordions
              key={i}
              open={open === i + 1}
              onClick={() => handleOpen(i + 1)}
              heading={e.title}
              body={e.body}
              from="nutshell"
            />
          ))}
      </div>
    </div>
  );
}
