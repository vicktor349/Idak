import HeroSection from "@/components/HeroSection";
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
      </main>
    </>
  );
}
