import { PlanType } from "@/types";

export const plans: PlanType[] = [
  {
    id: 1,
    name: "Starter",
    href: "/",
    price: { monthly: "Free", annually: "Free" },
    caption: { monthly: "", annually: "" },
    buttonText: 'Get Starter Plan',
    features: [
      {
        id: 1,
        enabled: true,
        text: "Access to VSC Extension",
      },
      {
        id: 2,
        enabled: true,
        text: "Access to Github App",
      },
      {
        id: 3,
        enabled: true,
        text: "Upto 3 PR Reviews",
      },
      {
        id: 4,
        enabled: true,
        text: "Upto 10 Code Descriptions",
      },
      { 
        id: 5,
        enabled: true, 
        text: "Upto 10 Security Tips" 
      },
      {
        id: 6,
        enabled: true,
        text: "Upto 10 Code Recommendations",
      },
      {
        id: 7,
        enabled: true,
        text: "Upto 10 Test Scripts",
      },
    ],
    mostPopular: false,
  },
  {
    id: 2,
    name: "Pro",
    href: "/",
    price: { monthly: "$10", annually: "$108" },
    caption: { monthly: "", annually: "" },
    buttonText: 'Get Pro Plan',
    features: [
      {
        id: 1,
        enabled: true,
        text: "Access to VSC Extension",
      },
      {
        id: 2,
        enabled: true,
        text: "Access to Github App",
      },
      {
        id: 3,
        enabled: true,
        text: "Upto 10 PR Reviews",
      },
      {
        id: 4,
        enabled: true,
        text: "Unlimited Code Descriptions",
      },
      { 
        id: 5,
        enabled: true, 
        text: "Unlimited Security Tips" 
      },
      {
        id: 6,
        enabled: true,
        text: "Unlimited Code Recommendations",
      },
      {
        id: 7,
        enabled: true,
        text: "Unlimited Test Scripts",
      },
    ],
    mostPopular: false,
  },
  {
    id: 3,
    name: "Team",
    href: "/",
    price: { monthly: "$20", annually: "$197" },
    caption: { monthly: "$9", annually: "$97" },
    buttonText: 'Get Team Plan',
    features: [
      {
        id: 1,
        enabled: true,
        text: "Access to VSC Extension",
      },
      {
        id: 2,
        enabled: true,
        text: "Access to Github App",
      },
      {
        id: 3,
        enabled: true,
        text: "Unlimited PR Reviews",
      },
      {
        id: 4,
        enabled: true,
        text: "Unlimited Code Descriptions",
      },
      { 
        id: 5,
        enabled: true, 
        text: "Unlimited Security Tips" 
      },
      {
        id: 6,
        enabled: true,
        text: "Unlimited Code Recommendations",
      },
      {
        id: 7,
        enabled: true,
        text: "Unlimited Test Scripts",
      },
    ],
    mostPopular: true,
  },
]