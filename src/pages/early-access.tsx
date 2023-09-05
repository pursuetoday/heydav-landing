import Head from 'next/head'
import LandingLayout from '@/layouts/landing'
import EarlyAccessComponent from '@/components/early-access'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Early Access | Heydev</title>
      </Head>
      <LandingLayout activeLink='early'>
        <EarlyAccessComponent />
      </LandingLayout>
    </>
  )
}
