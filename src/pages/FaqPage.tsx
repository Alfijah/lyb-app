import { useState } from "react";
import SectionWrapper from "../animations/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import faqHero from "../assets/faqPage/preparation.png";

type FaqItemType = {
  question: string;
  answer: string;
};

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export const faqItems: FaqItemType[] = [
  {
    question: "Hoe kan ik een bestelling plaatsen?",
    answer:
      "Je kunt eenvoudig een bestelling plaatsen door contact met ons op te nemen via WhatsApp of onze social media kanalen. Wij helpen je daarna direct verder met de beschikbare smaken en de bezorging in Paramaribo.",
  },
  {
    question: "Levert LYB in heel Paramaribo?",
    answer:
      "Ja, LYB levert door heel Paramaribo. De bezorgkosten en tijden kunnen variëren per locatie. Neem contact met ons op om de specifieke bezorgopties voor jouw adres te bespreken.",
  },
  {
    question: "Zijn de juices en smoothies vers bereid?",
    answer:
      "Absoluut. Onze juices en smoothies worden dagelijks vers bereid met 100% natuurlijke ingrediënten. We gebruiken geen conserveringsmiddelen, waardoor de versheid en kwaliteit optimaal blijven.",
  },
  {
    question: "Bevatten de producten toegevoegde suikers?",
    answer:
      "Nee, wij voegen geen geraffineerde suikers toe. De zoetheid komt puur uit het verse fruit dat we gebruiken. Voor specifieke vragen over ingrediënten bij detoxkuren kun je ons altijd een bericht sturen.",
  },
  {
    question: "Hoe lang kan ik de sappen bewaren?",
    answer:
      "Omdat onze producten vers en zonder toevoegingen zijn, adviseren we ze direct gekoeld te bewaren. De meeste juices blijven 2 tot 3 dagen goed, maar voor de beste smaakbeleving raden we aan ze zo snel mogelijk te consumeren.",
  },
  {
    question: "Bieden jullie ook detox- of sapvastenkuren aan?",
    answer:
      "Ja, wij zijn gespecialiseerd in detoxopties en meerdaagse sappenkuren. Je kunt kiezen uit kuren van 1, 3, 5 of 7 dagen. Neem contact met ons op voor een advies op maat en de actuele prijzen.",
  },
  {
    question: "Kan ik hulp krijgen bij het kiezen van een kuur of smaak?",
    answer:
      "Zeker! Elk lichaam is anders. We adviseren je graag via WhatsApp over welke juice of smoothie het beste past bij jouw persoonlijke doelen, of dat nu energie, herstel of reiniging is.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-gray-300 py-4">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left group transition-colors"
        aria-expanded={isOpen}
      >
        <span className={`body-text font-semibold transition-colors ${isOpen ? "text-bioGreen" : "text-gray-800"}`}>
          {question}
        </span>
        <span
          className={`text-2xl font-light transition-transform duration-300 ${
            isOpen ? "rotate-45 text-bioGreen" : "text-gray-400"
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-3 body-text text-gray-600 leading-relaxed max-w-4xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="relative w-full bg-neutral-50 overflow-x-hidden">
      
      {/* 1. HERO IMAGE: Consistent met About & Benefits */}
      <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] overflow-hidden">
        <img
          src={faqHero}
          // fetchpriority="high"
          alt="Vers bereide groene sappen en smoothies voorbereiding"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. CONTENT SECTIE */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <SectionWrapper>
          <div className="mb-10">
            <motion.p 
              variants={fadeInUp} 
              className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-darkYellow"
            >
              FAQ
            </motion.p>

            <motion.h1 
              variants={fadeInUp} 
              className="text-3xl md:text-4xl font-bold pb-4 border-b-2 border-gray-200"
            >
              Veelgestelde vragen
            </motion.h1>

            <motion.p 
              variants={fadeInUp} 
              className="mt-6 body-text max-w-2xl"
            >
              Hier vind je antwoorden op de meest gestelde vragen over onze juices,
              smoothies en detoxopties in Suriname. Staat je vraag er niet tussen? 
              Stuur ons gerust een bericht.
            </motion.p>
          </div>
        </SectionWrapper>

        {/* FAQ LIJST */}
        <SectionWrapper>
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm border border-gray-100">
            {faqItems.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </SectionWrapper>
      </div>
    </main>
  );
}