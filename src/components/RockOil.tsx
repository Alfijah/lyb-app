import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import sapmix from "../assets/contactSection/contactSectionBg.webp";
import SectionWrapper from "../animations/SectionWrapper";

export default function RockOil() {
    return (
        <section
            id="rock-oil" // GEWIJZIGD: Was "benefits", unieke ID is essentieel voor SEO en navigatie.
            className="max-w-screen-3xl relative z-20 w-full bg-gradient-to-b from-white via-orange-50 to-orange-300 pt-2 flex flex-col"
        >
            {/* Tekst Sectie */}
            <SectionWrapper className="w-full max-w-screen-lg mx-auto px-6 md:px-12 lg:px-12 xl:px-0 pt-6">
                <motion.h2 
                    variants={fadeInUp} 
                    className="max-w-screen-lg mx-auto text-md mb-4 lg:pb-6"
                >
                    Wekelijks vers geleverd bij Rock Oil
                </motion.h2>
                <motion.p 
                    variants={fadeInUp} 
                    className="max-w-screen-lg mx-auto body-text"
                >
                    <span className="exceptionText font-semibold">Elke week</span> leveren wij verse smoothies en juices bij Rock Oil aan de <b><i>Johannes Mungrastraat</i></b>. Zo ben je verzekerd van kwaliteit, versheid en een vast moment waarop je jouw favoriete LYB-drinks kunt vinden.
                </motion.p>
            </SectionWrapper>

            {/* Afbeelding Sectie - Geoptimaliseerd voor uitlijning en SEO */}
            <SectionWrapper className="relative w-full lg:h-[500px] pt-8 flex justify-end z-10">
                <motion.img
                    variants={fadeInUp}
                    src={sapmix}
                    alt="Verse LYB juices en smoothies verkrijgbaar bij Rock Oil Johannes Mungrastraat Paramaribo"
                    loading="lazy"
                    className="w-full h-auto object-cover lg:object-bottom select-none" 
                />
            </SectionWrapper>
        </section>
    );
}