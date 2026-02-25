"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import sapmix from "../assets/sellingSection/sapmix.png";
import fruitmix from "../assets/sellingSection/fruitMix2.png";
import fruitBg from "../assets/fluidButton.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function SellingSection() {
    return (
        <section
            id="benefits"
            className="relative z-10 w-full bg-gradient-to-b from-white via-orange-50 to-orange-300 flex flex-col">

            <SectionWrapper className="w-full px-6 md:px-8 pt-14 text-center">
                <motion.h1 variants={fadeInUp} className="max-w-screen-lg mx-auto text-center text-md text-tealBrand mb-4 lg:pb-6">
                    Vandaag besteld? Bezorging in overleg geregeld
                </motion.h1>
                <motion.p variants={fadeInUp} className="max-w-screen-lg mx-auto body-text">
                    Te druk vandaag? Wij bezorgen jouw favoriete juices thuis of op kantoor.
                </motion.p>
                <motion.p variants={fadeInUp} className="body-text pt-4">
                    Steeds <span className="exceptionText font-semibold">meer bedrijven</span> kiezen voor LYB als gezonde energieboost op de werkvloer.
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="w-full px-6 pb-6">
                    <a
                        style={{ backgroundImage: `url(${fruitBg})` }}
                        className="body w-full lg:w-60 mt-2 inline-block bg-cover bg-center text-white py-3 rounded-full shadow-md hover:shadow-md hover:text-white hover:bg-darkYellow transition-colors duration-300 text-xs uppercase tracking-widest"
                        href="https://wa.me/5978531071"
                        target="_blank"
                        rel="noopener noreferrer">
                        Bestel deze smoothie
                    </a>
                </motion.div>
            </SectionWrapper>

            <SectionWrapper className="relative w-full flex justify-end z-30">
                <motion.img
                    variants={fadeInUp}
                    src={sapmix}
                    alt="fruit splash"
                    className="w-[90%] lg:w-[70%] right-0 object-cover z-10" />

                <motion.img
                    variants={fadeInUp}
                    src={fruitmix}
                    alt="fruit splash"
                    className="absolute w-[55%] -bottom-6 lg:bottom-10 left-0 h-auto z-30" />
            </SectionWrapper>
        </section>
    );
}
