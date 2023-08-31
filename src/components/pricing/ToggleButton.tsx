import useWindowDimensions from "@/hooks/useWindowDimensions";
import { cn } from "@/lib/utils";

const ToggleButton = ({ isMonthly, setIsMonthly, isCompare=false } : {
  isCompare?: boolean
  isMonthly: boolean
  setIsMonthly: (isMonthly: boolean) => void
}) => {
  const { width } = useWindowDimensions();
  return (
    <div className={cn(
      !isCompare ? "mt-[3rem] max-w-[320px] gap-8" : "gap-6",
      "relative flex min-h-[64px] bg-inherit items-center justify-center px-2 border border-teal-500 rounded-[15px] mx-auto cursor-pointer"
    )}>
      <div
        className={cn(
          isMonthly ? "bg-gradient-to-r from-teal-500 to-teal-300 text-white" : "text-neutral-700 opacity-50",
          'w-[90px] h-[48px] flex justify-center items-center rounded-[15px]',
          width < 320 ? width < 300 ? "text-xs" : "text-sm" : "text-base"
        )}
        onClick={() => setIsMonthly(true)}
      >
        Monthly
      </div>
      <div
        className={cn(
          !isMonthly ? "bg-gradient-to-r from-teal-500 to-teal-300 text-white" : "text-neutral-700 opacity-50",
          'w-[156px] h-[48px] whitespace-nowrap flex justify-center items-center rounded-[15px] font-semibold',
          width < 320 ? width < 300 ? "text-xs" : "text-sm" : "text-base"
        )}
        onClick={() => setIsMonthly(false)}
      >
        Yearly (save 10%)
      </div>
    </div>
  );
};

export default ToggleButton;
