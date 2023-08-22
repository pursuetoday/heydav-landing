export type NavItem = {
  id: number
  title: string
  stateName: string
  href: string
}

export type PlanType = {
  id: number
  name: string
  href: string
  price: PriceType
  buttonText: string
  features: PlanFeatures[]
  mostPopular: boolean
}

export type PlanFeatures = {
  id: number
  enabled: boolean
  text: string
}

export type PriceType = {
  monthly: string
  annually: string
}

export type WindowDimensions = {
  width: number
  height: number
}

export type SocialMediaLinksType = {
  facebook: string
  instagram: string
  linkedIn: string
}

export type FooterLinks = {
  id: number
  title: string
  href: string
}

export type PricingTier = {
  name: string
  id: string
  href: string
  abbr: {
    monthly: string
    annually: string
  };
  status: {
    monthly: string
    annually: string
  };
  price: {
    monthly: string
    annually: string
  };
  mostPopular: boolean
};

export type FeatureAvailability = {
  id: number
  feature: string
  starter: boolean
  pro: boolean
  growth: boolean
  id: number
};

export type FeatureLimits = {
  id: number
  feature: string
  starter: string
  pro: string
  growth: string
};

export type FeatureHeadings = {
  id: number
  name: string
  subheadingMo: string
  subheadingYr: string
  title: boolean
};

export type WhatOfferType = {
  id: number
  icon: string
  title: string
  desc: string
}
