import { cn } from "@/lib/utils"
import { Icons } from "./Icons"

export default function OutlineButton({ 
  buttonText, 
  customStyle, 
  withArrow = false, 
  isBlack = false, 
  chevron = false, 
  isCustomIconSize = false 
} : {
  buttonText: string
  customStyle?: string | null
  withArrow?: boolean
  isBlack?: boolean
  chevron?: boolean
  isCustomIconSize?: boolean
}) {
  return (
    <>
      {!withArrow ? (
        <button
          className={cn(
            'whitespace-nowrap border-2 rounded-[15px] px-[12px] lg:px-[28px] h-[40px] lg:h-[48px] font-bold',
            isBlack ? 'border-[#343434] text-[#343434]' : 'border-teal-500 text-teal-500 cursor-pointer',
            customStyle,
          )}
        >
          {buttonText}
        </button>
      ) : (
        <div
          className={cn(
            'flex items-center justify-center whitespace-nowrap border-2 border-teal-500 text-teal-500 font-bold rounded-[15px] px-[12px] lg:px-[28px] h-[40px] lg:h-[48px] cursor-pointer',
            customStyle,
          )}
        >
          <div className="flex items-center">
            <span className="mr-1 lg:mr-2">{buttonText}</span>
            {chevron 
              ? <Icons.chevronRight size={isCustomIconSize ? 20 : 24} className="mt-1" strokeWidth={2.5} /> 
              : <Icons.arrowRight />
            }
          </div>
        </div>
      )}
    </>    
  )
}
