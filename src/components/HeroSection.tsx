"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import hero from "../assets/heroSection/hero.png";
import fruitBg from "../assets/fluidButton.png";
import { BiSolidLeaf } from "react-icons/bi";
import SectionWrapper from "../animations/SectionWrapper";
import WipeButton from "./tools/Button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full bg-bgColor overflow-hidden"
    >
      {/* HERO IMAGE */}
      <div className="relative lg:inset-x-0 lg:top-0 lg:-bottom-40 z-0">
        <img
          src={hero}
          loading="lazy"
          alt="Verse sap en smoothies"
          className="relative w-full object-cover scale-100 sm:scale-100" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:min-h-screen justify-end lg:justify-center py-10 lg:py-0">

          <SectionWrapper
            className="
              w-full
              lg:w-[46%]
              xl:w-[60%]
              flex
              flex-col
              items-center
              lg:items-start
              text-center"
          >

            <motion.h1 variants={fadeInUp} className="lg:text-left">
              100% Natuurlijke Juices & Smoothies in Suriname
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="body-text mt-4 lg:text-left"
            >
              Dagelijks vers bereid met fruit, kruiden en superfoods.
              Vrij van kunstmatige stoffen. Pure energie voor
              <span className="exceptionText font-semibold"> jouw dag.</span>
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex gap-4 mt-4 "
            >
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
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6">
              <WipeButton
                to="/menu"
                style={{ backgroundImage: `url(${fruitBg})` }}
                className="w-full sm:w-60 text-white bg-cover bg-center"
              >
                Bekijk ons menu
              </WipeButton>
            </motion.div>

          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}