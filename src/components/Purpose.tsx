"use client";
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
            className="relative z-20 max-w-screen-3xl bg-gradient-to-b from-bioGreen/40 via-bioGreen/10 to-white mx-auto -mt-10 pb-14 md:py-16 px-6 md:px-8 lg:px-12 text-center overflow-hidden">

            {/* Wave Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 120"
                    className="relative block w-full h-[60px] md:h-[90px]"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L0,0Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>

            {/* Titel */}
            <SectionWrapper className="mb-4">
                <motion.h1 variants={fadeInUp} className="max-w-screen-lg mx-auto text-md text-tealBrand mb-4 lg:pb-6 pt-28 sm:pt-28 md:pt-16 xl:pt-24">
                    Meer dan een smoothie – <span className="exceptionTextExtra text-9xl font-bold">een bewuste keuze</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="max-w-screen-lg mx-auto body-text pb-4 sm:px-8 md:px-10 lg:px-28">
                    Onze smoothies en juices helpen je energie op peil te houden, je weerstand te ondersteunen en bewuster te leven. Geen tijdelijke hype, maar een <span className="exceptionText font-bold">duurzame gewoonte</span> die bij jouw levensstijl past.
                </motion.p>
            </SectionWrapper>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                <SectionWrapper>
                    <video autoPlay
                        muted
                        loop
                        playsInline className="w-full h-auto rounded-xl">
                        <source src={green} type="video/mp4" />
                    </video>
                    <div className="text-left">
                        <motion.p
                            variants={fadeInLeft}
                            className="categoryText italic">Detox & Balans</motion.p>
                        <motion.p
                            variants={fadeInLeft}
                            className="body-text">Onze vers bereide smoothies ondersteunen een natuurlijke balans door rijke antioxidanten en voedzame ingrediënten die je lichaam helpen fris, licht en in evenwicht te blijven.
                        </motion.p>
                    </div>
                </SectionWrapper>

                <SectionWrapper>
                    <video autoPlay
                        muted
                        loop
                        playsInline className="w-full h-auto rounded-xl">
                        <source src={avocado} type="video/mp4" />
                    </video>
                    <div className="text-left">
                        <motion.p
                            variants={fadeInLeft}
                            className="categoryText italic">Voedzaam & verzadigend</motion.p>
                        <motion.p
                            variants={fadeInLeft}
                            className="body-text">Vezelrijke en natuurlijke voedingsstoffen helpen je langer verzadigd te blijven en ondersteunen een stabiel energieniveau en passen binnen een bewuste.
                        </motion.p>
                    </div>
                </SectionWrapper>

                <SectionWrapper>
                    <video autoPlay
                        muted
                        loop
                        playsInline className="w-full h-auto rounded-xl">
                        <source src={energy} type="video/mp4" />
                    </video>
                    <div className="text-left">
                        <motion.p
                            variants={fadeInLeft}
                            className="categoryText italic">Dagelijkse Energie</motion.p>
                        <motion.p
                            variants={fadeInLeft}
                            className="body-text">Natuurlijke suikers, vitamines en mineralen ondersteunen een stabiel energieniveau gedurende de dag. 
                        </motion.p>
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
