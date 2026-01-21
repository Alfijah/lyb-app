import HeroSection from "./components/HeroSection";
import FeaturedSmoothies from "./components/FeaturedSmoothies";
import BenefitsSection from "./components/BenefitsSection";
import ReviewsSection from "./components/ReviewSection";
import BottlesSection from "./components/BottlesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSmoothies />
      <BenefitsSection />
      <BottlesSection />
      <ReviewsSection />
    </>
  );
}
