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

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LYB Juices & Smoothies",
    url: "https://drinklyb.com/",
    image: "https://drinklyb.com/lyb-smoothies.jpg",
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
      "https://www.instagram.com/lybjuicesandsmoothies/",
      "https://www.facebook.com/lybjuicesandsmoothies/"
    ],
    hasMenu: "https://drinklyb.com/menu",
    priceRange: "$$"
  };

  // const faqStructuredData = {
  //   "@context": "https://schema.org",
  //   "@type": "FAQPage",
  //   mainEntity: faqItems.map((faq) => ({
  //     "@type": "Question",
  //     name: faq.question,
  //     acceptedAnswer: {
  //       "@type": "Answer",
  //       text: faq.answer,
  //     },
  //   })),
  // };

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

        {/* <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script> */}
      </Helmet>
      <HeroSection />
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
