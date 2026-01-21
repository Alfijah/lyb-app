"use client";
import { motion } from "framer-motion";
// import heroPic from "../assets/heroSection/heropic2.png";
import hero from "../assets/heroSection/hero2.png";
// import fruitPng from "../assets/lemon_no_bg.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full lg:min-h-[94vh] xl:min-h-[134vh] bg-gradient-to-b from-green-50 via-green-100 to-white flex flex-col justify-normal lg:justify-center overflow-hidden">
      <div className="relative lg:absolute w-full inset-y-28 lg:inset-0 pr-24 lg:pr-0">
        <img
          src={hero}
          alt="Verse sap en smoothies"
          className="w-full h-auto object-cover lg:object-center scale-150 md:scale-125 lg:scale-100" />
      </div>

      <div className="relative z-10 w-full max-w-screen-3xl mx-auto px-6 lg:px-12 pt-44 sm:pt-56 lg:pt-10 xl:pt-0 lg:pb-52 lg:mt-16 ">
        <div className="w-full lg:w-[40%] xl:w-[40%] flex flex-col items-center lg:items-start text-center sm:pr-8 md:pr-0 lg:pr-0">
          <h1 className="lg:text-left lg:pb-2">Blended for your body</h1>
          <p className="body-text lg:text-left mt-4 lg:pr-20 xl:pr-0">Dagelijks vers geblend met fruit, kruiden & superfoods</p>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="button-text w-full lg:w-fit mt-4 inline-block bg-bioGreen text-white px-8 py-3 rounded-full hover:text-white hover:bg-darkYellow transition-colors duration-300 text-xs">
            <Link to="/menu">
              Ontdek ons menu
            </Link>
          </motion.a>
        </div>
      </div>



      {/* Inhoud gecentreerd binnen maximale breedte */}
      {/* <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col md:flex-row items-center md:items-start gap-12 h-full">
        <motion.div
          className="flex-1 self-start space-y-6 text-center md:!text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="md:mt-14 text-green-600 font-semibold text-xs md:text-sm tracking-wide">
            🌱 100% Natuurlijk | 0% Conserveermiddelen
          </h3>

          <h1 className="text-md text-tealBrand leading-snug">
            Verzorg je lichaam, <br />
            <span className="text-orange-400">één slok tegelijk</span>
          </h1>

          <p className="text-gray-700 text-xs md:text-sm">
            Ontdek onze collectie verse, ambachtelijke sappen en smoothies,
            bereid met pure ingrediënten. Boordevol vitaminen, voedingsstoffen
            en pure goedheid voor een gezonde levensstijl.
          </p>

          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 inline-block bg-bioGreen text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 text-xs"
          >
            <Link to="/menu" className="hover:text-white transition">
              Ontdek ons menu
            </Link>
          </motion.a>

          <motion.div
            className="mt-4 md:mt-6 border-t border-green-200 pt-4 md:pt-10 flex flex-col md:flex-row justify-center md:justify-start items-center gap-3 md:gap-6 text-gray-700 font-medium text-xs md:text-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span>
              <strong className="text-green-700">500+</strong> Tevreden klanten
            </span>
            <span className="hidden md:block text-green-300"></span>
            <span>
              <strong className="text-green-700">100%</strong> Organisch
            </span>
            <span className="hidden md:block text-green-300"></span>
            <span>
              <strong className="text-green-700">Dagelijks</strong> vers
            </span>
          </motion.div>
        </motion.div>

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
      <img
        src={fruitPng}
        alt="Fruit decoratie"
        className="absolute -bottom-12 md:-bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/4 pointer-events-none"
      /> */}
    </section>
  );
}
