import { FeatureAvailability, FeatureHeadings, FeatureLimits, PricingTier } from "@/types";

export const comparisonPlans: PricingTier[] = [
  {
    id: "tier-hobby",
    name: "Starter",
    href: "#",
    abbr: { monthly: '', annually: '' },
    status: { monthly: "", annually: "" },
    price: { monthly: "Free", annually: "Free" },
    mostPopular: false,
  },
  {
    id: "tier-freelancer",
    name: "Pro",
    href: "#",
    abbr: { monthly: 'mo', annually: 'yr' },
    status: { monthly: "billed monthly", annually: "billed annually" },
    price: { monthly: "$25", annually: "$275" },
    mostPopular: false,
  },
  {
    id: "tier-startup",
    name: "Corporate",
    href: "#",
    abbr: { monthly: '', annually: '' },
    status: { monthly: "", annually: "" },
    price: { monthly: "Custom", annually: "Custom" },
    mostPopular: true,
  },
];

export const coreFeaturesProduct: FeatureAvailability[] = [
  {
    id: 1,
    feature: 'VSC Extension',
    starter: true,
    pro: true,
    growth: true,
  },
  {
    id: 2,
    feature: 'GitHub App',
    starter: true,
    pro: true,
    growth: true,
  }
];

export const coreFeatures: FeatureLimits[] = [
  {
    id: 3,
    feature: 'PR Reviews',
    starter: "Upto 3",
    pro: "Upto 10",
    growth: "Unlimited",
  },
  {
    id: 4,
    feature: 'Code Description',
    starter: "Upto 10",
    pro: "Unlimited",
    growth: "Unlimited",
  },
  {
    id: 5,
    feature: 'Security Tips',
    starter: "Upto 10",
    pro: "Unlimited",
    growth: "Unlimited",
  },
  {
    id: 2,
    feature: 'Recommendations',
    starter: "Upto 10",
    pro: "Unlimited",
    growth: "Unlimited",
  },
  {
    id: 6 ,
    feature: 'Text Scripts',
    starter: "Upto 10",
    pro: "Unlimited",
    growth: "Unlimited",
  }
];
  
export const comparisonCoreheadings: FeatureHeadings[] = [
  { id: 1, 
    name: 'Core Features', 
    subheadingMo: "",
    subheadingYr: "", 
    title: true 
  },
  { id: 2, 
    name: 'Starter', 
    subheadingMo: "Free",
    subheadingYr: "Free",
    title: true 
  },  
  { id: 3, 
    name: 'Pro', 
    subheadingMo: "$25/monthly",
    subheadingYr: "$275/yearly", 
    title: true 
  },
  { id: 4, 
    name: 'Corporate', 
    subheadingMo: "Custom",
    subheadingYr: "Custom", 
    title: true 
  },
];
