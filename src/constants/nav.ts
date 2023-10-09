import { NavItem } from "@/types";

export const navigations: NavItem[] = [
  {
    id: 1,
    title: 'Home',
    stateName: 'home',
    href: '/'
  },
  {
    id: 2,
    title: 'Products',
    stateName: 'products',
    href: '/products'
  },
  {
    id: 3,
    title: 'Pricing',
    stateName: 'pricing',
    href: '/pricing'
  },
  // {
  //   id: 4,
  //   title: 'Blogs',
  //   stateName: 'blogs',
  //   href: '/blogs'
  // }
]

export const productNav: NavItem[] = [
  {
    id: 5,
    title: 'AI Code Buddy',
    stateName: 'vscode',
    href: 'vscode'
  },
  {
    id: 6,
    title: 'AI Quality Guard',
    stateName: 'github',
    href: '/coming-soon'
  },
]