import HeroSection from "./components/HeroSection";
import FeaturedSmoothies from "./components/FeaturedSmoothies";
import BenefitsSection from "./components/BenefitsSection";
import ReviewsSection from "./components/ReviewSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSmoothies />
      <BenefitsSection />
      <ReviewsSection />
    </>
  );
}
