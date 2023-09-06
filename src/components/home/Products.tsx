import ProductAIBuddy from "./ProductAIBuddy";
import ProductAIQuality from "./ProductAIQuality";

export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-0 lg:mb-[5rem]">
        <h2 className="text-teal-500 font-bold leading-[45px] lg:leading-[57.92px] text-center lg:text-left text-4xl md:text-5xl">
            Our Products
        </h2>
        <ProductAIBuddy />
        <ProductAIQuality />
    </div>
  )
}
