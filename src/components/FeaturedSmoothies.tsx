"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import podosiri from "../assets/featuredSmoothies/acai.png";
import chiaZuurzak from "../assets/featuredSmoothies/soursoop.png";
import cleanseHeal from "../assets/featuredSmoothies/greenReset.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function FeaturedSmoothies() {
  const smoothies = [
    {
      id: 1,
      name: "Açaí Royale",
      tag: "podosiri - bacove - kers",
      description:
        "Onze suikervrije podosiri-smoothie wordt gemaakt van verse podosiri, bacove en kers, afkomstig van lokale leveranciers.",
      tags: ["Weerstand", "Energie", "Spijsvertering", "Antioxidanten"],
      image: podosiri,
    },
    {
      id: 2,
      name: "Soursop Breeze",
      tag: "zuurzak - chiazaadjes",
      description:
        "Ons Zuurzak-sap, verrijkt met chiazaadjes, combineert een verfrissende, tropische smaak met natuurlijke voedingskracht.",
      tags: ["Weerstand", "Antioxidant", "Energie"],
      image: chiaZuurzak,
    },
    {
      id: 3,
      name: "Green Reset",
      tag: "sopropo - zuurzak - moringa",
      description:
        "Green Reset combineert sopropo, zuurzak en moringa tot een krachtige groene blend die je lichaam ondersteunt bij natuurlijke reiniging en herstel.",
      tags: ["Reiniging", "Weerstand", "Energie", "Balans"],
      image: cleanseHeal,
    },
  ];

  return (
    <section id="menu" className="bg-white max-w-screen-3xl mx-auto px-6 md:px-8 py-14 md:py-16 text-center">
      {/* Titel */}
      <SectionWrapper>
        <motion.h1 variants={fadeInUp} className="text-md text-tealBrand mb-4 lg:pb-6">
          Onze Signature Blends
        </motion.h1>
        <motion.p variants={fadeInUp} className="body-text">
          Onze meest geliefde blends, gekozen door onze klanten.
        </motion.p>
      </SectionWrapper>

      {/* Cards Grid */}
      <SectionWrapper className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-2 lg:pt-4">
        {smoothies.map((smoothie, index) => (
          <motion.div
            key={smoothie.id}
            variants={fadeInUp}
            className="bg-white overflow-hidden flex flex-col items-center transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Afbeelding */}
            <motion.div variants={fadeInUp} className="w-[70%] aspect-w-1 aspect-h-1 relative overflow-hidden">
              <img
                src={smoothie.image}
                alt={smoothie.name}
                className="object-cover"
              />
            </motion.div>

            {/* Tekst onder afbeelding */}
            <motion.div variants={fadeInUp} className="px-2 md:px-6 py-4 lg:py-16 lg:h-74 xl:h-80 space-y-2 text-center -mt-14 sm:-mt-16 md:-mt-18 xl:-mt-20 bg-tealBrand/10 rounded-3xl">
              <motion.h3 variants={fadeInUp} className="md:text-md mt-6 lg:mt-10">
                {smoothie.name}
              </motion.h3>
              <motion.p variants={fadeInUp} className="body-text">
                <b>{smoothie.tag}</b>
              </motion.p>
              <motion.p variants={fadeInUp} className="body-text">
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
                    className="px-3 py-1 text-green-600 text-xs rounded-full bg-darkYellow/20"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </SectionWrapper>
    </section>
  );
}
