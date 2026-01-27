"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import small from "../assets/bottles/small.png";
import medium from "../assets/bottles/medium.png";
import large from "../assets/bottles/large.png";
import splashfruit from "../assets/bottles/splashfruit.png";
import wave from "../assets/sellingSection/wave.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function BottlesSection() {
    const benefits = [
        {
            id: 1,
            icon: (
                <img src={small} alt="small" className="" />
            ),
            size: "125 ml",
            price: "sets v.a. SRD 500",
        },
        {
            id: 2,
            icon: (
                <img src={medium} alt="medium" />
            ),
            size: "350 ml",
            price: "v.a.  SRD 100",
        },
        {
            id: 3,
            icon: (
                <img src={large} alt="large" />
            ),
            size: "1000 ml",
            price: "v.a. SRD 230",
        },
    ];

    return (
        <section
            id="benefits">

            <SectionWrapper className="w-full">
                <motion.img
                    variants={fadeInUp}
                    src={splashfruit}
                    alt="fruit splash"
                    className="w-full -mt-8 h-auto object-cover lg:object-center" />
            </SectionWrapper>

            <SectionWrapper className="max-w-screen-3xl mx-auto pb-3 md:pb-16 -mt-6 px-6 md:px-12 text-center">
                {/* Grid met voordelen */}
                <motion.div variants={fadeInUp} className="mx-auto grid grid-cols-3 gap-3 lg:w-[60%]">
                    {benefits.map((benefit) => (
                        <motion.div
                            key={benefit.id}
                            variants={fadeInUp}
                            className="relative z-66 flex flex-col items-center justify-start transition-all">
                            {benefit.icon}
                            <motion.p variants={fadeInUp} className="body-text">
                                {benefit.size}
                            </motion.p>
                            <motion.p variants={fadeInUp} className="body-text">
                                {benefit.price}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </SectionWrapper>

            <img
                src={wave}
                alt="fruit splash"
                className="w-full -mt-8 h-auto object-cover lg:object-center" />
        </section>
    );
}
