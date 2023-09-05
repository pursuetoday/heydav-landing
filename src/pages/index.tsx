import Head from "next/head";
import { forwardRef } from 'react'
import LandingLayout from "@/layouts/landing";
import HomeComponent from "@/components/home";
import PageTransitions from "@/components/PageTransitions";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function Home(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <>
      <Head>
        <title>Home | Heydev</title>
      </Head>
      <LandingLayout activeLink="home">
        <PageTransitions ref={ref} {...props}>
          <HomeComponent />
        </PageTransitions>
      </LandingLayout>
    </>
  )
}

export default forwardRef(Home);
