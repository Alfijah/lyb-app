import { Helmet } from "react-helmet-async";
import HeroSection from "./components/HeroSection";
import FeaturedSmoothies from "./components/FeaturedSmoothies";
import BenefitsSection from "./components/BenefitsSection";
import ReviewsSection from "./components/ReviewSection";
import SellingSection from "./components/SellingSection";
import Aanbod from "./components/Aanbod";
import RockOil from "./components/RockOil";
import Purpose from "./components/Purpose";
import FaqTeaser from "./components/FaqTeaser";
import Process from "./components/Process";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthFoodStore", // Specifieker dan LocalBusiness
    "additionalType": "http://www.productontology.org/id/Smoothie",
    "name": "LYB Juices & Smoothies",
    "alternateName": "Love Your Body Suriname",
    "url": "https://drinklyb.com/",
    "logo": "https://drinklyb.com/logo.png",
    "image": "https://drinklyb.com/hero-image.jpg",
    "description": "De nummer 1 plek voor 100% natuurlijke juices, smoothies en detox kuren in Paramaribo, Suriname.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tawajarieweg", // Voeg het exacte adres toe als je dat hebt
      "addressLocality": "Lelydorp",
      "addressCountry": "SR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "5.68", // Zoek de exacte coördinaten van je locatie op Google Maps
      "longitude": "55.23"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday", "Friday"],
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/lybjuicesandsmoothies/",
      "https://www.facebook.com/lybjuicesandsmoothies/"
    ],
    "priceRange": "$$",
    "telephone": "+5978531071",
    "hasMenu": "https://drinklyb.com/menu"
  };

  return (
    <>
      <Helmet>
        <title>LYB Juices & Smoothies | Smoothies & Verse Juices in Suriname</title>
        <meta
          name="description"
          content="Bestel gezonde smoothies, verse juices en detox sappenkuur in Paramaribo. Vers bereid met natuurlijke ingrediënten voor energie en balans." />
        <link rel="canonical" href="https://drinklyb.com/" />

        {/* OpenGraph */}
        <meta property="og:title" content="LYB Juices & Smoothies" />
        <meta
          property="og:description"
          content="Verse smoothies en detox juices in Paramaribo."
        />
        <meta property="og:image" content="https://drinklyb.com/lyb-smoothies.jpg" />
        <meta property="og:url" content="https://drinklyb.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LYB Juices & Smoothies" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

      </Helmet>
      <HeroSection />
      <Process />
      <FeaturedSmoothies />
      <BenefitsSection />
      <Purpose />
      <Aanbod />
      <SellingSection />
      <FaqTeaser />
      <RockOil />
      <ReviewsSection />
    </>
  );
}
