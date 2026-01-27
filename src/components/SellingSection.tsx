"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import { Link } from "react-router-dom";
import sapmix from "../assets/sellingSection/sapmix.png";
import fruitmix from "../assets/sellingSection/mixfruit.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function SellingSection() {
    return (
        <section
            id="benefits"
            className="w-full bg-gradient-to-b from-white via-orange-50 to-orange-300 flex flex-col">

            <SectionWrapper className="w-full px-6 md:px-8 pt-14 text-center">
                <motion.h1 variants={fadeInUp} className="max-w-screen-lg mx-auto text-center text-md text-tealBrand mb-4 lg:pb-6">
                    Gezond genieten, thuis en op de werkvloer
                </motion.h1>
                <motion.p variants={fadeInUp} className="max-w-screen-lg mx-auto body-text">
                    Onze verse smoothies worden geleverd aan particulieren én bedrijven.
                    Voor thuis, onderweg of op kantoor — zodat gezond leven moeiteloos onderdeel wordt van je dag.
                </motion.p>
                <motion.p variants={fadeInUp} className="body-text pt-4">
                    Steeds meer bedrijven kiezen voor LYB om vitaliteit, focus en energie te stimuleren op de werkvloer.
                </motion.p>

                <motion.a
                    href="#menu"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="button-text w-full lg:w-60 inline-block bg-bioGreen text-white px-8 py-3 rounded-full hover:text-white hover:bg-darkYellow transition-colors duration-300 text-xs mt-4 mb-4">
                    <Link to="/menu">
                        Bekijk ons menu
                    </Link>
                </motion.a>
            </SectionWrapper>

            <SectionWrapper className="relative w-full flex justify-end">
                <motion.img
                    variants={fadeInUp}
                    src={sapmix}
                    alt="fruit splash"
                    className="w-[90%] lg:w-[70%] right-0 object-cover" />

                <motion.img
                    variants={fadeInUp}
                    src={fruitmix}
                    alt="fruit splash"
                    className="absolute w-[45%] bottom-0 lg:bottom-10 left-0 h-auto" />
            </SectionWrapper>
        </section>
    );
}
