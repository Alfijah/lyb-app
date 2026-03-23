import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import sapmix from "../assets/sellingSection/sapmix.png";
import fruitBg from "../assets/fluidButton.png";
import SectionWrapper from "../animations/SectionWrapper";
import WipeButton from "./tools/Button";

export default function SellingSection() {
    return (
        <section
            id="bestellen" // GEWIJZIGD: Was "benefits", maar die ID bestond al. Unieke ID's zijn essentieel voor SEO en navigatie.
            className="relative z-10 w-full max-w-screen-lg mx-auto flex flex-col px-6 md:px-12 xl:px-0 py-14"
        >
            <div className="bg-bgColor shadow-sm rounded-xl overflow-hidden">
                <SectionWrapper className="w-full px-6 md:px-8 pt-14 text-center">
                    {/* SEO: H2 titel met focus op bezorging */}
                    <motion.h2 
                        variants={fadeInUp} 
                        className="max-w-screen-lg mx-auto text-center text-md mb-4 lg:pb-6"
                    >
                        Bezorging <span className="text-darkYellow">netjes</span> in overleg geregeld
                    </motion.h2>

                    <motion.p 
                        variants={fadeInUp} 
                        className="max-w-screen-lg mx-auto body-text">
                        Steeds <span className="exceptionText font-semibold">meer bedrijven</span> kiezen voor LYB als gezonde energieboost op de werkvloer.
                        Te druk vandaag? Wij bezorgen jouw favoriete juices thuis of op kantoor in Paramaribo en omgeving. 
                    </motion.p>

                    {/* Button: Verbeterde touch-target en uitlijning */}
                    <motion.div variants={fadeInUp} className="w-full flex justify-center px-6 pb-6 mt-4">
                        <WipeButton
                            href="https://wa.me/5978531071"
                            external
                            style={{ backgroundImage: `url(${fruitBg})` }}
                            className="body w-full sm:w-[80%] lg:w-64 bg-cover bg-center text-white"
                            aria-label="Bestel verse juices via WhatsApp"
                        >
                            Bestel vandaag nog
                        </WipeButton>
                    </motion.div>
                </SectionWrapper>

                {/* Afbeelding: Geoptimaliseerd voor uitlijning */}
                <SectionWrapper className="relative w-full flex justify-center">
                    <motion.img
                        variants={fadeInUp}
                        src={sapmix}
                        alt="Assortiment van verse juices en smoothies voor bezorging - Love Your Body"
                        loading="lazy"
                        className="w-full max-w-[500px] lg:max-w-[700px] h-auto object-contain" 
                    />
                </SectionWrapper>
            </div>
        </section>
    );
}