export type NavItem = {
  id: number
  title: string
  stateName: string
  href: string
}

export type RoadMap = {
  id: number
  image: any
  heading: string
  text: string
  isReverse: boolean
  color: string
}

export type PlanType = {
  id: number
  name: string
  caption: {
    monthly: string,
    annually: string
  }
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

export type FAQType = {
  questionName: string
  acceptedAnswerText: string
}

export type MockData = {
  slug: string
  heading: string
  subHeading: string
  metaDes: string
  publishedDate: Date
  updatedDate: Date
  author: string
  authorAvatar: string
  authorRole: string
  coverImage: string
  tags: string[]
  faq: FAQType[]
  body: string
}

type IconType = 'Facebook' | 'LinkedIn' | 'Instagram';
type SocialsType = {
  id: number
  name: IconType
  getHref: (url : string) => string
}

export type PATH_AUTH_TYPE = {
  root: string
  login: string
}