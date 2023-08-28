import Container from "@/layouts/container";
import PricingTable from "./PricingTable";
import ToggleButton from "./ToggleButton";
import PricingTableMobile from "./PricingTableMobile";
import { Icons } from "../ui/Icons";
import { cn } from "../../lib/utils";
import { comparisonCoreheadings, comparisonPlans, coreFeatures, coreFeaturesProduct } from "@/constants/comparisonPlans";

const ComparePlan = ({ isMonthly, setIsMonthly } : {
  isMonthly: boolean
  setIsMonthly: (isMonthly: boolean) => void
}) => {
  return (
    <Container>
      <div className="my-10 mx-5">
        <h2 className="text-center text-3xl md:text-4xl xl:text-5xl my-8 lg:mb-20">Compare plans</h2>
        <div className="hidden items-end w-fit space-x-8 xl:space-x-16 xl:flex">
          <div>
            <p className="w-56 text-neutral-700 text-2xl font-semibold leading-loose text-left mb-1">Billing frequency</p>
            <ToggleButton {...{isMonthly, setIsMonthly}} isCompare />
          </div>
          <div className="grid grid-cols-3 gap-x-16">
            {!!comparisonPlans.length && comparisonPlans.map(plan => (
              <div 
                key={plan.id} 
                className={cn(
                  plan.mostPopular ? 'bg-gradient-to-r from-teal-500 to-teal-300 text-white' : 'bg-white text-[#343434]',
                  'w-52 h-40 relative p-4 border border-slate-300 rounded-xl text-center flex flex-col justify-between'
                )}
              >
                <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-sm font-[500] mb-4 whitespace-nowrap">
                  {isMonthly 
                    ? `${plan.price['monthly']}${plan.price.monthly === "Free" || plan.price.monthly === "Custom" ? "" : "/"}${plan.abbr['monthly']} ${plan.status['monthly']}` 
                    : `${plan.price['annually']}${plan.price.annually === "Free" || plan.price.annually === "Custom" ? "" : "/"}${plan.abbr['annually']} ${plan.status['annually']}`
                  }
                </p>
                <button className={cn(
                  plan.mostPopular ? 'bg-white text-teal-500 hover:bg-teal-500 hover:text-white' : 'bg-gradient-to-r from-teal-500 to-teal-300 text-white hover:text-teal-100',
                  'border rounded-lg p-2 text-sm font-medium flex justify-center items-center'
                )}>
                  <span className="mr-1">{`Get ${plan.name} Plan`}</span>
                  <Icons.chevronRight size={18} className="mt-[3px]"/>
                </button>
              </div>
            ))}
          </div>
        </div>      
        <div className="hidden xl:block ">
          <PricingTable 
            heading='Core Features'
            features={coreFeatures}
            featuresProduct={coreFeaturesProduct}
          />
        </div>
        <div className="mt-5 xl:hidden">
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
    </Container>
  );
};

export default ComparePlan;