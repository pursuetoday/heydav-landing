import { FeatureAvailability, FeatureLimits } from "@/types";
import { Icons } from "../ui/Icons";

export default function PricingTable({ heading, features, featuresProduct }: {
    heading: string
    features: FeatureLimits[]
    featuresProduct: FeatureAvailability[]
}) {
  return (
    <>
        <h5 className="my-8 mx-[60px]">{heading}</h5>
        <div className="rounded-lg  mx-auto w-full ">
            <table className="w-full bg-white text-left text-sm text-gray-500">
                <tbody>
                    {featuresProduct && !!featuresProduct.length && featuresProduct.map(element => (
                        <tr key={element.id} className="hover:bg-gray-50">
                            <th className="md:w-[280px] px-6 py-4 font-normal text-gray-900">
                                <div className="w-56 pr-2 py-2 border-b border-teal-300 border-opacity-40 justify-center items-start inline-flex">
                                    {element.feature}
                                </div>
                            </th>
                            <td className="px-10 py-4 md:w-[230px] text-center">
                                <div className="w-48 pr-2 py-2 border-b border-teal-300 border-opacity-40 justify-center items-start inline-flex">
                                    {element.starter ? (
                                        <Icons.check
                                            className=" h-5 mx-auto w-3 md:w-5 lg:w-5 xl:w-5 text-teal-500"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Icons.cross
                                            className=" h-5 w-3 md:w-5 lg:w-4 xl:w-5 mx-auto text-[#343434]"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                            </td>
                            <td className="px-6 pl-8 py-4 md:w-[230px] text-center">
                            <div className="w-48 pr-2 py-2 border-b border-teal-300 border-opacity-40 justify-center items-start inline-flex">
                            {element.pro ? (
                                <Icons.check
                                    className=" h-5 mx-auto w-3 md:w-5 lg:w-5 xl:w-5 text-teal-500"
                                    aria-hidden="true"
                                />
                            ) : (
                                <Icons.cross
                                    className=" h-5 w-3 md:w-5 lg:w-4 xl:w-5 mx-auto text-[#343434]"
                                    aria-hidden="true"
                                />
                            )}
                            </div>
                            </td>
                            <td className="px-6 py-4 md:w-[230px] text-center">
                                <div className="w-48 pr-2 py-2 border-b border-teal-300 border-opacity-40 justify-center items-start inline-flex">
                                    {element.growth ? (
                                        <Icons.check
                                            className=" h-5 mx-auto w-3 md:w-5 lg:w-5 xl:w-5 text-teal-500"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Icons.cross
                                            className=" h-5 w-3 md:w-5 lg:w-4 xl:w-5 mx-auto text-[#343434]"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                    {features && !!features.length && features.map(element => (
                        <tr key={element.id} className="hover:bg-gray-50">
                            <th className="md:w-[250px] px-6 py-4 font-normal text-gray-900">
                                <div className="w-56 pr-2 py-2 border-b border-teal-300 border-opacity-40 justify-center items-start inline-flex">
                                    {element.feature}
                                </div>
                            </th>
                            <td className="px-6 py-4 md:w-[230px] text-center">
                                <div className="w-48 pr-2 py-2 border-b border-teal-300 border-opacity-40 justify-center items-start inline-flex">
                                    {element.starter}
                                </div>
                            </td>
                            <td className="px-6 pl-8 py-4 md:w-[230px] text-center">
                                <div className="w-48 pr-2 py-2 border-b border-teal-300 border-opacity-40 justify-center items-start inline-flex">
                                    {element.pro}
                                </div>
                            </td>
                            <td className="px-6 py-4 md:w-[230px] text-center">
                                <div className="w-48 pr-2 py-2 border-b border-teal-300 border-opacity-40 justify-center items-start inline-flex">
                                    {element.growth}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}
