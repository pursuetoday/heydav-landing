import { cn } from "@/lib/utils";
import { Icons } from "./Icons";

export default function SolidButton({ buttonText, customStyle, withArrow = false, chevron = false, isCustomIconSize = false, }: {
  buttonText: string
  customStyle?: string | null
  withArrow?: boolean
  chevron?: boolean
  isCustomIconSize?: boolean
}) {
  return ( 
    <>
      {!withArrow ? (
        <button
          className={cn(
            'cursor-pointer whitespace-nowrap bg-gradient-to-r from-teal-500 to-teal-300 rounded-[15px] px-[12px] md:px-[20px] lg:px-[28px] h-[40px] lg:h-[48px] text-white font-bold text-sm lg:text-[16px]',
            customStyle,
          )}
        >
          {buttonText}
        </button>
      ) : (
        <div
          className={cn(
            'cursor-pointer flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-teal-500 to-teal-300 rounded-[15px] px-[12px] md:px-[20px] lg:px-[28px] h-[40px] lg:h-[48px] text-white font-bold text-sm lg:text-[16px]',
            customStyle,
          )}
        >
          <div className="flex items-center justify-center">
            <span className="mr-1 lg:mr-2">{buttonText}</span>
            {chevron ? (
              <Icons.chevronRight size={isCustomIconSize ? 20 : 24} className="mt-1" />
            ) : (
              <span className="mt-1 ml-2 md:ml-0">
                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M1 9.75H23.5M23.5 9.75L16.5 18.25M23.5 9.75L16.5 1.75" 
                    stroke="#EFF8F0" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
      )}
    </>
  )
}
