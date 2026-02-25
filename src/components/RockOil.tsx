"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import sapmix from "../assets/contactSection/contactSectionBg.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function RockOil() {
    return (
        <section
            id="benefits"
            className="relative z-20 w-full bg-gradient-to-b from-white via-orange-50 to-orange-300 pt-6 flex flex-col">

            {/* Wave Top */}
            <div className="absolute -top-6 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 120"
                    className="relative block w-full h-[50px] md:h-[90px] rotate-180"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L0,0Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>

            <SectionWrapper className="w-full px-6 md:px-8 pt-12 text-center">
                <motion.h1 variants={fadeInUp} className="max-w-screen-lg mx-auto text-center text-md text-tealBrand mb-4 lg:pb-6">
                    Elke week vers geleverd bij Rock Oil
                </motion.h1>
                <motion.p variants={fadeInUp} className="max-w-screen-lg mx-auto body-text">
                    <span className="exceptionText font-semibold">Elke week</span> leveren wij verse smoothies en juices bij Rock Oil aan de <b><i>Johannes Mungrastraat</i></b>. Zo ben je verzekerd van kwaliteit, versheid en een vast moment waarop je jouw favoriete LYB-drinks kunt vinden.
                </motion.p>
            </SectionWrapper>

            <SectionWrapper className="relative w-full pt-8 flex justify-end z-10">
                <motion.img
                    variants={fadeInUp}
                    src={sapmix}
                    alt="fruit splash"
                    className="w-full h-auto lg:w-[70%] right-0 object-cover" />

                {/* <motion.img
                    variants={fadeInUp}
                    src={fruitmix}
                    alt="fruit splash"
                    className="absolute w-[75%] -bottom-6 lg:bottom-10 left-0 h-auto z-20" /> */}
            </SectionWrapper>
        </section>
    );
}
