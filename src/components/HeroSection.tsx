"use client";

import { motion } from "framer-motion";
import heroPic from "../assets/heroSection/heropic2.png"; // pas aan naar jouw bestand
import fruitPng from "../assets/lemon_no_bg.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-green-50 via-green-100 to-white relative min-h-[90vh] flex items-center overflow-visible  pt-[7rem] md:pt-[2rem]"
    >
      {/* Inhoud gecentreerd binnen maximale breedte */}
      <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col md:flex-row items-center md:items-start gap-12 h-full">
        {/* === Linkerkant: Tekst === */}
        <motion.div
          className="flex-1 self-start space-y-6 text-center md:!text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="md:mt-14 text-green-600 font-semibold text-md tracking-wide">
            🌱 100% Natuurlijk | 0% Conserveermiddelen
          </h3>

          <h1 className="text-xl md:text-2xl text-tealBrand leading-snug">
            {/* font-bold is hier verwijderd */}
            Verzorg je lichaam, <br />
            <span className="text-orange-400">één slok tegelijk</span>
          </h1>

          <p className="text-gray-700 text-sm sm:text-sm md:text-md">
            Ontdek onze collectie verse, ambachtelijke sappen en smoothies,
            bereid met pure ingrediënten. Boordevol vitaminen, voedingsstoffen
            en pure goedheid voor een gezonde levensstijl.
          </p>

          {/* CTA Knop */}
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 inline-block bg-bioGreen text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm font-medium"
          >
            Ontdek ons menu
          </motion.a>

          {/* Scheidingslijn + cijfers */}
          <motion.div
            className="mt-4 md:mt-6 border-t border-green-200 pt-4 md:pt-10 flex flex-col md:flex-row justify-center md:justify-start items-center gap-3 md:gap-6 text-gray-700 font-medium text-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span>
              <strong className="text-green-700 text-sm">500+</strong> Tevreden
              klanten
            </span>
            <span className="hidden md:block text-green-300"></span>
            <span>
              <strong className="text-green-700 text-sm">100%</strong> Organisch
            </span>
            <span className="hidden md:block text-green-300"></span>
            <span>
              <strong className="text-green-700 text-sm">Dagelijks</strong> vers
            </span>
          </motion.div>
        </motion.div>

        {/* === Rechterkant: Afbeelding === */}
        <motion.div
          className="flex-1 mt-2 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={heroPic}
            alt="Verse sap en smoothies"
            className="w-[100%] md:w-[80%] lg:w-[100%] h-auto rounded-2xl shadow-lg object-contain"
          />
        </motion.div>
      </div>
      {/* Fruit afbeelding onderaan hero */}
      <img
        src={fruitPng}
        alt="Fruit decoratie"
        className="absolute -bottom-12 md:-bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/4 pointer-events-none"
      />
    </section>
  );
}
