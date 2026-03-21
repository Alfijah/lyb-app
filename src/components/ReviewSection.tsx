import { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import review1 from "../assets/reviewsSection/review1.jpg";
import review2 from "../assets/reviewsSection/review2.jpg";
import review3 from "../assets/reviewsSection/review3.jpg";
import review4 from "../assets/reviewsSection/review4.jpg";
import review5 from "../assets/reviewsSection/review5.jpg";
import review6 from "../assets/reviewsSection/review6.jpg";
import review7 from "../assets/reviewsSection/review7.jpg";
import review8 from "../assets/reviewsSection/review8.jpg";
import fruitBg from "../assets/fluidButton.png";
import groupLyb from "../assets/reviewsSection/lybGroup.png";
import SectionWrapper from "../animations/SectionWrapper";

const reviews = [
  { id: 1, image: review1, alt: "Review van klant over verse sappen Love Your Body" },
  { id: 2, image: review2, alt: "Ervaring met detox sapkuur Paramaribo" },
  { id: 3, image: review3, alt: "Klantbeoordeling gezonde smoothies Suriname" },
  { id: 4, image: review4, alt: "Love Your Body klantervaring gezond leven" },
  { id: 5, image: review5, alt: "Review natuurlijke energieboost sappen" },
  { id: 6, image: review6, alt: "Beoordeling versheid smoothies LYB" },
  { id: 7, image: review7, alt: "Klantverhaal over resultaten sapkuur" },
  { id: 8, image: review8, alt: "Ervaring met dagelijkse verse levering smoothies" },
];

export default function ReviewSection() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  if (inView) controls.start({ opacity: 1, y: 0 });

  const handleNext = () => setIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section
      ref={ref}
      id="reviews"
      className="relative max-w-screen-3xl flex flex-col pb-14 py-14 md:py-20 overflow-hidden z-0"
    >
      {/* Background Layers */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat z-0 pointer-events-none"
        style={{ backgroundImage: `url(${groupLyb})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white z-10 pointer-events-none" aria-hidden="true" />

      <div className="relative z-20 w-full max-w-screen-lg mx-auto px-6 md:px-12 lg:px-0">
        <SectionWrapper className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* TEXT SECTIE: 60% op desktop voor betere leesbaarheid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[60%] text-center"
          >
            <motion.h2 className="mb-4 font-bold text-3xl md:text-4xl lg:text-left">
              Ervaringen van LYB klanten
            </motion.h2>
            <motion.p className="body-text lg:text-left max-w-xl">
              Meer dan <span className="exceptionText font-semibold">2250 tevreden klanten</span> in Paramaribo gingen je voor. Gezonder leven doe je niet alleen; wij helpen je graag op weg naar een vitale levensstijl.
            </motion.p>
          </motion.div>

          {/* CAROUSEL SECTIE: 40% op desktop */}
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] flex flex-col items-center gap-6">
            
            {/* Carousel Rij: Buttons + Slider */}
            <div className="flex items-center justify-center w-full gap-2 sm:gap-4">
              
              {/* Ronde Button Links */}
              <button
                onClick={handlePrev}
                style={{ backgroundImage: `url(${fruitBg})` }}
                aria-label="Vorige review"
                className="shrink-0 w-10 h-10 rounded-full bg-cover bg-center text-white shadow-md hover:scale-110 active:scale-95 transition-all flex items-center justify-center z-30 focus:ring-2 focus:ring-bioGreen focus:ring-offset-2"
              >
                <span className="mb-0.5 mr-0.5 text-lg font-bold">{"<"}</span>
              </button>

              {/* Slider Venster met Drag Support */}
              <div className="grow overflow-hidden rounded-2xl bg-white shadow-sm border border-orange-50">
                <motion.div
                  className="flex cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50) handleNext();
                    if (info.offset.x > 50) handlePrev();
                  }}
                  animate={{ x: `-${index * 100}%` }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                >
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="min-w-full flex items-center justify-center p-4 sm:p-6"
                    >
                      <img
                        src={review.image}
                        alt={review.alt}
                        loading="lazy"
                        className="rounded-xl object-contain w-full h-auto pointer-events-none select-none drop-shadow-sm"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Ronde Button Rechts */}
              <button
                onClick={handleNext}
                style={{ backgroundImage: `url(${fruitBg})` }}
                aria-label="Volgende review"
                className="shrink-0 w-10 h-10 rounded-full bg-cover bg-center text-white shadow-md hover:scale-110 active:scale-95 transition-all flex items-center justify-center z-30 focus:ring-2 focus:ring-bioGreen focus:ring-offset-2"
              >
                <span className="mb-0.5 ml-0.5 text-lg font-bold">{">"}</span>
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ga naar review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-1 rounded-full transition-all duration-300 ${
                    i === index ? "bg-bioGreen scale-125 shadow-sm" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

        </SectionWrapper>
      </div>
    </section>
  );
}