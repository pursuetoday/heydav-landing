import { useState } from "react";
import { comparisonCoreheadings, comparisonPlans, coreFeatures, coreFeaturesProduct } from "@/constants/comparisonPlans";
import PricingTable from "./PricingTable";
import { cn } from "../../lib/utils";
import ToggleButton from "./ToggleButton";
import { Icons } from "../ui/Icons";
import PricingTableMobile from "./PricingTableMobile";

const ComparePlan = ({ isMonthly, setIsMonthly } : {
  isMonthly: boolean
  setIsMonthly: (isMonthly: boolean) => void
}) => {
  return (
    <div className="custom-container my-20 mx-8">
      <h2 className="text-center text-3xl md:text-4xl xl:text-5xl my-8 lg:mb-20">Compare plans</h2>
      <div className="items-end w-fit mx-auto space-x-8 hidden lg:flex">
        <div>
          <p className="w-56 text-neutral-700 text-2xl font-semibold leading-loose text-left mb-1">Billing frequency</p>
          <ToggleButton {...{isMonthly, setIsMonthly}} isCompare />
        </div>
        <div className="grid grid-cols-3 gap-x-16">
          {!!comparisonPlans.length && comparisonPlans.map(plan => (
            <div 
              key={plan.id} 
              className={cn(
                plan.mostPopular ? 'bg-teal-500 text-white' : 'bg-white text-[#343434]',
                'w-52 h-40 relative p-4 border border-slate-300 rounded-xl text-center flex flex-col justify-between'
              )}
            >
              <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
              <p className="text-sm font-[500] mb-4 whitespace-nowrap">
                {isMonthly 
                  ? `${plan.price['monthly']}${plan.price.monthly === "Free" ? "" : "/"}${plan.abbr['monthly']} ${plan.status['monthly']}` 
                  : `${plan.price['annually']}${plan.price.annually === "Free" ? "" : "/"}${plan.abbr['annually']} ${plan.status['annually']}`
                }
              </p>
              <button className={cn(
                plan.mostPopular ? 'bg-white text-teal-500 hover:bg-teal-500 hover:text-white' : 'bg-teal-500 text-white hover:bg-white hover:text-teal-500',
                'border rounded-lg p-2 text-sm font-medium flex justify-center items-center'
              )}>
                <span className="mr-1">{`Get ${plan.name}`}</span>
                <Icons.chevronRight size={18} className="mt-[3px]"/>
              </button>
            </div>
          ))}
        </div>
      </div>      
      <div className="hidden lg:block">
        <PricingTable 
          heading='Core Features'
          features={coreFeatures}
          featuresProduct={coreFeaturesProduct}
        />
      </div>
      <div className="mt-5 lg:hidden">
        <div>
          <PricingTableMobile
            isMonthly={isMonthly}
            features={coreFeatures}
            featuresProduct={coreFeaturesProduct}
            headings={comparisonCoreheadings}
          />
        </div>
      </div>
    </div>
  );
};

export default ComparePlan;