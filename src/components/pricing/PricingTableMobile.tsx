import { cn } from "@/lib/utils";
import { Icons } from "../ui/Icons";
import { FeatureAvailability, FeatureHeadings, FeatureLimits } from "@/types";

function PricingTableMobile({ isMonthly, features, featuresProduct, headings }: {
    isMonthly: boolean
    features: FeatureLimits[]
    featuresProduct: FeatureAvailability[]
    headings: FeatureHeadings[]
}) {
  return (
    <div className="overflow-x-auto">        
      <table className="table-auto overflow-hidden min-w-full text-left text-[12px] font-light ">
        <thead className="text-xl text-center h-[65px]">
          <tr className="text-xl text-center font-bold">
            {headings && !!headings.length && headings?.map(element => (
              <th
                key={element.id}
                className={cn(
                    element.title ? 'font-bold' : 'font-medium',
                    "lg:pl-5 md:lg:pl-5 xl:pl-5 p-3 md:p-0 lg:p-0 border text-xl text-center"
                )}
              >
                <span className="text-[14px] md:text-xl lg:text-xl xl:text-xl">{element.name}</span>
                <br />
                <span className="text-sm text-gray-500">{isMonthly ? element.subheadingMo : element.subheadingYr}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featuresProduct && !!featuresProduct.length && featuresProduct?.map(element => {
            return (
              <tr key={element.id} className="odd:bg-[#FCFCFC]">
                <td className="text-left font-medium w-auto xl:w-[350px] lg:w-[350px] sm:w-[250px] md:w-[350px] p-4 text-[12px] md:text-lg lg:text-lg xl:text-lg border">
                  {element.feature}
                </td>
                <td className="lg:pl-5 md:lg:pl-5 text-center text-[12px] md:text-lg lg:text-lg xl:text-lg border">
                  {element.starter ? (
                    <Icons.check
                      className=" h-5 mx-auto w-3 md:w-5 lg:w-5 xl:w-5 text-teal-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <Icons.cross
                      className=" h-5 w-3 md:w-5 lg:w-4 xl:w-5 mx-auto text-neutral-700"
                      aria-hidden="true"
                    />
                  )}
                </td>
                <td className="text-center lg:pl-5 md:lg:pl-5 text-[12px] md:text-lg lg:text-lg xl:text-lg border">
                  {element.pro ? (
                    <Icons.check
                      className=" h-5 w-3 md:w-5 lg:w-5 xl:w-5 mx-auto text-teal-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <Icons.cross
                      className=" h-5 w-3 md:w-5 lg:w-4 xl:w-5 mx-auto text-neutral-700"
                      aria-hidden="true"
                    />
                  )}
                </td>
                <td className="text-center lg:pl-5 md:lg:pl-5 text-[12px] md:text-lg lg:text-lg xl:text-lg border">
                  {element.growth ? (
                    <Icons.check
                      className=" h-5 w-3 md:w-5 lg:w-5 xl:w-5 mx-auto text-teal-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <Icons.cross
                      className=" h-5 w-3 md:w-3 lg:w-4 xl:w-3 mx-auto text-neutral-700"
                      aria-hidden="true"
                    />
                  )}
                </td>
              </tr>
            );
          })}
          {features && !!features.length && features?.map(element => {
            return (
              <tr key={element.id} className="odd:bg-[#FCFCFC]">
                <td className="text-left font-medium w-auto xl:w-[350px] lg:w-[350px] sm:w-[250px] md:w-[350px] p-4 text-[12px] md:text-lg lg:text-lg xl:text-lg border">
                  {element.feature}
                </td>
                <td className="lg:pl-5 md:lg:pl-5 text-center text-[12px] md:text-lg lg:text-lg xl:text-lg border">
                  {element.starter}
                </td>
                <td className="text-center lg:pl-5 md:lg:pl-5 text-[12px] md:text-lg lg:text-lg xl:text-lg border">
                  {element.pro}
                </td>
                <td className="text-center lg:pl-5 md:lg:pl-5 text-[12px] md:text-lg lg:text-lg xl:text-lg border">
                  {element.growth}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PricingTableMobile;
