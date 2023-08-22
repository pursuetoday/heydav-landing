import Head from 'next/head'
import LandingLayout from '@/layouts/landing'
import PricingComponent from '@/components/pricing'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | Heydev</title>
      </Head>
      <LandingLayout activeLink='pricing'>
        <PricingComponent />
      </LandingLayout>
    </>
  )
}
