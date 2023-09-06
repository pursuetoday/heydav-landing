import { RoadMap } from "@/types";
import roadmap1 from "public/images/p-1-onboard.png";
import roadmap2 from "public/images/p-2.png";
import roadmap3 from "public/images/p-3.png";
import roadmap4 from "public/images/p-4.png";
import roadmap5 from "public/images/p-5.png";
import roadmap6 from "public/images/p-6.png";

export const roadmapContent: RoadMap[] = [
  {
    id: 0,
    image: roadmap1,
    heading: "Effortless Codebase Onboarding",
    text: "Step into any development stage with ease, without getting bogged down by complex onboarding processes. Whether you're a new hire or tackling unfamiliar code segments, HeyDev.ai stands by to explain how the code works, allowing you to focus on innovation, not investigation.",
    isReverse: true,
    color: "#EAFAF9",
  },
  {
    id: 1,
    image: roadmap2,
    heading: "Intelligent Code Refactoring",
    text: "Foster code that not only meets but exceeds industry standards, without the manual labor. HeyDev.ai refines your code, offering recommendations on best practices to follow, ensuring you build a codebase that can scale gracefully over time.",
    isReverse: false,
    color: "#FFFFFF",
  },
  {
    id: 2,
    image: roadmap3,
    heading: "Simplified Debugging",
    text: "Uncover the root causes of issues in your code swiftly, without going on a bug hunt. Just ask HeyDev.ai why a certain issue is happening, and get directed straight to the root cause, saving precious time and avoiding frustration.",
    isReverse: true,
    color: "#EAFAF9",
  },
  {
    id: 3,
    image: roadmap4,
    heading: "Proactive Security Analysis",
    text: "Fortify your code against potential threats, without the complex, time-consuming audits. HeyDev.ai performs a thorough security analysis of your code, helping you pinpoint and address vulnerabilities before they become critical issues.",
    isReverse: false,
    color: "#FFFFFF",
  },
  {
    id: 4,
    image: roadmap5,
    heading: "Automated Test Case Generation",
    text: "Ensure your code's robustness with comprehensive test scenarios, without the manual effort. HeyDev.ai crafts test cases and scripts for you, accelerating your testing phase and assuring quality at every step.",
    isReverse: true,
    color: "#EAFAF9",
  },
  {
    id: 5,
    image: roadmap6,
    heading: "Streamlined Code Reviews",
    text: "Enhance your review process, without the fear of overlooking potential pitfalls. HeyDev.ai scrutinizes pull requests for you, listing potential issues and guiding reviewers on what to focus on, ensuring a smoother, more informed review process.",
    isReverse: false,
    color: "#FFFFFF",
  }
];
