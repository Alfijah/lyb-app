"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import elektrolytes from "../assets/benefitsSection/elektrolytes.png";
import antioxidant from "../assets/benefitsSection/antioxidant.png";
import ontsteking from "../assets/benefitsSection/ontsteking.png";
import spijsvertering from "../assets/benefitsSection/spijsvertering.png";
import energie from "../assets/benefitsSection/energie.png";
import weerstand from "../assets/benefitsSection/weerstand.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      icon: (
        <img src={elektrolytes} alt="elektrolytes" className="" />
      ),
      title: "Elektrolyten",
    },
    {
      id: 2,
      icon: (
        <img src={antioxidant} alt="antioxidant"/>
      ),
      title: "Antioxidanten",
    },
    {
      id: 3,
      icon: (
        <img src={ontsteking} alt="ontstekingremmend"/>
      ),
      title: "Herstel",
    },
    {
      id: 4,
      icon: <img src={spijsvertering} alt="spijsvertering"/>,
      title: "Spijsvertering",
    },
    {
      id: 5,
      icon: (
        <img src={energie} alt="energie" />
      ),
      title: "Energie",
    },
    {
      id: 6,
      icon: <img src={weerstand} alt="weerstand"/>,
      title: "Weerstand",
    },
  ];

  return (
    <section
      id="benefits"
      className="max-w-screen-3xl bg-gradient-to-b from-orange-50 via-orange-100 to-white mx-auto py-14 md:py-16 px-6 md:px-12 text-center">
      
      {/* Titel */}
      <SectionWrapper className="mb-4">
        <motion.h1 variants={fadeInUp} className="max-w-screen-lg mx-auto text-md text-tealBrand mb-4 lg:pb-6">
          LYB juices & smoothies - <br></br>Voeding die je voelt
        </motion.h1>
        <motion.p variants={fadeInUp} className="body-text">
          LYB juices & smoothies geven je lichaam wat het nodig heeft. Onze ingrediënten werken samen om balans, energie en welzijn te ondersteunen.
        </motion.p>
      </SectionWrapper>

      {/* Grid met voordelen */}
      <SectionWrapper className="grid grid-cols-3 lg:grid-cols-6 gap-3">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.id}
            variants={fadeInUp}
            className="flex flex-col items-center justify-start transition-all">
            {benefit.icon}
            <motion.p variants={fadeInUp} className="body-text">
              {benefit.title}
            </motion.p>
          </motion.div>
        ))}
      </SectionWrapper>
    </section>
  );
}
