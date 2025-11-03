"use client";

import { motion } from "framer-motion";
import heroPic from "../assets/heropic2.png"; // pas aan naar jouw bestand

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-green-50 overflow-hidden pt-28 md:pt-32 pb-16"
    >
      {/* Inhoud gecentreerd binnen maximale breedte */}
      <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* === Linkerkant: Tekst === */}
        <motion.div
          className="flex-1 space-y-6 text-left md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-green-600 font-semibold text-md tracking-wide">
            100% Natuurlijk
          </h3>

          <h1 className="text-3xl md:text-4xl font-bold text-tealBrand leading-snug">
            Verzorg je lichaam, <br />
            <span className="text-orange-400">één slok tegelijk</span>
          </h1>

          <p className="text-gray-700 text-sm sm:text-sm md:text-md mx-auto md:mx-0">
            Ontdek onze collectie verse, ambachtelijke sappen en smoothies,
            bereid met de beste biologische ingrediënten. Boordevol vitaminen,
            voedingsstoffen en pure goedheid voor een gezonde levensstijl.
          </p>

          {/* CTA Knop */}
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-tealBrand text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm font-medium"
          >
            Ontdek ons menu
          </motion.a>

          {/* Scheidingslijn + cijfers */}
          <motion.div
            className="mt-10 border-t border-green-200 pt-6 flex flex-col md:flex-row justify-center md:justify-start items-left gap-6 text-gray-700 font-medium text-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span>
              <strong className="text-green-700 text-sm">500+</strong> Tevreden
              klanten
            </span>
            <span className="hidden md:block text-green-300">|</span>
            <span>
              <strong className="text-green-700 text-sm">100%</strong> Organisch
            </span>
            <span className="hidden md:block text-green-300">|</span>
            <span>
              <strong className="text-green-700 text-sm">Dagelijks</strong> vers
            </span>
          </motion.div>
        </motion.div>

        {/* === Rechterkant: Afbeelding === */}
        <motion.div
          className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={heroPic}
            alt="Verse sap en smoothies"
            className="w-[75%] md:w-[80%] lg:w-[90%] h-auto rounded-2xl shadow-lg object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
