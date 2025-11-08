"use client";

import { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import type { PanInfo } from "framer-motion";

// Importeer je review-afbeeldingen
import review1 from "../assets/reviewsSection/review1.jpg";
import review2 from "../assets/reviewsSection/review2.jpg";
import review3 from "../assets/reviewsSection/review3.jpg";
import review4 from "../assets/reviewsSection/review4.jpg";
import review5 from "../assets/reviewsSection/review5.jpg";
import review6 from "../assets/reviewsSection/review6.jpg";
import review7 from "../assets/reviewsSection/review7.jpg";
import review8 from "../assets/reviewsSection/review8.jpg";

const reviews = [
  { id: 1, image: review1 },
  { id: 2, image: review2 },
  { id: 3, image: review3 },
  { id: 4, image: review4 },
  { id: 5, image: review5 },
  { id: 6, image: review6 },
  { id: 7, image: review7 },
  { id: 8, image: review8 },
];

export default function ReviewSection() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  if (inView) controls.start({ opacity: 1, y: 0 });

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) handleNext();
    else if (info.offset.x > 50) handlePrev();
  };

  return (
    <section
      ref={ref}
      id="reviews"
      className="relative flex flex-col items-center justify-center py-10 md:py-14 bg-gradient-to-b from-white via-green-100 to-green-50 overflow-hidden"
    >
      {/* Titel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-md text-tealBrand mb-4">Wat onze klanten zeggen</h2>
        <p className="text-gray-600 text-xs md:text-sm px-[15%] md:px-0">
          Ervaringen van onze klanten die genieten van onze juices en smoothies.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl overflow-hidden px-6">
        {/* Pijlen */}
        <button
          onClick={handlePrev}
          className="absolute left-5 md:left-20 top-1/2 -translate-y-1/2 bg-green-600/30 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-green-700/60"
        >
          &lt;
        </button>

        <button
          onClick={handleNext}
          className="absolute right-5 md:right-20 top-1/2 -translate-y-1/2 bg-green-600/30 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-green-700/60"
        >
          &gt;
        </button>

        {/* Kaarten */}
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="min-w-full flex items-center justify-center px-4"
            >
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] flex items-center justify-center">
                <img
                  src={review.image}
                  alt={`Review ${review.id}`}
                  className="rounded-xl object-contain w-80 h-auto pointer-events-none select-none"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-2 space-x-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
