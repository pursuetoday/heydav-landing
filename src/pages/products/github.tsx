import Head from 'next/head'
import LandingLayout from '@/layouts/landing'
import GitHubComponent from '@/components/github'

export default function GitHub() {
  return (
    <>
        <Head>
            <title>GitHub Integration | Heydev</title>
        </Head>
        <LandingLayout activeLink='products'>
            <GitHubComponent />
        </LandingLayout>
    </>
  )
}
