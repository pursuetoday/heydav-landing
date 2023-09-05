import { RoadMap } from "@/types";
import roadmap1 from "public/images/p-1-onboard.png";
import roadmap2 from "public/images/p-2.png";
import roadmap3 from "public/images/p-3.png";
import roadmap4 from "public/images/p-4.png";
import roadmap5 from "public/images/p-5.png";

export const vsFeatures: RoadMap[] = [
    {
      id: 0,
      image: roadmap1,
      heading: "Effortless Codebase Onboarding",
      subHeading: "Unveiling Simplicity in Complexity:",
      text: "Navigate through the initial stages of your project effortlessly with AI CodeBuddy. It explains the intricacies of your codebase, making the onboarding process smooth and focused on innovation rather than getting lost in investigation.",
      isReverse: true,
      color: "#EAFAF9",
    },
    {
      id: 1,
      image: roadmap2,
      heading: "Intelligent Code Refactoring",
      subHeading: "Build Graceful Codebases:",
      text: "AI CodeBuddy stands as your virtual mentor, offering intelligent refactoring suggestions that not only meet but exceed industry standards. It guides you in building a codebase that evolves gracefully over time, without the strenuous manual labor.",
      isReverse: true,
      color: "#EAFAF9",
    },
    {
      id: 2,
      image: roadmap3,
      heading: "Simplified Debugging",
      subHeading: "Swift Issue Resolution:",
      text: "Say goodbye to time-consuming bug hunts. AI CodeBuddy assists in identifying the root causes of issues in your code swiftly, guiding you directly to the problem source, saving time, and reducing frustration.",
      isReverse: false,
      color: "#FFFFFF",
    },
    {
      id: 3,
      image: roadmap4,
      heading: "Proactive Security Analysis",
      subHeading: "Strengthen Your Code's Fortress:",
      text: "Fortify your project against potential threats seamlessly. AI CodeBuddy performs a proactive and thorough security analysis, helping you pinpoint and mitigate vulnerabilities before they escalate into critical issues.",
      isReverse: true,
      color: "#EAFAF9",
    },
    {
      id: 4,
      image: roadmap5,
      heading: "Automated Test Case Generation",
      subHeading: "Robustness Assured:",
      text: "AI CodeBuddy takes charge of crafting test cases and scripts, ensuring the robustness of your code without the manual effort. It accelerates your testing phase and guarantees quality at every step, fostering a smooth coding journey.",
      isReverse: false,
      color: "#FFFFFF",
    },
  ];
  

export const gitFeatures: RoadMap[] = [
  {
    id: 0,
    image: roadmap1,
    heading: "Automated PR Reviews",
    text: "Say goodbye to manual code reviews. AI QualityGuard automates the process, providing insightful analysis and recommendations for your pull requests.",
    isReverse: true,
    color: "#EAFAF9",
  },
  {
    id: 1,
    image: roadmap1,
    heading: "Security Analysis",
    text: "Fortify your code with AI QualityGuard's security analysis. It scans your PRs to pinpoint and address potential vulnerabilities, safeguarding your project from security breaches.",
    isReverse: false,
    color: "#FFFFFF",
  },
  {
    id: 2,
    image: roadmap1,
    heading: "Quality Rating",
    text: "Gain a clear perspective of your PR's quality. AI QualityGuard evaluates your code, providing a quality rating out of 10, helping you understand where your code stands and what improvements can be made.",
    isReverse: true,
    color: "#EAFAF9",
  },
  {
    id: 3,
    image: roadmap1,
    heading: "Best Practices Compliance",
    text: "Ensure your code adheres to industry best practices. AI QualityGuard checks the compliance of your PRs, offering guidance on adhering to the best coding standards.",
    isReverse: false,
    color: "#FFFFFF",
  },
  {
    id: 4,
    image: roadmap1,
    heading: "Breakage Prediction",
    text: "Avoid unforeseen disruptions with AI QualityGuard's breakage prediction. It analyses your PR to determine if the new code might break existing functionalities, giving you a chance to rectify issues before they escalate.",
    isReverse: true,
    color: "#EAFAF9",
  }
];
