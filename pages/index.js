import HeroSection from "@/components/HeroSection";
import TopCategories from "@/components/TopCategories";
import Head from "next/head";



export default function Home()
{
  return (
    <>
      <Head>
        <title>Idak | Home</title>
      </Head>
      <main>
        <HeroSection />
        <TopCategories />
      </main>
    </>
  );
}
