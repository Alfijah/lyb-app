"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import small from "../assets/bottles/small.png";
import medium from "../assets/bottles/medium.png";
import large from "../assets/bottles/large.png";
import splashfruit from "../assets/bottles/fruit.png";
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
            id="benefits" className=" overflow-x-hidden">

            <SectionWrapper className="scale-105 mb-12 py-2">
                <motion.img
                    variants={fadeInUp}
                    src={splashfruit}
                    alt="fruit splash"
                    className="relative h-auto" />
            </SectionWrapper>

            <motion.h1 variants={fadeInUp} className="max-w-screen-lg mx-auto text-md text-tealBrand mb-4 lg:pb-6 px-6 text-center">
                Flessen in verschillende formaten
            </motion.h1>
            <div className="max-w-screen-lg text-center body-text mb-4 px-6 sm:px-8 md:px-10 lg:px-28">
                <motion.p variants={fadeInUp}>
                    Onze juices en smoothies worden gemaakt van pure ingrediënten die jouw lichaam ondersteunen. <span className="exceptionText font-semibold">Geen kunstmatige</span> toevoegingen; alleen wat goed is voor jou.
                </motion.p>
                <motion.p variants={fadeInUp} className="pt-3">
                    125 ml ↝ Krachtige shots
                </motion.p>
                <motion.p variants={fadeInUp} className="">
                    350 ml ↝ Perfect voor smoothies & juices
                </motion.p>
                <motion.p variants={fadeInUp} className="">
                    1000 ml ↝ Vitaminewater of om te delen
                </motion.p>
            </div>

            <SectionWrapper className="max-w-screen-3xl mx-auto pb-3 md:pb-16 px-6 md:px-12 text-center">
                {/* Grid met voordelen */}
                <div className="mx-auto grid grid-cols-3 gap-3 lg:w-[60%]">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="relative z-66 flex flex-col items-center justify-start transition-all">
                            <motion.div variants={fadeInUp}
                            >{benefit.icon}</motion.div>
                            <motion.p variants={fadeInUp} className="body-text font-semibold italic">
                                {benefit.size}
                            </motion.p>
                            <motion.p variants={fadeInUp} className="body-text">
                                {benefit.price}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <img
                src={wave}
                alt="fruit splash"
                className="w-full -mt-8 h-auto object-cover lg:object-center" />
        </section>
    );
}
