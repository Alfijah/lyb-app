import HeroSection from "./components/HeroSection";
import FeaturedSmoothies from "./components/FeaturedSmoothies";
import BenefitsSection from "./components/BenefitsSection";
import ReviewsSection from "./components/ReviewSection";
import BottlesSection from "./components/BottlesSection";
import SellingSection from "./components/SellingSection";
import Aanbod from "./components/Aanbod";
import RockOil from "./components/RockOil";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSmoothies />
      <BenefitsSection />
      <Aanbod />
      <BottlesSection />
      <SellingSection />
      <RockOil />
      <ReviewsSection />
    </>
  );
}
