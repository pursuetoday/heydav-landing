import Head from 'next/head'
import { forwardRef } from 'react'
import LandingLayout from '@/layouts/landing'
import GitHubComponent from '@/components/github'
import PageTransitions from "@/components/PageTransitions";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function GitHub(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <>
        <Head>
            <title>AI QualityGuard | Heydev</title>
        </Head>
        <LandingLayout activeLink='products'>
          <PageTransitions ref={ref} {...props}>
            <GitHubComponent />
          </PageTransitions>
        </LandingLayout>
    </>
  )
}

export default forwardRef(GitHub)