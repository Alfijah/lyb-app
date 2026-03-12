"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import podosiri from "../assets/featuredSmoothies/acai.png";
import chiaZuurzak from "../assets/featuredSmoothies/soursoop.png";
import cleanseHeal from "../assets/featuredSmoothies/greenReset2.png";
import fruitBg from "../assets/fluidButton.png";
import SectionWrapper from "../animations/SectionWrapper";
import WipeButton from "./tools/Button";

export default function FeaturedSmoothies() {
  const smoothies = [
    {
      id: 1,
      name: "Açaí Royale",
      alt: "verse podosiri sap",
      tag: "podosiri - bacove - kers",
      bgColor: "bg-[#f1ccd1]",
      description:
        "De combinatie van açaí, kers en banaan levert antioxidanten en kalium, die het lichaam ondersteunen bij spierwerking, herstel en het vasthouden van een stabiel energieniveau.",
      tags: ["Weerstand", "Energie", "Spijsvertering", "Antioxidanten"],
      image: podosiri,
    },
    {
      id: 2,
      name: "Soursop Breeze",
      alt: "verse zuurzak sap",
      tag: "zuurzak - chiazaadjes",
      bgColor: "bg-[#f7f6eb]",
      description:
        "Ons Zuurzak-sap, verrijkt met chiazaadjes, ondersteunt hydratatie en een verzadigd gevoel dankzij vezels, omega’s en natuurlijke mineralen.",
      tags: ["Weerstand", "Antioxidant", "Energie"],
      image: chiaZuurzak,
    },
    {
      id: 3,
      name: "Green Reset",
      alt: "verse zuurzak, sopropo sap",
      tag: "sopropo - zuurzak - moringa",
      description:
        "Groene smoothie met zuurzak, sopropo en moringa. Rijk aan antioxidanten en perfect voor een natuurlijke energieboost.",
      tags: ["Reiniging", "Weerstand", "Energie", "Balans"],
      image: cleanseHeal,
    },
  ];

  return (
    <section id="menu" className="bg-bgColor max-w-screen-3xl mx-auto py-10 md:py-16 pb-8 sm:pb-24 md:pb-32 text-center">
      {/* Titel */}
      <SectionWrapper>
        <motion.h2 variants={fadeInUp} className="text-md mb-4 lg:pb-6">
          Onze Signature Blends
        </motion.h2>
        <motion.p variants={fadeInUp} className="body-text px-6">
          Onze <span className="exceptionText font-semibold">meest gekozen</span> smoothies in Paramaribo. Vers, voedzaam en geliefd door onze klanten.
        </motion.p>
      </SectionWrapper>

      {/* Cards Grid */}
      <SectionWrapper className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:pt-4">
        {smoothies.map((smoothie) => (
          <SectionWrapper
            key={smoothie.id}
            className="overflow-hidden flex flex-col items-center transition-shadow duration-300"
          >
            <div className="relative flex flex-col items-center">
              <motion.svg viewBox="0 0 500 200" className="relative w-full h-22 sm:pt-6 z-50">
                <path
                  id="curve"
                  d="M 50 150 Q 250 0 450 150"
                  fill="transparent"
                />
                <text className="bestSeller tracking-widest">
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    {smoothie.name}
                  </textPath>
                </text>
              </motion.svg>

              <motion.div variants={fadeInUp} className="w-[50%] aspect-w-1 aspect-h-1 -mt-28 sm:-mt-36 lg:-mt-14 xl:-mt-16 relative overflow-hidden z-10">
                <img
                  src={smoothie.image}
                  loading="lazy"
                  alt={smoothie.name}
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Tekst onder afbeelding */}
            <motion.div variants={fadeInUp} className={`mx-6 px-2 md:px-6 py-4 lg:py-16 lg:h-74 xl:h-80 space-y-2 text-center -mt-14 sm:-mt-16 md:-mt-18 xl:-mt-20 shadow-sm border-2 border-orange-200 rounded-xl`}>
              <motion.p variants={fadeInUp} className="body-text pt-4 lg:mt-4 xl:mt-6 italic">
                <b>{smoothie.tag}</b>
              </motion.p>
              <motion.p variants={fadeInUp} className="body-text font-extrabold">
                350 ml • 1000 ml
              </motion.p>
              <motion.p variants={fadeInUp} className="body-text">
                {smoothie.description}
              </motion.p>

              {/* Tags */}
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 pt-2 px-2">
                {smoothie.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-green-100 text-xs rounded-full bg-tealBrand/50 shadow-sm">
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="w-full px-6">
                <WipeButton
                  href="https://wa.me/5978531071"
                  external
                  style={{ backgroundImage: `url(${fruitBg})` }}
                  className="body w-[80%] lg:w-60 mt-2 bg-cover bg-center text-white">
                  Bestel deze smoothie
                </WipeButton>
              </motion.div>
            </motion.div>
          </SectionWrapper>
        ))}
      </SectionWrapper>
    </section>
  );
}
