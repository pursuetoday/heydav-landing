import Waitlist from "../common/Waitlist";
import Features from "./Features";
import GithubHeroSection from "./HeroSection";
import WhatOfferGit from "./WhatOfferGit";

export default function GitHubComponent() {
  return (
    <>
      <GithubHeroSection />
      <Features />
      <WhatOfferGit />
      {/* <Waitlist isGithub/> */}
    </>
  )
}
