import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import SectionWrapper from "../animations/SectionWrapper";

export default function FaqTeaser() {
  return (
    <section className="px-6 py-10 md:px-12 lg:px-12 w-full">
      <SectionWrapper>
        <div className="mx-auto max-w-5xl py-12 border-t-2 border-b-2 border-bgColor text-left">
          
          {/* Label: Consistent met SEO-structuur */}
          <motion.p 
            variants={fadeInUp}
            className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-darkYellow"
          >
            FAQ
          </motion.p>

          {/* Titel */}
          <motion.h2 
            variants={fadeInUp}
            className="max-w-screen-lg mx-auto md:mx-0 font-bold"
          >
            Heb je vragen?
          </motion.h2>

          {/* Body tekst met geoptimaliseerde link */}
          <motion.p 
            variants={fadeInUp}
            className="mt-4 max-w-screen-lg mx-auto md:mx-0 body-text"
          >
            Lees meer over bestellen, levering, versheid en detoxopties op onze&nbsp;
            <Link
              to="/faq"
              className="underline font-semibold hover:opacity-80 transition-opacity"
              aria-label="Bekijk de veelgestelde vragen op onze FAQ-pagina"
            >
              FAQ-pagina.
            </Link>
          </motion.p>
          
        </div>
      </SectionWrapper>
    </section>
  );
}