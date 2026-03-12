"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import sapmix from "../assets/sellingSection/sapmix1.png";
import fruitBg from "../assets/fluidButton.png";
import SectionWrapper from "../animations/SectionWrapper";
import WipeButton from "./tools/Button";

export default function SellingSection() {
    return (
        <section
            id="benefits"
            className="relative z-10 w-full flex flex-col px-6 py-14">
            <div className="bg-bgColor shadow-sm rounded-xl">
                <SectionWrapper className="w-full px-2 md:px-8 pt-14 text-center">
                    <motion.h2 variants={fadeInUp} className="max-w-screen-lg mx-auto text-center text-md mb-4 lg:pb-6">
                        <span className="italic">Vandaag besteld?</span> Bezorging in overleg geregeld
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="max-w-screen-lg mx-auto body-text">
                        Te druk vandaag? Wij bezorgen jouw favoriete juices thuis of op kantoor.
                    </motion.p>
                    <motion.p variants={fadeInUp} className="body-text pt-4">
                        Steeds <span className="exceptionText font-semibold">meer bedrijven</span> kiezen voor LYB als gezonde energieboost op de werkvloer.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="w-full px-6 pb-6">
                        <WipeButton
                            href="https://wa.me/5978531071"
                            external
                            style={{ backgroundImage: `url(${fruitBg})` }}
                            className="body w-[80%] lg:w-60 mt-2 bg-cover bg-center text-white">
                            Bestel vandaag nog
                        </WipeButton>
                    </motion.div>
                </SectionWrapper>

                <SectionWrapper className="relative w-full flex justify-end">
                    <motion.img
                        variants={fadeInUp}
                        src={sapmix}
                        alt="LYB verse juices en smoothies"
                        loading="lazy"
                        className="w-[100%] lg:w-[70%] object-cover" />
                </SectionWrapper>
            </div>
        </section>
    );
}
