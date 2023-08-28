import GithubDesign from "../common/GithubDesign";
import Waitlist from "../common/Waitlist";
import GithubHeroSection from "./HeroSection";
import WhatOfferGit from "./WhatOfferGit";

export default function GitHubComponent() {
  return (
    <>
      <GithubHeroSection />
      <GithubDesign />
      <WhatOfferGit />
      <Waitlist isGithub/>
    </>
  )
}
