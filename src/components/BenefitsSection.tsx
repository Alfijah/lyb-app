"use client";

import { motion } from "framer-motion";
import elektrolytes from "../assets/benefitsSection/elektrolytes.png";
import antioxidant from "../assets/benefitsSection/antioxidant.png";
import ontsteking from "../assets/benefitsSection/ontsteking.png";
import spijsvertering from "../assets/benefitsSection/spijsvertering.png";

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      icon: (
        <img src={elektrolytes} alt="elektrolytes" className="w-40 h-40 mb-4" />
      ),
      title: "Elektrolytes",
    },
    {
      id: 2,
      icon: (
        <img src={antioxidant} alt="antioxidant" className="w-12 h-12 mb-4" />
      ),
      title: "Antioxidanten",
    },
    {
      id: 3,
      icon: (
        <img src={ontsteking} alt="ontstekingremmend" className="w-12 h-12 mb-4" />
      ),
      title: "Ontstekingremmend",
    },
    {
      id: 4,
      icon: <img src={spijsvertering} alt="spijsvertering" className="w-12 h-12 mb-4" />,
      title: "Spijsvertering",
    },
  ];

  return (
    <motion.section
      id="benefits"
      className="py-20 px-6 md:px-[20%] text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Titel */}
      <div className="mb-12">
        <h2 className="text-md text-tealBrand mb-4 px-[10%] md:px-0">
          Wat is bijzonder aan onze juices en smoothies?
        </h2>
      </div>

      {/* Grid met voordelen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            className="p-4 md:p-6 flex flex-col items-center justify-start transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {benefit.icon}
            <h3 className="text-sm md:text-md text-gray-600 mb-2">
              {benefit.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
