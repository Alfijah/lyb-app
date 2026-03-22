import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import verifyIcon from "../assets/benefitsSection/verify.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      icon: verifyIcon,
      title: "Puur & Gezond",
      alt: "verificatie icon",
      text: "Bevat boordevol vitaminen en mineralen."
    },
    {
      id: 2,
      icon: verifyIcon,
      title: "Premium Kwaliteit",
      alt: "verificatie icon",
      text: "Geen additieven, altijd vers bereid."
    },
    {
      id: 3,
      icon: verifyIcon,
      title: "Duurzaam",
      alt: "verificatie icon",
      text: "Focus op lokale inkoop."
    },
    {
      id: 4,
      icon: verifyIcon,
      title: "Gemak",
      alt: "verificatie icon",
      text: "Thuis of op kantoor bezorgd."
    }
  ];

  return (
    <section
      id="benefits"
      className="relative z-10 max-w-screen-3xl bg-stone-50 mx-auto md:pt-16 px-6 sm:px-20 md:px-12 lg:px-14"
    >
      {/* Wave Top - Decoratief element (verborgen voor screenreaders) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[60px] md:h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L0,0Z"
            className="fill-bgColor"
          ></path>
        </svg>
      </div>

      {/* Titel & SEO Content */}
      <SectionWrapper className="mb-4 text-left">
        <motion.h2
          variants={fadeInUp}
          className="max-w-screen-lg mx-auto text-md lg:text-left mb-4 lg:pb-2 pt-24 sm:pt-28 md:pt-16 xl:pt-24"
        >
          Wat is bijzonder aan de <span className="text-bioGreen">juices en smoothies</span> van LYB?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="max-w-screen-lg mx-auto body-text lg:text-left"
        >
          Onze juices en smoothies bestaan uit <span className="exceptionText font-semibold">creatieve combinaties</span> en worden gemaakt van <span className="exceptionText font-semibold">pure ingrediënten</span> die jouw lichaam ondersteunen. Geen kunstmatige toevoegingen; alleen wat goed is voor jou.
        </motion.p>
      </SectionWrapper>

      {/* Voordelen Grid - Geoptimaliseerd voor verschillende schermen */}
      <SectionWrapper className="relative w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:px-4">
        {benefits.map((benefit) => (
          <motion.article
            key={benefit.id}
            variants={fadeInUp}
            className="relative flex flex-row items-center overflow-hidden"
          >
            {/* Icoon Container */}
            <div className="z-20 w-[70px] shrink-0 p-2 flex items-center justify-center">
              <img
                src={benefit.icon}
                alt={benefit.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Tekst Container */}
            <div
              className="z-10 flex-1 py-4 pr-4 pl-2 text-left">
                <h3>
                  {benefit.title}
                </h3>
              <p
                className="body-text pt-2 leading-tight text-sm">
                {benefit.text}
              </p>
            </div>
          </motion.article>
        ))}
      </SectionWrapper>
    </section>
  );
}