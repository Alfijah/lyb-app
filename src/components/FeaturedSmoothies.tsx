"use client";

import { motion } from "framer-motion";
import podosiri from "../assets/featuredSmoothies/acai.png";
import chiaZuurzak from "../assets/featuredSmoothies/soursoop.png";
import cleanseHeal from "../assets/featuredSmoothies/greenReset.png";

export default function FeaturedSmoothies() {
  const smoothies = [
    {
      id: 1,
      name: "Açaí Royale",
      description:
        "Onze suikervrije podosiri-smoothie wordt gemaakt van verse podosiri, bacove en kers, afkomstig van lokale leveranciers.",
      tags: ["Weerstand", "Energie", "Spijsvertering", "Antioxidanten"],
      image: podosiri,
    },
    {
      id: 2,
      name: "Soursop Breeze",
      description:
        "Ons Zuurzak-sap, verrijkt met chiazaadjes, combineert een verfrissende, tropische smaak met natuurlijke voedingskracht.",
      tags: ["Weerstand", "Antioxidant", "Energie"],
      image: chiaZuurzak,
    },
    {
      id: 3,
      name: "Green Reset",
      description:
        "Green Reset combineert sopropo, zuurzak en moringa tot een krachtige groene blend die je lichaam ondersteunt bij natuurlijke reiniging en herstel.",
      tags: ["Reiniging", "Weerstand", "Energie", "Balans"],
      image: cleanseHeal,
    },
  ];

  return (
    <section id="menu" className="bg-white px-8 md:px-12 py-14 text-center">
      {/* Titel */}
      <div>
        <h1 className="text-md text-tealBrand mb-4">
          Onze Signature Blends
        </h1>
        <p className="body-text max-w-2xl mx-auto">
          Onze meest geliefde blends, gekozen door onze klanten.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-2 lg:pt-4">
        {smoothies.map((smoothie, index) => (
          <motion.div
            key={smoothie.id}
            className="bg-white overflow-hidden flex flex-col items-center transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Afbeelding */}
            <div className="w-[70%] aspect-w-1 aspect-h-1 relative overflow-hidden">
              <img
                src={smoothie.image}
                alt={smoothie.name}
                className="object-cover"
              />
            </div>

            {/* Tekst onder afbeelding */}
            <div className="px-2 md:px-6 py-4 lg:py-16 lg:h-74 xl:h-60 space-y-2 text-center -mt-14 lg:-mt-18 xl:-mt-20 bg-bioGreen/10 rounded-2xl">
              <h3 className="md:text-md mt-6 lg:mt-10">
                {smoothie.name}
              </h3>
              <p className="body-text">
                350ml • 1000ml
              </p>
              <p className="body-text">
                {smoothie.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap lg:justify-center gap-2 pt-2 px-2">
                {smoothie.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-green-600 text-xs rounded-full bg-green-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
