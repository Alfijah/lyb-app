"use client";
import { motion } from "framer-motion";
import hero from "../assets/heroSection/hero.png";
import fruitBg from "../assets/fluidButton.png";
import { Link } from "react-router-dom";
import { BiSolidLeaf } from "react-icons/bi";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen  bg-bgColor flex flex-col justify-normal overflow-hidden">
      <div className="relative inset-0 mt-2">
        <img
          src={hero}
          alt="Verse sap en smoothies"
          className="w-full h-[40%] lg:h-auto object-cover object-[100%_center] scale-110" />
      </div>

      <div className="absolute z-10 w-full max-w-screen-3xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex min-h-screen items-end lg:items-center -mt-32 sm:-mt-28 lg:mt-20">
          <div className="w-full lg:w-[36%] xl:w-[40%] flex flex-col items-center lg:items-start text-center md:pr-0 lg:pr-0">
            <h1 className="lg:text-left lg:pb-2">100% Natuurlijke Juices & Smoothies in Suriname</h1>
            <p className="body-text lg:w-full xl:w-[70%] lg:text-left mt-4 lg:pr-0">Dagelijks vers bereid met fruit, kruiden en superfoods. Vrij van kunstmatige stoffen. Pure energie voor <span className="exceptionText font-semibold">jouw dag.</span></p>
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
              style={{ backgroundImage: `url(${fruitBg})` }}
              className="button-text bg-cover bg-center w-full lg:w-60 mt-4 inline-block text-white px-8 py-3 rounded-full shadow-md hover:shadow-md hover:text-white hover:bg-darkYellow transition-colors duration-300 text-xs uppercase tracking-widest">
              <Link to="/menu">
                Bekijk ons menu
              </Link>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
