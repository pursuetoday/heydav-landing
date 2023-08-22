import Head from "next/head";
import LandingLayout from "@/layouts/landing";
import HomeComponent from "@/components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Heydev</title>
      </Head>
      <LandingLayout activeLink="home">
        <HomeComponent />
      </LandingLayout>
    </>
  )
}
