import Head from 'next/head'
import { forwardRef } from 'react'
import LandingLayout from '@/layouts/landing'
import PricingComponent from '@/components/pricing'
import PageTransitions from "@/components/PageTransitions";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function Pricing(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <>
      <Head>
        <title>Pricing | Heydev</title>
      </Head>
      <LandingLayout activeLink='pricing'>
        <PageTransitions ref={ref} {...props}>
          <PricingComponent />
        </PageTransitions>
      </LandingLayout>
    </>
  )
}

export default forwardRef(Pricing)