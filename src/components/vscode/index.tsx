import Waitlist from "../common/Waitlist";
import Features from './Features';
import VSCodeHeroSection from "./HeroSection";
import WhatOfferVS from './WhatOfferVS';

export default function VSCodeComponent() {
  return (
    <>
      <VSCodeHeroSection />
      <Features />
      <WhatOfferVS />
      {/* <Waitlist isVSCode /> */}
    </>
  )
}
