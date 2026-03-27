import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "../animations/Varianten";
import green from "../assets/purpose/green.mp4";
import avocado from "../assets/purpose/avocado.mp4";
import energy from "../assets/purpose/energy.mp4";
import SectionWrapper from "../animations/SectionWrapper";

export default function Purpose() {
    return (
        <section
            id="aanbod"
            className="relative z-20 max-w-screen-3xl bg-bgColor mx-auto pb-4 py-10 sm:py-0 md:py-16 px-6 sm:px-20 md:px-12 lg:px-12 text-center overflow-hidden"
        >
            {/* Wave Top - Verborgen voor screenreaders */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
                <svg
                    viewBox="0 0 1440 120"
                    className="relative block w-full h-[60px] md:h-[90px]"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L0,0Z"
                        className="fill-stone-50"
                    ></path>
                </svg>
            </div>

            {/* Titel & SEO Context */}
            <SectionWrapper className="mb-4 text-left">
                <motion.h2 
                    variants={fadeInUp} 
                    className="max-w-screen-lg mx-auto text-md mb-4 lg:pb-6 pt-16 sm:pt-28 md:pt-16 xl:pt-24"
                >
                    Een <span className="text-darkYellow">bewuste keuze</span> voor een gezonder lichaam
                </motion.h2>
                <motion.p 
                    variants={fadeInUp} 
                    className="max-w-screen-lg mx-auto body-text pb-4"
                >
                    Onze smoothies en juices helpen je energie op peil te houden, je weerstand te ondersteunen en bewuster te leven. Geen tijdelijke hype, maar een <span className="exceptionText font-bold">duurzame gewoonte</span> die bij jouw levensstijl past.
                </motion.p>
            </SectionWrapper>

            {/* Video Grid - Semantisch opgebouwd */}
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 xl:px-10 2xl:px-16 mt-8">
                {/* Item 1: Detox & Balans */}
                <SectionWrapper className="flex flex-col md:flex-row lg:flex-col md:gap-8 lg:gap-0 h-full">
                    <video 
                        autoPlay
                        muted
                        loop
                        playsInline 
                        preload="metadata" // Optimaliseert laadtijd
                        className="w-full md:w-[50%] lg:w-full h-auto rounded-xl shadow-sm object-cover aspect-video"
                        aria-label="Video van verse groene detox smoothies"
                    >
                        <source src={green} type="video/mp4" />
                        Jouw browser ondersteunt geen video tags.
                    </video>
                    <div className="text-left flex-1 flex flex-col pt-4">
                        <motion.h3
                            variants={fadeInLeft}
                            className="categoryText italic"
                        >
                            Detox & Balans
                        </motion.h3>
                        <motion.p
                            variants={fadeInLeft}
                            className="body-text mt-2"
                        >
                            Onze vers bereide smoothies ondersteunen een natuurlijke balans door rijke antioxidanten en voedzame ingrediënten die je lichaam helpen fris, licht en in evenwicht te blijven.
                        </motion.p>
                    </div>
                </SectionWrapper>

                {/* Item 2: Voedzaam & Verzadigend */}
                <SectionWrapper className="flex flex-col md:flex-row lg:flex-col md:gap-8 lg:gap-0 h-full">
                    <video 
                        autoPlay
                        muted
                        loop
                        playsInline 
                        preload="metadata"
                        className="w-full md:w-[50%] lg:w-full h-auto rounded-xl shadow-sm object-cover aspect-video"
                        aria-label="Video van ingrediënten voor voedzame smoothies"
                    >
                        <source src={avocado} type="video/mp4" />
                    </video>
                    <div className="text-left flex-1 flex flex-col pt-4">
                        <motion.h3
                            variants={fadeInLeft}
                            className="categoryText italic font-semibold text-lg"
                        >
                            Voedzaam & verzadigend
                        </motion.h3>
                        <motion.p
                            variants={fadeInLeft}
                            className="body-text mt-2"
                        >
                            Vezelrijke en natuurlijke voedingsstoffen helpen je langer verzadigd te blijven en ondersteunen een stabiel energieniveau binnen een bewuste levensstijl.
                        </motion.p>
                    </div>
                </SectionWrapper>

                {/* Item 3: Dagelijkse Energie */}
                <SectionWrapper className="flex flex-col md:flex-row lg:flex-col md:gap-8 lg:gap-0 h-full">
                    <video 
                        autoPlay
                        muted
                        loop
                        playsInline 
                        preload="metadata"
                        className="w-full md:w-[50%] lg:w-full h-auto rounded-xl shadow-sm object-cover aspect-video"
                        aria-label="Video van energiegevende natuurlijke sappen"
                    >
                        <source src={energy} type="video/mp4" />
                    </video>
                    <div className="text-left flex-1 flex flex-col pt-4">
                        <motion.h3
                            variants={fadeInLeft}
                            className="categoryText italic font-semibold text-lg"
                        >
                            Dagelijkse Energie
                        </motion.h3>
                        <motion.p
                            variants={fadeInLeft}
                            className="body-text mt-2"
                        >
                            Natuurlijke suikers, vitamines en mineralen ondersteunen een stabiel energieniveau gedurende de dag, zonder kunstmatige toevoegingen.
                        </motion.p>
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}