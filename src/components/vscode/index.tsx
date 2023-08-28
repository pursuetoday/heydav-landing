import VSCodeDesign from '../common/VSCodeDesign';
import Waitlist from "../common/Waitlist";
import VSCodeHeroSection from "./HeroSection";
import WhatOfferVS from './WhatOfferVS';

export default function VSCodeComponent() {
  return (
    <>
      <VSCodeHeroSection />
      <VSCodeDesign isVSCode />
      <WhatOfferVS />
      <Waitlist isVSCode />
    </>
  )
}
