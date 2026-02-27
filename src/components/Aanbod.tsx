"use client";
// import { useNavigate } from "react-router-dom";
import fruitBg from "../assets/fluidButton.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "../animations/Varianten";
import juices from "../assets/aanbod/juices.png";
import smoothies from "../assets/aanbod/smoothies.png";
import shots from "../assets/aanbod/shots.png";
import vitawater from "../assets/aanbod/vitawater.png";
import cleanse from "../assets/aanbod/cleanse&heal.png";
import sappenkuur from "../assets/aanbod/sappenkuur.png";
import SectionWrapper from "../animations/SectionWrapper";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Aanbod() {
    return (
        <section
            id="aanbod"
            className="relative z-20 max-w-screen-3xl bg-gradient-to-b from-orange-100 via-orange-100 to-white mx-auto -mt-10 pb-14 md:py-16 px-6 md:px-8 lg:px-12 text-center overflow-hidden">

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
                    Smoothies, Juices & Sappenkuur in Suriname
                </motion.h1>
                <motion.p variants={fadeInUp} className="max-w-screen-lg mx-auto body-text sm:px-8 md:px-10 lg:px-28">
                    Alles voor een Gezonde Boost!
                </motion.p>
                <motion.p variants={fadeInUp} className="body-text max-w-screen-lg mx-auto pt-4 sm:px-8 md:px-10 lg:px-28">
                    Ontdek onze gezonde smoothies, verse juices, wellness shots en sappenkuur; <span className="exceptionText font-semibold">vers bereid</span> met natuurlijke ingrediënten voor energie, weerstand en balans.
                </motion.p>
            </SectionWrapper>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                <SectionWrapper>
                    <div>
                        <motion.p
                            variants={fadeInLeft}
                            className="categoryText italic">Juices</motion.p>
                        <div className="relative">
                            <div className="absolute top-4 right-4 flex items-center justify-center z-[90] w-[60px] h-[40px] bg-white/10 border-1 border-white rounded-3xl">
                                <HiArrowUpRight className="text-white text-2xl" />
                            </div>
                            <motion.img
                                variants={fadeInLeft}
                                src={juices}
                                alt="juices"
                                className="relative mx-auto w-full h-auto pointer-events-none select-none rounded-xl shadow-md"
                            />
                        </div>
                    </div>
                </SectionWrapper>

                <SectionWrapper>
                    <div>
                        <motion.p
                            variants={fadeInLeft}
                            className="categoryText italic">Smoothies</motion.p>
                        <div className="relative">
                            <div className="absolute top-4 right-4 flex items-center justify-center z-[90] w-[60px] h-[40px] bg-white/10 border-1 border-white rounded-3xl">
                                <HiArrowUpRight className="text-white text-2xl" />
                            </div>
                            <motion.img
                                variants={fadeInLeft}
                                src={smoothies}
                                alt="juices"
                                className="relative mx-auto w-full h-auto pointer-events-none select-none rounded-xl shadow-md"
                            />
                        </div>

                    </div>
                </SectionWrapper>

                <SectionWrapper>
                    <div>
                        <motion.p
                            variants={fadeInLeft}
                            className="categoryText italic">Wellness shots</motion.p>
                        <div className="relative">
                            <div className="absolute top-4 right-4 flex items-center justify-center z-[90] w-[60px] h-[40px] bg-white/10 border-1 border-white rounded-3xl">
                                <HiArrowUpRight className="text-white text-2xl" />
                            </div>
                            <motion.img
                                variants={fadeInLeft}
                                src={shots}
                                alt="juices"
                                className="mx-auto w-full h-auto pointer-events-none select-none rounded-xl shadow-md"
                            />
                        </div>
                    </div>
                </SectionWrapper>

                <SectionWrapper>
                    <div>
                        <motion.p
                            variants={fadeInLeft}
                            className="categoryText italic">Vitamine water</motion.p>
                        <div className="relative">
                            <div className="absolute top-4 right-4 flex items-center justify-center z-[90] w-[60px] h-[40px] bg-white/10 border-1 border-white rounded-3xl">
                                <HiArrowUpRight className="text-white text-2xl" />
                            </div>
                            <motion.img
                                variants={fadeInLeft}
                                src={vitawater}
                                alt="juices"
                                className="mx-auto w-full h-auto pointer-events-none select-none rounded-xl shadow-md"
                            />
                        </div>
                    </div>
                </SectionWrapper>

                <SectionWrapper>
                    <div>
                        <motion.p
                            variants={fadeInLeft}
                            className="categoryText italic">Cleanse & heal</motion.p>
                        <div className="relative">
                            <div className="absolute top-4 right-4 flex items-center justify-center z-[90] w-[60px] h-[40px] bg-white/10 border-1 border-white rounded-3xl">
                                <HiArrowUpRight className="text-white text-2xl" />
                            </div>
                            <motion.img
                                variants={fadeInLeft}
                                src={cleanse}
                                alt="juices"
                                className="mx-auto w-full h-auto pointer-events-none select-none rounded-xl shadow-md"
                            />
                        </div>

                    </div>
                </SectionWrapper>

                <SectionWrapper>
                    <div>
                        <motion.p
                            variants={fadeInLeft}
                            className="categoryText italic">Sappenkuur</motion.p>
                            <div className="relative">
                            <div className="absolute top-4 right-4 flex items-center justify-center z-[90] w-[60px] h-[40px] bg-white/10 border-1 border-white rounded-3xl">
                                <HiArrowUpRight className="text-white text-2xl" />
                            </div>
                        <motion.img
                            variants={fadeInLeft}
                            src={sappenkuur}
                            alt="juices"
                            className="mx-auto w-full h-auto pointer-events-none select-none rounded-xl shadow-md"
                        />
                            </div>

                    </div>
                </SectionWrapper>

                <SectionWrapper className="mb-4">
                    <motion.h3 variants={fadeInUp} className="max-w-screen-lg mx-auto italic font-semibold py-4 sm:px-8 md:px-10 lg:px-28">
                        Volledig menu bekijken?
                    </motion.h3>
                    <motion.p variants={fadeInUp} className="max-w-screen-lg mx-auto body-text sm:px-8 md:px-10 lg:px-28">
                        Bekijk ons volledige menu met smoothies, juices en wellness drinks; <span className="exceptionText font-semibold">altijd vers</span> met een verfrissende smaak.
                    </motion.p>
                    <motion.a
                        href="#menu"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        style={{ backgroundImage: `url(${fruitBg})` }}
                        className="button-text bg-cover bg-center w-full lg:w-60 mt-4 inline-block text-white px-8 py-3 rounded-full shadow-md hover:shadow-md hover:text-white hover:bg-darkYellow transition-colors duration-300 text-xs uppercase tracking-widest">
                        <Link to="/menu">
                            Bekijk ons menu
                        </Link>
                    </motion.a>
                </SectionWrapper>
            </div>
        </section>
    );
}
