import Head from 'next/head'
import { forwardRef } from 'react'
import LandingLayout from '@/layouts/landing'
import TermsComponent from '@/components/terms-conditions/TermsComponent'
import PageTransitions from "@/components/PageTransitions";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


function TermsAndConditions(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Heydev</title>
      </Head>
      <LandingLayout activeLink='terms'>
        <PageTransitions ref={ref} {...props}>
          <TermsComponent />
        </PageTransitions>
      </LandingLayout>
    </>
  )
}

export default forwardRef(TermsAndConditions);
