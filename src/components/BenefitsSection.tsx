"use client";

import { motion } from "framer-motion";
import elektrolytes from "../assets/benefitsSection/elektrolytes.png";
import antioxidant from "../assets/benefitsSection/antioxidant.png";
import ontsteking from "../assets/benefitsSection/ontsteking.png";
import spijsvertering from "../assets/benefitsSection/spijsvertering.png";
import energie from "../assets/benefitsSection/energie.png";
import weerstand from "../assets/benefitsSection/weerstand.png";

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      icon: (
        <img src={elektrolytes} alt="elektrolytes" className="" />
      ),
      title: "Elektrolytes",
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
    <motion.section
      id="benefits"
      className="max-w-screen-3xl bg-gradient-to-b from-orange-50 via-orange-100 to-white mx-auto py-14 md:py-16 px-6 md:px-12 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Titel */}
      <div className="mb-4">
        <h1 className="max-w-screen-lg mx-auto text-md text-tealBrand mb-4 lg:pb-6">
          LYB juices & smoothies - <br></br>Voeding die je voelt
        </h1>
        <p className="body-text">
          LYB juices & smoothies geven je lichaam wat het nodig heeft. Onze ingrediënten werken samen om balans, energie en welzijn te ondersteunen.
        </p>
      </div>

      {/* Grid met voordelen */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            className="flex flex-col items-center justify-start transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {benefit.icon}
            <p className="body-text">
              {benefit.title}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
