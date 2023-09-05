import Head from 'next/head'
import { forwardRef } from 'react'
import VSCodeComponent from '@/components/vscode'
import LandingLayout from '@/layouts/landing'
import PageTransitions from "@/components/PageTransitions";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function VSCode(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <>
        <Head>
            <title>AI CodeBuddy | Heydev</title>
        </Head>
        <LandingLayout activeLink='products'>
          <PageTransitions ref={ref} {...props}>
              <VSCodeComponent />
          </PageTransitions>
        </LandingLayout>
    </>
  )
}

export default forwardRef(VSCode)