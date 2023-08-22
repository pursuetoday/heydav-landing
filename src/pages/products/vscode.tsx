import Head from 'next/head'
import VSCodeComponent from '@/components/vscode'
import LandingLayout from '@/layouts/landing'

export default function VSCode() {
  return (
    <>
        <Head>
            <title>VS Code Integration | Heydev</title>
        </Head>
        <LandingLayout activeLink='products'>
            <VSCodeComponent />
        </LandingLayout>
    </>
  )
}
