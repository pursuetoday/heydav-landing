import VSCodeDesign from '../common/VSCodeDesign';
import WhatOffer from '../common/WhatOffer';
import Waitlist from "../common/Waitlist";
import VSCodeHeroSection from "./HeroSection";

export default function VSCodeComponent() {
  return (
    <>
      <VSCodeHeroSection />
      <VSCodeDesign />
      <WhatOffer isVSCode />
      <Waitlist isVSCode />
    </>
  )
}
