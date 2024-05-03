import FeaturedListings from "@/components/FeaturedListings";
import FeaturedLocation from "@/components/FeaturedLocation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImportantArticles from "@/components/ImportantArticles";
import Performance from "@/components/Performance";
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
        <FeaturedListings />
        <Performance />
        <FeaturedLocation />
        <ImportantArticles />
        <Footer />
      </main>
    </>
  );
}
