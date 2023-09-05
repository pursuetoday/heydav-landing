import { useState } from "react";
import PricingCard from "./PricingCard";
import HeroSection from "./HeroSection";
import ComparePlan from "./ComparePlan";
import Waitlist from "../common/Waitlist";

export default function PricingComponent() {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  return (
    <>
      <HeroSection {...{isMonthly, setIsMonthly}} />
      <PricingCard isMonthly={isMonthly} />
      <ComparePlan {...{isMonthly, setIsMonthly}} />
      {/* <Waitlist /> */}
    </>
  )
}
