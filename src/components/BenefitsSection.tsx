"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import elektrolytes from "../assets/benefitsSection/elektrolytes.png";
import antioxidant from "../assets/benefitsSection/antioxidant.png";
import ontsteking from "../assets/benefitsSection/ontsteking.png";
import spijsvertering from "../assets/benefitsSection/spijsvertering.png";
import energie from "../assets/benefitsSection/energie.png";
import weerstand from "../assets/benefitsSection/weerstand.png";
import plantsPixar from "../assets/benefitsSection/herbs.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      icon: (
        <img src={elektrolytes} alt="elektrolytes" className="" />
      ),
      title: "Elektrolyten",
      bgColor: "bg-[#d1e06c]",
      textColor: "text-[#867F7F]",
      text: "Natuurlijke elektrolyten ondersteunen hydratatie, spierherstel en energie; ideaal voor een actieve levensstijl."
    },
    {
      id: 2,
      icon: (
        <img src={antioxidant} alt="antioxidant" />
      ),
      title: "Antioxidanten",
      bgColor: "bg-[#fddb2a]",
      textColor: "text-[#867F7F]",
      text: "Antioxidanten helpen je cellen beschermen, versterken je weerstand en ondersteunen een energiek gevoel."
    },
    {
      id: 3,
      icon: (
        <img src={ontsteking} alt="ontstekingremmend" />
      ),
      title: "Herstel",
      bgColor: "bg-[#f9d956]",
      textColor: "text-[#867F7F]",
      text: "Essentiële vitamines, mineralen en natuurlijke suikers ondersteunen spierherstel en energieaanvulling na een drukke dag."
    },
    {
      id: 4,
      icon: <img src={spijsvertering} alt="spijsvertering" />,
      title: "Spijsvertering",
      bgColor: "bg-[#dae584]",
      textColor: "text-[#ffffff]",
      text: "Vezelrijke smoothies ondersteunen een gezonde spijsvertering en helpen je lichaam natuurlijk in balans te blijven."
    },
    {
      id: 5,
      icon: (
        <img src={energie} alt="energie" />
      ),
      title: "Energie",
      bgColor: "bg-[#e3ec9b]",
      textColor: "text-[#867F7F]",
      text: "De natuurlijke energie uit fruit zorgt voor een stabiel energieniveau zonder plotselinge suikerdips gedurende de dag."
    },
    {
      id: 6,
      icon: <img src={weerstand} alt="weerstand" />,
      title: "Weerstand",
      bgColor: "bg-[#e6ec9e]",
      textColor: "text-[#ffffff]",
      text: "Rijk aan vitamine C, antioxidanten en essentiële voedingsstoffen ondersteunen je weerstand en een gezond immuunsysteem."
    },
  ];

  return (
    <section
      id="benefits"
      className="relative z-10 max-w-screen-3xl bg-gradient-to-b from-orange-100 via-orange-100 to-white mx-auto pb-14 md:py-16 px-6 md:px-8 lg:px-12 text-center">

      <img
        src={plantsPixar}
        alt="hangende plant"
        className="absolute top-0 inset-x-0 mx-auto w-[40%] h-auto -mt-12 pointer-events-none select-none"
      />

      {/* Titel */}
      <SectionWrapper className="mb-4">
        <motion.h1 variants={fadeInUp} className="max-w-screen-lg mx-auto text-md text-tealBrand mb-4 lg:pb-6 pt-20 sm:pt-28 md:pt-16 xl:pt-24">
          Gezond leven begint met natuurlijke voeding
        </motion.h1>
        <motion.p variants={fadeInUp} className="max-w-screen-lg mx-auto body-text sm:px-8 md:px-10 lg:px-28">
          Onze juices en smoothies worden gemaakt van <span className="exceptionText font-semibold">pure ingrediënten</span> die jouw lichaam ondersteunen. Geen kunstmatige toevoegingen; alleen wat goed is voor jou.
        </motion.p>
        <motion.h3 variants={fadeInUp} className="max-w-screen-lg mx-auto italic font-semibold pt-8 sm:px-8 md:px-10 lg:px-28">
          Waarom kiezen voor een gezonde smoothie van LYB?
        </motion.h3>
      </SectionWrapper>

      {/* voordelen */}
      <SectionWrapper className="relative w-full grid sm:grid-cols-2 lg:grid-cols-6 lg:px-12">
        {benefits.map((benefit) => (
          <motion.div variants={fadeInUp}
            className="relative w-ful flex flex-row items-center justify-between">
            <motion.div
              key={benefit.id}
              variants={fadeInUp}
              className="z-20 flex flex-col w-[38%] shrink-0 items-center justify-start transition-all">
              {benefit.icon}
            </motion.div>
            <motion.div variants={fadeInUp}
              className={`z-10 w-[80%] ${benefit.bgColor} rounded-lg shadow-md -ml-12 text-left flex items-center flex-1 pl-12 py-1 pr-1`}>
              {/* <motion.p variants={fadeInUp} className="body-text italic">
                {benefit.title}
              </motion.p> */}
              <motion.p variants={fadeInUp} className={`body-text !${benefit.textColor} italic`}
              style={{ color: benefit.textColor }}>
                {benefit.text}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </SectionWrapper>
    </section>
  );
}
