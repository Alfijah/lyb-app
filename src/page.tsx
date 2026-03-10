import { Helmet } from "react-helmet-async";
import HeroSection from "./components/HeroSection";
import FeaturedSmoothies from "./components/FeaturedSmoothies";
import BenefitsSection from "./components/BenefitsSection";
import ReviewsSection from "./components/ReviewSection";
// import BottlesSection from "./components/BottlesSection";
import SellingSection from "./components/SellingSection";
import Aanbod from "./components/Aanbod";
import RockOil from "./components/RockOil";
import Purpose from "./components/Purpose";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LYB Juices & Smoothies",
    url: "https://drinklyb.com",
    image: "https://drinklyb.com/hero.jpg",
    logo: "https://drinklyb.com/logo.png",
    description:
      "LYB Juices & Smoothies biedt verse juices, smoothies en detoxopties in Paramaribo, Suriname.",
    telephone: "+597-8531071",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paramaribo",
      addressCountry: "SR",
    },
    areaServed: {
      "@type": "Country",
      name: "Suriname",
    },
    sameAs: [
      "https://www.instagram.com/jouwaccount",
      "https://www.facebook.com/jouwaccount"
    ],
    hasMenu: "https://drinklyb.com/menu",
    priceRange: "$$"
  };

  return (
    <>
      <Helmet>
        <title>LYB Juices & Smoothies | Smoothies & Verse Juices in Suriname</title>
        <meta
          name="description"
          content="Bestel gezonde smoothies, verse juices en detox sappenkuur in Paramaribo. Vers bereid met natuurlijke ingrediënten voor energie en balans." />
        <link rel="canonical" href="https://drinklyb.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <HeroSection />
      <FeaturedSmoothies />
      <BenefitsSection />
      <Purpose />
      <Aanbod />
      {/* <BottlesSection /> */}
      <SellingSection />
      <RockOil />
      <ReviewsSection />
    </>
  );
}
