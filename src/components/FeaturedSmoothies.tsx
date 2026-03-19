import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import podosiri from "../assets/featuredSmoothies/acaiN1.png";
import chiaZuurzak from "../assets/featuredSmoothies/soursopN1.png";
import cleanseHeal from "../assets/featuredSmoothies/greenResetN1.png";
import fruitBg from "../assets/fluidButton.png";
import SectionWrapper from "../animations/SectionWrapper";
import WipeButton from "./tools/Button";

export default function FeaturedSmoothies() {
  const smoothies = [
    {
      id: 1,
      name: "Açaí Royale",
      alt: "Verse podosiri sap met bacove en kers - Love Your Body Suriname",
      tag: "podosiri - bacove - kers",
      description:
        "Ondersteunt het lichaam bij spierwerking en het vasthouden van een stabiel energieniveau.",
      tags: ["Weerstand", "Energie", "Spijsvertering"],
      image: podosiri,
    },
    {
      id: 2,
      name: "Soursop Breeze",
      alt: "Verse zuurzak sap met chiazaadjes - Love Your Body Suriname",
      tag: "zuurzak - chiazaadjes",
      description:
        "Ondersteunt hydratatie en een verzadigd gevoel dankzij vezels en natuurlijke mineralen.",
      tags: ["Weerstand", "Antioxidant", "Energie"],
      image: chiaZuurzak,
    },
    {
      id: 3,
      name: "Green Reset",
      alt: "Groene smoothie met zuurzak, sopropo en moringa - Love Your Body Suriname",
      tag: "sopropo - zuurzak - moringa",
      description:
        "Rijk aan antioxidanten en perfect voor een natuurlijke energieboost.",
      tags: ["Reiniging", "Weerstand", "Energie"],
      image: cleanseHeal,
    },
  ];

  return (
    <section id="menu" className="bg-gradient-to-b from-bioGreen/40 via-bioGreen/10 to-white max-w-screen-3xl mx-auto lg:px-8 xl:px-10 py-10 md:py-16 pb-8 sm:pb-10 md:pb-6 xl:pb-8 text-center">
      {/* Titel & SEO intro */}
      <SectionWrapper className="pb-4">
        <motion.h2 variants={fadeInUp} className="text-md mb-4 lg:pb-0 px-6 sm:px-8">
          Onze Signature Blends
        </motion.h2>
        <motion.p variants={fadeInUp} className="body-text px-6 sm:px-20 md:px-44 max-w-4xl mx-auto">
          Onze <span className="exceptionText font-semibold">meest gekozen</span> smoothies in Paramaribo. Vers, voedzaam en geliefd door onze klanten.
        </motion.p>
      </SectionWrapper>

      {/* Cards Grid: Verbeterde responsiviteit */}
      <div className="relative mx-auto max-w-screen-2xl grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-6 lg:gap-4 2xl:gap-6 lg:pt-6 xl:pt-0 px-6 sm:px-24 md:px-44 lg:px-8 xl:px-12 2xl:px-20">
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
              className="w-full h-auto object-contain scale-110 rounded-t-xl"
            />

            {/* Content Card: Hoogte-optimalisatie voor grid-alignment */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col flex-1 w-full px-4 md:px-6 py-6 space-y-1 text-left shadow-sm border-x-2 border-b-2 border-bioGreen rounded-b-xl bg-transparent"
            >
              <div className="flex-1 flex flex-col space-y-1">
                <p className="body-text italic">
                  <b>{smoothie.tag}</b>
                </p>
                <p className="body-text text-left leading-relaxed">
                  {smoothie.description}
                </p>
              </div>

              {/* Tags: Semantisch verbeterd */}
              <div className="flex flex-wrap justify-left gap-2 py-2">
                {smoothie.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-bioGreen text-[10px] tracking-widest uppercase font-semibold rounded-full bg-transparant border-1 border-bioGreen"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-full flex justify-between">
                {/* <p className="body-text font-extrabold tracking-tighter">
                  350 ml
                </p> */}
                <p className="flex items-center bestSellerPrice">
                  SRD 115
                </p>
                <WipeButton
                  href="https://wa.me/5978531071"
                  external
                  style={{ backgroundImage: `url(${fruitBg})` }}
                  className="body w-full max-w-[240px] mx-auto bg-cover bg-center text-white"
                >
                  Bestel Nu
                </WipeButton>
              </div>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </section>
  );
}