"use client";
import { motion } from "framer-motion";
import hero from "../assets/heroSection/hero2.png";
import { Link } from "react-router-dom";
import { BiSolidLeaf } from "react-icons/bi";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen sm:min-h-[94vh] lg:min-h-[76vh] bg-gradient-to-b from-green-50 via-green-100 to-white flex flex-col justify-normal lg:justify-center overflow-hidden">
      <div className="relative inset-0 mt-28 sm:mt-14 md:mt-10 lg:-mt-0 xl:-mt-20 mr-16 lg:mr-0">
        <img
          src={hero}
          alt="Verse sap en smoothies"
          className="w-full h-[40%] lg:h-auto object-cover object-[100%_center] scale-150 sm:scale-125 md:scale-100 lg:scale-90" />
      </div>

      <div className="absolute z-10 w-full max-w-screen-3xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="min-h-screen flex items-end lg:items-center -mt-20 sm:-mt-10 lg:mt-20">
          <div className="w-full lg:w-[40%] xl:w-[40%] flex flex-col items-center lg:items-start text-center md:pr-0 lg:pr-0">
            <h1 className="lg:text-left lg:pb-2">Start your healthy journey with us</h1>
            <p className="body-text lg:w-full xl:w-[70%] lg:text-left mt-4 lg:pr-20 xl:pr-0">Dagelijks vers geblend met fruit, kruiden & superfoods voor balans, energie en vitaliteit.</p>

            <div className="flex lg:flex-col mt-3 gap-3 sm:gap-4 lg:gap-1">
              <li className="flex items-center gap-1">
                <BiSolidLeaf className="text-bioGreen text-xl" />
                <span className="body-text">Detoxen</span>
              </li>
              <li className="flex items-center gap-1">
                <BiSolidLeaf className="text-bioGreen text-xl" />
                <span className="body-text">Weightloss</span>
              </li>
              <li className="flex items-center gap-1">
                <BiSolidLeaf className="text-bioGreen text-xl" />
                <span className="body-text">Balans</span>
              </li>
            </div>

            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="button-text w-full lg:w-60 mt-4 inline-block bg-bioGreen text-white px-8 py-3 rounded-full hover:text-white hover:bg-darkYellow transition-colors duration-300 text-xs">
              <Link to="/menu">
                Ontdek onze smaken
              </Link>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
