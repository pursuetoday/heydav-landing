import Head from 'next/head'
import { forwardRef } from 'react'
import LandingLayout from '@/layouts/landing'
import PrivacyComponent from '@/components/privacy-policy/PrivacyComponent'
import PageTransitions from "@/components/PageTransitions";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


function PrivacyPolicy(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <>
      <Head>
        <title>Privacy Policy | Heydev</title>
      </Head>
      <LandingLayout activeLink='privacy'>
        <PageTransitions ref={ref} {...props}>
          <PrivacyComponent />
        </PageTransitions>
      </LandingLayout>
    </>
  )
}

export default forwardRef(PrivacyPolicy);
