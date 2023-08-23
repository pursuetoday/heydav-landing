import Link from "next/link";
import { cn } from "@/lib/utils";
import { plans } from "@/constants/plans";
import { Icons } from "../ui/Icons";
import OutlineButton from "../ui/OutlineButton";
import SolidButton from "../ui/SolidButton";
import Container from "@/layouts/container";

export default function PricingCard({ isMonthly, isHome=false } : {
  isMonthly: boolean
  isHome?: boolean
}) {
  return (
    <Container>
      <div 
        className={cn(
          " bg-white mt-[3rem] mb-[6rem]",
          isHome ? "" : "lg:mb-[9rem]",
        )}
      >
        <div className="mx-auto max-w-7xl px-5">
          <div className={cn(
            !isHome ? "lg:gap-20" : "",
            "isolate mt-10 mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3"
          )}>
            {plans && !!plans.length && plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  plan.mostPopular ? "ring-2 ring-teal-500 bg-teal-500 text-light" : "ring-1 ring-gray-200",
                  "rounded-3xl p-8"
                )}
              >
                <h3
                  className={cn(
                    plan.mostPopular ? "text-white" : "text-gray-900",
                    "text-3xl font-semibold leading-8 text-center"
                  )}
                >
                  {plan.name}
                </h3>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={cn(
                      plan.mostPopular ? "text-white" : "text-[#343434]",
                      "text-3xl font-semibold tracking-tight"
                    )}
                  >
                    {plan.name === 'Starter' ? 'Free' : isMonthly ? `${plan.price["monthly"]}/month` : `${plan.price["annually"]}/yearly`}
                  </span>
                  <span
                    className={cn(
                      plan.mostPopular ? "text-white" : "text-[#343434]",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                  </span>
                </p>
                <ul
                  role="list"
                  className={cn(
                    plan.mostPopular ? "text-white" : "text-[#343434]",
                    "mt-8 space-y-3 text-sm leading-6"
                  )}
                >
                  {plan.features &&
                    plan.features.map((feature) => (
                      <div 
                        key={feature.id}
                        className="flex items-center gap-x-3"
                      >
                        {" "}
                        <span>
                          {feature.enabled ? <Icons.checkCircle className={plan.mostPopular ? "text-white font-bold" : "text-teal-500"}/> : null}
                        </span>
                        <li
                          key={feature.id}
                          className={cn(
                            feature.enabled ? plan.mostPopular ? "text-white" : "text-[#343434]" : "text-[#919EAB]",
                            'flex gap-x-3'  
                          )}
                        >
                          {feature.text}
                        </li>
                      </div>
                    ))}
                </ul>
                <Link href={plan.href} className="flex justify-center items-center mt-6 py-2 px-1">
                  {plan.mostPopular ? (
                    <OutlineButton 
                      chevron
                      withArrow
                      buttonText={plan.buttonText}
                      customStyle={'bg-white'}
                    />
                  ) : (
                    <SolidButton 
                      chevron
                      withArrow
                      buttonText={plan.buttonText}
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}