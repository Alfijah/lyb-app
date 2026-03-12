"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import sapmix from "../assets/contactSection/contactSectionBg.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function RockOil() {
    return (
        <section
            id="benefits"
            className="relative z-20 w-full bg-gradient-to-b from-white via-orange-50 to-orange-300 pt-10 flex flex-col">

            <SectionWrapper className="w-full px-6 md:px-8 pt-6 text-center">
                <motion.h2 variants={fadeInUp} className="max-w-screen-lg mx-auto text-center text-md mb-4 lg:pb-6">
                    Wekelijks vers geleverd bij Rock Oil
                </motion.h2>
                <motion.p variants={fadeInUp} className="max-w-screen-lg mx-auto body-text">
                    <span className="exceptionText font-semibold">Elke week</span> leveren wij verse smoothies en juices bij Rock Oil aan de <b><i>Johannes Mungrastraat</i></b>. Zo ben je verzekerd van kwaliteit, versheid en een vast moment waarop je jouw favoriete LYB-drinks kunt vinden.
                </motion.p>
            </SectionWrapper>

            <SectionWrapper className="relative w-full pt-8 flex justify-end z-10">
                <motion.img
                    variants={fadeInUp}
                    src={sapmix}
                    alt="LYB verse juices bij RockOil"
                    loading="lazy"
                    className="w-full h-auto lg:w-[70%] right-0 object-cover" />
            </SectionWrapper>
        </section>
    );
}
