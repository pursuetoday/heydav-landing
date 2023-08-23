import Head from "next/head";
import LandingLayout from "@/layouts/landing";
import BlogComponent from "@/components/blogs";

export default function BlogPosts() {
  return (
    <>
      <Head>
        <title>Blogs | Heydev</title>
      </Head>
      <LandingLayout activeLink='blogs'>
        <BlogComponent />
      </LandingLayout>
    </>
  );
}
