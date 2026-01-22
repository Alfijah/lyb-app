"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import wave from "../assets/sellingSection/wave.png";
import sapmix from "../assets/sellingSection/sapmix.png";
import fruitmix from "../assets/sellingSection/mixfruit.png";

export default function SellingSection() {
    return (
        <motion.section
            id="benefits"
            className="bg-gradient-to-b from-white via-orange-50 to-orange-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>

            <img
                src={wave}
                alt="fruit splash"
                className="w-full -mt-8 h-auto object-cover lg:object-center" />

            <div className="mb-4 px-6 pt-14 text-center">
                <h1 className="max-w-screen-lg mx-auto text-center text-md text-tealBrand mb-4 lg:pb-6">
                    Gezond genieten, thuis en op de werkvloer
                </h1>
                <p className="body-text">
                    Onze verse smoothies worden geleverd aan particulieren én bedrijven.
                    Voor thuis, onderweg of op kantoor — zodat gezond leven moeiteloos onderdeel wordt van je dag.
                </p>
                <p className="body-text pt-4">
                    Steeds meer bedrijven kiezen voor LYB om vitaliteit, focus en energie te stimuleren op de werkvloer.
                </p>

                <motion.a
                    href="#menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="button-text w-full lg:w-fit inline-block bg-bioGreen text-white px-8 py-3 rounded-full hover:text-white hover:bg-darkYellow transition-colors duration-300 text-xs mt-4 mb-4">
                    <Link to="/menu">
                        Bekijk ons menu
                    </Link>
                </motion.a>
            </div>

            <div className="w-full mx-auto md:pb-16 pt-4 md:px-12 text-center">
                <img
                    src={sapmix}
                    alt="fruit splash"
                    className="w-full -mt-8 h-auto object-cover lg:object-center" />

                <img
                    src={fruitmix}
                    alt="fruit splash"
                    className="w-[45%] -mt-24 h-auto" />
            </div>
        </motion.section>
    );
}
