import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import SectionWrapper from "../animations/SectionWrapper";
import WipeButton from "../components/tools/Button";
import fruitBg from "../assets/fluidButton.webp";
import logo from "../assets/logo2.webp";

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-neutral-50 flex items-center justify-center text-center px-6">
      <SectionWrapper className="flex flex-col items-center">
        {/* Subtiel logo */}
        <motion.img 
          src={logo} 
          alt="LYB Logo" 
          className="h-16 w-auto mb-8 opacity-50"
          variants={fadeInUp}
        />

        <motion.h1 
          variants={fadeInUp}
          className="text-6xl md:text-8xl font-black text-bioGreen/20 mb-4"
        >
          404
        </motion.h1>

        <motion.h2 
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-bold mb-4 italic"
        >
          Oeps! Deze smoothie is even op...
        </motion.h2>

        <motion.p 
          variants={fadeInUp}
          className="body-text max-w-md mb-10"
        >
          De pagina die je zoekt lijkt te zijn weggeglipt. Geen zorgen, onze sappen op de homepage zijn wel gewoon vers beschikbaar!
        </motion.p>

        <motion.div variants={fadeInUp}>
          <WipeButton 
            to="/" 
            style={{ backgroundImage: `url(${fruitBg})` }}
            className="text-white shadow-md"
          >
            Terug naar de basis
          </WipeButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}