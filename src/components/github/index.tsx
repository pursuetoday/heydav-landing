import GithubDesign from "../common/GithubDesign";
import WhatOffer from "../common/WhatOffer";
import Waitlist from "../common/Waitlist";
import GithubHeroSection from "./HeroSection";

export default function GitHubComponent() {
  return (
    <>
      <GithubHeroSection />
      <GithubDesign isGithub />
      <WhatOffer isGithub />
      <Waitlist isGithub/>
    </>
  )
}
