"use client";
import { motion } from "framer-motion";
import small from "../assets/bottles/small.png";
import medium from "../assets/bottles/medium.png";
import large from "../assets/bottles/large.png";
import splashfruit from "../assets/bottles/splashfruit.png";

export default function BottlesSection() {
    const benefits = [
        {
            id: 1,
            icon: (
                <img src={small} alt="small" className="" />
            ),
            size: "125 ml",
            price: "sets v.a. SRD 225",
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
            price: "v.a. SRD 110",
        },
    ];

    return (
        <motion.section
            id="benefits"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>

            <div className="w-full">
                <img
                    src={splashfruit}
                    alt="fruit splash"
                    className="w-full -mt-8 h-auto object-cover lg:object-center" />
            </div>

            <div className="max-w-screen-3xl mx-auto pb-14 md:pb-16 px-6 md:px-12 text-center">
                {/* Grid met voordelen */}
                <div className="grid grid-cols-3 gap-3">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.id}
                            className="flex flex-col items-center justify-start transition-all duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}>
                            {benefit.icon}
                            <p className="body-text">
                                {benefit.size}
                            </p>
                            <p className="body-text">
                                {benefit.price}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
