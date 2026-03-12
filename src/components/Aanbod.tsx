"use client";
import { Link } from "react-router-dom";
import fruitBg from "../assets/fluidButton.png";
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
import WipeButton from "./tools/Button";

type Category = {
    title: string;
    id: string;
    img: string;
    alt: string;
};

export default function Aanbod() {
    const categories: Category[] = [
        { title: "Juices", id: "juices", img: juices, alt: "verse sappen" },
        { title: "Smoothies", id: "smoothies", img: smoothies, alt: "verse smoothies" },
        { title: "Wellness shots", id: "shots", img: shots, alt: "gember en kurkuma welness shots" },
        { title: "Vitamine water", id: "vitawater", img: vitawater, alt: "verse vitaminewater" },
        { title: "Cleanse & heal", id: "cleanse", img: cleanse, alt: "detox sappen" },
        { title: "Sappenkuur", id: "sappenkuur", img: sappenkuur, alt: "sapenkuur" },
    ];

    return (
        <section
            id="aanbod"
            className="relative z-20 max-w-screen-3xl bg-gradient-to-b from-orange-100 via-orange-100 to-white mx-auto pb-6 py-6 md:py-16 px-6 md:px-8 lg:px-12 text-center overflow-hidden"
        >
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
                    />
                </svg>
            </div>

            {/* Titel */}
            <SectionWrapper className="mb-4">
                <motion.h2
                    variants={fadeInUp}
                    className="max-w-screen-lg mx-auto text-md mb-4 lg:pb-6 pt-20 sm:pt-28 md:pt-16 xl:pt-24"
                >
                    Ontdek ons aanbod
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    className="max-w-screen-lg mx-auto body-text sm:px-8 md:px-10 lg:px-28"
                >
                    Alles voor een Gezonde Boost!
                </motion.p>
                <motion.p
                    variants={fadeInUp}
                    className="body-text max-w-screen-lg mx-auto pt-4 sm:px-8 md:px-10 lg:px-28"
                >
                    Ontdek onze gezonde smoothies, verse juices, wellness shots en
                    sappenkuur; <span className="exceptionText font-semibold">vers bereid</span>{" "}
                    met natuurlijke ingrediënten voor energie, weerstand en balans.
                </motion.p>
            </SectionWrapper>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((c) => (
                    <SectionWrapper key={c.id}>
                        <div>
                            <motion.p variants={fadeInLeft} className="categoryText italic">
                                {c.title}
                            </motion.p>

                            {/* Card wrapper met hover state */}
                            <motion.div initial="rest" animate="rest" whileHover="hover">
                                <Link to={`/menu#${c.id}`} className="block relative rounded-xl overflow-hidden">
                                    {/* wipe overlay */}
                                    <motion.span
                                        variants={{
                                            rest: { scaleX: 0, transformOrigin: "0% 50%" },
                                            hover: { scaleX: 1, transformOrigin: "0% 50%" },
                                        }}
                                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute inset-0 z-[60] bg-black/55 pointer-events-none"
                                    />

                                    {/* arrow (purely visual) */}
                                    <div className="absolute top-4 right-4 z-[90] flex items-center justify-center w-[60px] h-[40px] bg-white/10 border-1 border-white rounded-3xl">
                                        <motion.span
                                            variants={{ rest: { rotate: 0 }, hover: { rotate: 45 } }}
                                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            className="inline-flex"
                                        >
                                            <HiArrowUpRight className="text-white text-2xl" />
                                        </motion.span>
                                    </div>

                                    <motion.img
                                        variants={fadeInLeft}
                                        src={c.img}
                                        alt={c.alt}
                                        loading="lazy"
                                        className="relative mx-auto w-full h-auto pointer-events-none select-none rounded-xl shadow-md"
                                    />
                                </Link>
                            </motion.div>
                        </div>
                    </SectionWrapper>
                ))}

                {/* CTA */}
                <SectionWrapper className="mb-4">
                    <motion.h3
                        variants={fadeInUp}
                        className="max-w-screen-lg mx-auto italic font-semibold py-4 sm:px-8 md:px-10 lg:px-28"
                    >
                        Volledig menu bekijken?
                    </motion.h3>
                    <motion.p
                        variants={fadeInUp}
                        className="max-w-screen-lg mx-auto body-text sm:px-8 md:px-10 lg:px-28"
                    >
                        Bekijk ons volledige menu met smoothies, juices en wellness drinks;{" "}
                        <span className="exceptionText font-semibold">altijd vers</span> met
                        een verfrissende smaak.
                    </motion.p>

                    <motion.div variants={fadeInUp}>
                        <WipeButton
                            to="/menu"
                            style={{ backgroundImage: `url(${fruitBg})` }}
                            className="w-[80%] lg:w-60 mt-4 text-white bg-cover bg-center"
                        >
                            Bekijk ons menu
                        </WipeButton>
                    </motion.div>
                </SectionWrapper>
            </div>
        </section>
    );
}