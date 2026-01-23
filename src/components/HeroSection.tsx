"use client";
import { motion } from "framer-motion";
import hero from "../assets/heroSection/hero2.png";
import { Link } from "react-router-dom";
import { BiSolidLeaf } from "react-icons/bi";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen lg:min-h-[94vh] xl:min-h-[134vh] bg-gradient-to-b from-green-50 via-green-100 to-white flex flex-col justify-normal lg:justify-center overflow-hidden">
      <div className="absolute inset-0 mt-20 lg:mt-0">
        <img
          src={hero}
          alt="Verse sap en smoothies"
          className="w-full h-[45%] lg:h-auto object-cover object-[100%_center] scale-125 md:scale-110 lg:scale-100" />
      </div>

      {/* <div className="relative lg:absolute w-full inset-y-28 lg:inset-0 pr-24 lg:pr-0">
        <img
          src={hero}
          alt="Verse sap en smoothies"
          className="w-full object-cover lg:object-center scale-150 md:scale-125 lg:scale-100" />
      </div> */}

      <div className="absolute z-10 w-full max-w-screen-3xl mx-auto px-6 lg:px-12">
        <div className="min-h-screen flex items-end lg:items-center -mt-16">
          <div className="w-full lg:w-[40%] xl:w-[40%] flex flex-col items-center lg:items-start text-center sm:pr-8 md:pr-0 lg:pr-0">
            <h1 className="lg:text-left lg:pb-2">Blended for your body</h1>
            <p className="body-text lg:text-left mt-4 lg:pr-20 xl:pr-0">Dagelijks vers geblend met fruit, kruiden & superfoods en 0% conserveermiddelen.</p>

            <div className="flex flex-col mt-3">
              <li className="flex items-center gap-2">
                <BiSolidLeaf className="text-bioGreen text-xl" />
                <span className="body-text">Detoxen</span>
              </li>
              <li className="flex items-center gap-2">
                <BiSolidLeaf className="text-bioGreen text-xl" />
                <span className="body-text">Weightloss</span>
              </li>
              <li className="flex items-center gap-2">
                <BiSolidLeaf className="text-bioGreen text-xl" />
                <span className="body-text">Weerstand herstellen</span>
              </li>
              <li className="flex items-center gap-2">
                <BiSolidLeaf className="text-bioGreen text-xl" />
                <span className="body-text">Natuurlijker leven</span>
              </li>
            </div>

            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="button-text w-full lg:w-fit mt-4 inline-block bg-bioGreen text-white px-8 py-3 rounded-full hover:text-white hover:bg-darkYellow transition-colors duration-300 text-xs">
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
