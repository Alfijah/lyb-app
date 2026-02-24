"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import { Link } from "react-router-dom";
import sapmix from "../assets/sellingSection/sapmix.png";
import fruitmix from "../assets/sellingSection/fruitMix.png";
import fruitBg from "../assets/fluidButton.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function SellingSection() {
    return (
        <section
            id="benefits"
            className="w-full bg-gradient-to-b from-white via-orange-50 to-orange-300 flex flex-col">

            <SectionWrapper className="w-full px-6 md:px-8 pt-14 text-center">
                <motion.h1 variants={fadeInUp} className="max-w-screen-lg mx-auto text-center text-md text-tealBrand mb-4 lg:pb-6">
                    Vandaag besteld? Snel geleverd in Paramaribo.
                </motion.h1>
                <motion.p variants={fadeInUp} className="max-w-screen-lg mx-auto body-text">
                    Geen tijd om gezond te eten? Wij bezorgen jouw favoriete juices thuis of op kantoor.
                </motion.p>
                <motion.p variants={fadeInUp} className="body-text pt-4">
                    Steeds meer bedrijven kiezen voor LYB als gezonde energieboost op de werkvloer.
                </motion.p>

                <motion.a
                    href="#menu"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ backgroundImage: `url(${fruitBg})` }}
                    className="button-text w-full lg:w-1/3 inline-block bg-center bg-cover text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:text-white hover:bg-darkYellow transition-colors duration-300 text-xs uppercase tracking-widest mt-4 mb-4">
                    <Link to="/menu">
                        Bestel nu
                    </Link>
                </motion.a>
            </SectionWrapper>

            <SectionWrapper className="relative w-full flex justify-end z-10">
                <motion.img
                    variants={fadeInUp}
                    src={sapmix}
                    alt="fruit splash"
                    className="w-[90%] lg:w-[70%] right-0 object-cover" />

                <motion.img
                    variants={fadeInUp}
                    src={fruitmix}
                    alt="fruit splash"
                    className="absolute w-[75%] -bottom-6 lg:bottom-10 left-0 h-auto z-20" />
            </SectionWrapper>
        </section>
    );
}
