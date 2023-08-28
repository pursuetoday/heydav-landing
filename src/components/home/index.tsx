import Hero from "./Hero";
import Products from "./Products";
import Github from "../common/GithubDesign";
import VSCode from "../common/VSCodeDesign";
import Waitlist from "../common/Waitlist";
import WhatOffer from "./WhatOffer";
import PricingCard from "../pricing/PricingCard";

export default function HomeComponent() {
  return (
    <>
      <Hero />
      <VSCode />
      <Github />
      <WhatOffer />
      <Products />
      <PricingCard isMonthly isHome />
      <Waitlist />
    </>
  )
}
