import { motion } from "framer-motion";
import { container } from "./Varianten";

type SectionWrapperProps = {
  children: React.ReactNode;
  amount?: number;     // Hoeveel % van de sectie in beeld moet zijn
  className?: string;
  immediate?: boolean; // Voor secties boven de vouw (Hero)
  delay?: number;      // Optionele extra vertraging
};

export default function SectionWrapper({
  children,
  amount = 0.1,        // Verlaagd van 0.25 naar 0.1 voor betere mobiele responsiviteit
  className = "",
  immediate = false,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      // Als immediate true is (voor de Hero), start de animatie direct.
      // Anders wacht hij tot hij in de viewport komt.
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      // once: true is essentieel voor SEO en performance (stopt met luisteren na animatie)
      viewport={immediate ? undefined : { once: true, amount }}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}