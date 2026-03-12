import { useState } from "react";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";

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
      "Je kunt eenvoudig een bestelling plaatsen door contact met ons op te nemen via WhatsApp of social media. Wij helpen je daarna verder met de beschikbare opties en levering.",
  },
  {
    question: "Levert LYB in Paramaribo?",
    answer:
      "Ja, LYB levert in Paramaribo. Neem contact met ons op om te controleren welke bezorgopties momenteel beschikbaar zijn voor jouw locatie.",
  },
  {
    question: "Zijn de juices en smoothies vers bereid?",
    answer:
      "Ja, onze juices en smoothies worden vers bereid met natuurlijke ingrediënten. We vinden smaak, versheid en kwaliteit erg belangrijk.",
  },
  {
    question: "Bevatten jullie producten toegevoegde suikers?",
    answer:
      "Wij werken zoveel mogelijk met natuurlijke ingrediënten. Neem gerust contact met ons op als je meer wilt weten over een specifieke smoothie, juice of detoxoptie.",
  },
  {
    question: "Hoe lang blijven de juices en smoothies goed?",
    answer:
      "We adviseren om onze juices en smoothies gekoeld te bewaren en zo vers mogelijk te consumeren voor de beste smaak en kwaliteit.",
  },
  {
    question: "Hebben jullie ook detox of sapvasten opties?",
    answer:
      "Ja, LYB biedt ook detoxopties en sappenkuren aan. Neem contact met ons op voor de actuele mogelijkheden, inhoud en prijzen.",
  },
  {
    question: "Welke smaken staan op het menu?",
    answer:
      "Wij bieden verschillende juices en smoothies aan. Bekijk onze menupagina of neem contact met ons op voor het actuele aanbod.",
  },
  {
    question: "Kan ik hulp krijgen bij het kiezen van een smoothie of juice?",
    answer:
      "Ja, zeker. We helpen je graag bij het kiezen van een smoothie of juice die past bij jouw smaak en voorkeuren.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-gray-500 py-2">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="max-w-screen-lg body-text">
          {question}
        </span>

        <span
          className={`text-2xl text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <p className="mt-3 max-w-3xl leading-7 body-text">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-orange-100 px-6 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl rounded-[32px] p-0 md:p-10">
        <SectionWrapper>
          <motion.p variants={fadeInUp} className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-darkYellow">
            FAQ
          </motion.p>

          <motion.h2 variants={fadeInUp} className="max-w-screen-lg mx-auto text-md">
            Veelgestelde vragen
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-4 max-w-screen-lg mx-auto body-text">
            Hier vind je antwoorden op veelgestelde vragen over onze juices,
            smoothies en detoxopties.
          </motion.p>
        </SectionWrapper>

        <div>
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
      </div>
    </section>
  );
}