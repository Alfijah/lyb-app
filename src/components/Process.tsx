import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import bottle from "../assets/processSection/iconBottle.webp";
import blender from "../assets/processSection/iconBlender.webp";
import delivery from "../assets/processSection/iconDelivery.webp";
import fruitBg from "../assets/fluidButton.webp";
import SectionWrapper from "../animations/SectionWrapper";
import WipeButton from "./tools/Button";

export default function Process() {
    const smoothies = [
        {
            id: 1,
            alt: "smoothie en sap petfles - Love Your Body Suriname",
            tag: "Kies je favoriet",
            description:
                "Selecteer uit ons assortiment juices & smoothies.",
            image: bottle,
        },
        {
            id: 2,
            alt: "smoothie en sap blender - Love Your Body Suriname",
            tag: "Wij blenden vers",
            description:
                "Altijd vers geblend met verse & natuurlijke ingrediënten.",
            image: blender,
        },
        {
            id: 3,
            alt: "smoothie en sap pakket - Love Your Body Suriname",
            tag: "Thuisbezorgd",
            description:
                "In overleg en koel bij jou thuis of op kantoor afgeleverd.",
            image: delivery,
        },
    ];

    return (
        <section id="menu" className="bg-stone-50 mx-auto py-10 md:py-16 pb-14 sm:pb-16 lg:pb-20 text-center">
            {/* Titel & SEO intro */}
            <SectionWrapper className="pb-4">
                <motion.h2 variants={fadeInUp} className="text-md lg:pb-0 px-6 sm:px-8">
                    Hoe Het Werkt?
                </motion.h2>
            </SectionWrapper>

            {/* Cards Grid: Verbeterde responsiviteit */}
            <div className="relative mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 lg:gap-4 2xl:gap-6 lg:pt-6 xl:pt-0 px-6 sm:px-24 md:px-8 xl:px-14 2xl:px-20">
                {smoothies.map((smoothie) => (
                    <SectionWrapper
                        key={smoothie.id}
                        className="relative flex flex-col items-center"
                    >
                        {/* Header met Curve */}

                        {/* Product Image */}
                        <motion.img
                            variants={fadeInUp}
                            src={smoothie.image}
                            loading="lazy"
                            alt={smoothie.alt}
                            className="w-[50%] h-auto object-contain scale-110 rounded-t-xl"
                        />

                        {/* Content Card: Hoogte-optimalisatie voor grid-alignment */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col flex-1 w-full px-4 md:px-6 py-1 space-y-1 text-center bg-transparent"
                        >
                            <div className="flex-1 flex flex-col space-y-1">
                                <h3 className="body-text italic">
                                    <b>{smoothie.tag}</b>
                                </h3>
                                <p className="body-text text-center leading-relaxed">
                                    {smoothie.description}
                                </p>
                            </div>
                        </motion.div>
                    </SectionWrapper>
                ))}
            </div>

            <motion.div variants={fadeInUp} className="w-full pt-10">
                <WipeButton
                    to="/bestellen"
                    style={{ backgroundImage: `url(${fruitBg})` }}
                    className="body w-full max-w-[240px] mx-auto bg-cover bg-center text-white"
                >
                    Kies je favoriet
                </WipeButton>
            </motion.div>
        </section>
    );
}