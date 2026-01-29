import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import about1 from "../assets/about/IMG-20240627-WA0003.jpg";
import about2 from "../assets/about/IMG-20240627-WA0001.jpg";
import LiquidImage from "../components/tools/LiquidImage";
import melon1 from "../assets/about/watermelon.png";
import melon2 from "../assets/about/watermeloncombo.png";
import juice1 from "../assets/about/juice1.png";
import juice2 from "../assets/about/juice2.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full h-full flex flex-col items-center pt-28 md:pt-36 bg-gradient-to-b from-white via-green-100 to-orange-100 px-6 md:px-8">
      <div className="relative w-full mb-4 flex flex-col pb-14">
        <h1 className="w-full pt-4 pb-2 text-center">Over ons</h1>

        <SectionWrapper className="flex flex-col lg:flex-row lg:px-12 lg:items-center">
          <motion.p variants={fadeInUp} className="w-[92%] lg:w-[82%] mx-auto h-auto z-20 body-text py-12">Love Your Body maakt verse sappen en smoothies van fruit, groenten en kruiden die met zorg zijn gekozen.
            <br /><br />We combineren lokale ingrediënten met bijzondere smaken van verder weg, altijd met aandacht voor kwaliteit en smaak.</motion.p>

          <motion.div variants={fadeInUp} className="relative w-full flex flex-row">
            <div className="absolute z-20 w-[90%] left-1/2 -translate-x-1/2 flex flex-row justify-between items-center bottom-0">
              <img
                src={melon2}
                className="w-[30%] h-auto" />
              <img
                src={melon1}
                className="-mt-10 w-[40%] h-auto" />
            </div>

            <LiquidImage src={about1} alt="Over ons" className="relative z-10 w-[90%] max-w-md mx-auto" />
          </motion.div>
        </SectionWrapper>

        <SectionWrapper className="flex flex-col lg:flex-row-reverse lg:px-12 lg:items-center">
          <motion.p variants={fadeInUp} className="w-[92%] lg:w-[82%] mx-auto h-auto z-20 body-text py-12">Onze smoothies zijn bedoeld om je dagelijks te ondersteunen — of dat nu thuis is, onderweg of op het werk.
            <br /><br />Geen beloftes, geen hypes, maar gewoon goede ingrediënten in een fles.
            Met oog voor duurzaamheid en smaak maken we gezond kiezen makkelijker, elke dag opnieuw.</motion.p>

          <motion.div variants={fadeInUp} className="relative w-full flex flex-row">
            <div className="absolute z-20 w-[90%] left-1/2 -translate-x-1/2 flex flex-row justify-between items-center bottom-0">
              <img
                src={juice2}
                className="-mt-10 w-[42%] h-auto" />
              <img
                src={juice1}
                className="-mt-10 w-[40%] h-auto" />
            </div>

            <LiquidImage src={about2} alt="Over ons" className="relative z-10 w-[90%] max-w-md mx-auto" />
          </motion.div>
        </SectionWrapper>
      </div>
    </section>
  );
}
