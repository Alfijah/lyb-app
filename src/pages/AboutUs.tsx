import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import about1 from "../assets/about/chef.png";
import about2 from "../assets/about/IMG-20240627-WA0001.jpg";
import blender from "../assets/about/blender.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full h-full flex flex-col items-center pt-28 md:pt-36 bg-neutral-50">
      <div className="relative w-full mb-4 flex flex-col pb-10">
        <img
          src={blender}
          loading="lazy"
          alt="roze romige smoothie"
          className="relative inset-0 h-[200px] sm:h-[250px] w-full object-cover" />

        <SectionWrapper className="flex flex-col lg:flex-row gap-4 pt-10 px-6 md:px-8 lg:px-12 lg:items-center">
          <motion.h2 className="w-full pt-4">Over ons</motion.h2>

          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <motion.p variants={fadeInUp} className="z-20 body-text">Love Your Body maakt verse sappen en smoothies van fruit, groenten en kruiden die met zorg zijn gekozen.
              <br /><br />We combineren lokale ingrediënten met bijzondere smaken van verder weg, altijd met aandacht voor kwaliteit en smaak.
              <br /><br />Geen beloftes, geen hypes, maar gewoon goede ingrediënten in een fles.
              Met oog voor duurzaamheid en smaak maken we gezond kiezen makkelijker, elke dag opnieuw.</motion.p>

            <motion.img
              src={about1}
              loading="lazy"
              className="w-[80%] h-auto rounded-xl" />
          </div>

          <motion.img
            src={about2}
            loading="lazy"
            className="w-[100%] h-auto rounded-xl" />
        </SectionWrapper>
      </div>
    </section>
  );
}
