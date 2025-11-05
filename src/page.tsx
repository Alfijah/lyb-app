import HeroSection from "./components/HeroSection";
import FeaturedSmoothies from "./components/FeaturedSmoothies";
import BenefitsSection from "./components/BenefitsSection";
import ReviewsSection from "./components/ReviewSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/Footer";

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSmoothies />
      <BenefitsSection />
      <ReviewsSection />
      <FooterSection />
    </>
  );
}

export default HomePage;
