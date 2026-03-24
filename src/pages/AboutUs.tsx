import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import about1 from "../assets/about/chef.webp";
import about2 from "../assets/about/IMG-20240627-WA0001.webp";
import blender from "../assets/about/blender.webp";

export default function About() {
  return (
    <main 
      id="about" 
      className="relative w-full bg-neutral-50 overflow-x-hidden"
    >
      {/* 1. HERO IMAGE: Direct onder de navbar */}
      <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] overflow-hidden">
        <img
          src={blender}
          fetchPriority="high"
          alt="Verse roze romige smoothie van Love Your Body Suriname"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. CONTENT SECTIE */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-12 md:py-20">
        
        <SectionWrapper className="flex flex-col gap-12 lg:gap-20">
          
          {/* Titel met border onderaan zoals in origineel */}
          <div className="w-full">
            <motion.h1 
              variants={fadeInUp}
              className="text-center text-3xl md:text-4xl font-bold pb-6 border-b-2 border-gray-200"
            >
              Over ons
            </motion.h1>
          </div>

          {/* Eerste Rij: Tekst en Chef Image */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <motion.h2 
                variants={fadeInUp}
                className="body-text italic text-xl md:text-2xl font-bold leading-snug"
              >
                Gezonde smoothies en juices, elke dag vers geblend
              </motion.h2>
              
              <motion.div variants={fadeInUp} className="body-text space-y-4">
                <p>
                  Love Your Body maakt verse sappen en smoothies van fruit, groenten en kruiden die met zorg zijn gekozen.
                </p>
                <p>
                  We combineren lokale ingrediënten met bijzondere smaken van verder weg, altijd met aandacht voor kwaliteit en smaak.
                </p>
                <p className="font-medium text-bioGreen italic">
                  Geen beloftes, geen hypes, maar gewoon goede ingrediënten in een fles.
                </p>
                <p>
                  Met oog voor duurzaamheid en smaak maken we gezond kiezen makkelijker, elke dag opnieuw.
                </p>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeInUp} 
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            >
              <img
                src={about1}
                alt="Onze chef bereidt verse smoothies"
                className="w-[90%] sm:w-[70%] lg:w-full h-auto object-contain max-h-[500px]"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Tweede Rij: Sfeerbeeld / Team Image */}
          <motion.div 
            variants={fadeInUp}
            className="w-full lg:w-[70%] overflow-hidden"
          >
            <img
              src={about2}
              alt="Het team en de sfeer van Love Your Body"
              className="w-full h-auto object-cover max-h-[600px] rounded-2xl shadow-sm"
              loading="lazy"
            />
          </motion.div>

        </SectionWrapper>
      </div>
    </main>
  );
}