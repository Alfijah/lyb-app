import HeroSection from "./components/HeroSection";
import FeaturedSmoothies from "./components/FeaturedSmoothies";
import BenefitsSection from "./components/BenefitsSection";
import ReviewsSection from "./components/ReviewSection";
import ContactSection from "./components/ContactSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSmoothies />
      {/*<BenefitsSection />
        <ReviewsSection />
        <ContactSection /> */}
    </>
  );
}

export default HomePage;
