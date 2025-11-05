"use client";

import { motion } from "framer-motion";

import podosiri from "../assets/featuredSmoothies/podosiri.png";
import chiaZuurzak from "../assets/featuredSmoothies/chiaZuurzak2.png";
import cleanseHeal from "../assets/featuredSmoothies/cleansHeal.png";
import gember from "../assets/featuredSmoothies/gember.png";

export default function FeaturedSmoothies() {
  const smoothies = [
    {
      id: 1,
      name: "Podosiri",
      description:
        "Onze suikervrije podosiri-smoothie wordt gemaakt van verse podosiri, bacove en kers, afkomstig van lokale leveranciers.",
      tags: ["Weerstand", "Energie", "Spijsvertering", "Antioxidanten"],
      image: podosiri,
    },
    {
      id: 2,
      name: "Chia-Zuurzak",
      description:
        "Ons Zuurzak-sap, verrijkt met chiazaadjes, combineert een verfrissende, tropische smaak met natuurlijke voedingskracht.",
      tags: ["Weerstand", "Antioxidant", "Energie"],
      image: chiaZuurzak,
    },
    {
      id: 3,
      name: "Cleanse & Heal",
      description:
        "Onze 3-daagse combo ondersteunt je lichaam bij zuivering en herstel, met een zorgvuldig samengestelde combinatie van gember, aloë en kurkuma.",
      tags: ["Detox", "Herstel", "Energie", "Superfood"],
      image: cleanseHeal,
    },
    {
      id: 4,
      name: "Gember shots",
      description:
        "Onze gembershots combineren gember, kurkuma en limoen voor een krachtige, natuurlijke ondersteuning van je lichaam.",
      tags: ["Ontstekingsremmend", "Detox", "Weerstand", "Energie"],
      image: gember,
    },
  ];

  return (
    <section id="menu" className="bg-white px-6 md:px-20 py-20 text-center">
      {/* Titel */}
      <div className="mb-12">
        <h2 className="mt-4 md:mt-5 text-xl md:text-2xl text-tealBrand mb-4">
          Onze Signature Blends
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Onze best verkochte smoothies en combos!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {smoothies.map((smoothie, index) => (
          <motion.div
            key={smoothie.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Afbeelding */}
            <div className="w-full aspect-w-1 aspect-h-1 relative rounded-t-2xl overflow-hidden">
              <img
                src={smoothie.image}
                alt={smoothie.name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Tekst onder afbeelding */}
            <div className="p-4 md:p-6 space-y-2 text-left">
              <h3 className="text-md md:text-md text-gray-600">
                {smoothie.name}
              </h3>
              <p className="text-gray-700 text-sm md:text-sm">
                {smoothie.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {smoothie.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-green-600 text-xs rounded-full bg-green-100 font-medium"
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
