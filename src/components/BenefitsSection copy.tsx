// "use client";

// import { motion } from "framer-motion";
// import heartIcon from "../assets/benefitsSection/heart-attack.png";
// import storeIcon from "../assets/benefitsSection/stand.png";
// import shieldIcon from "../assets/benefitsSection/immune-booster.png";
// import leafIcon from "../assets/benefitsSection/leaf.png";

// export default function BenefitsSection() {
//   const benefits = [
//     {
//       id: 1,
//       icon: (
//         <img src={heartIcon} alt="Gezond hart" className="w-12 h-12 mb-4" />
//       ),
//       title: "Gezond hart",
//       description:
//         "Rijk aan antioxidanten en voedingsstoffen die de gezondheid van het hart ondersteunen.",
//     },
//     {
//       id: 2,
//       icon: (
//         <img src={storeIcon} alt="Gezond hart" className="w-12 h-12 mb-4" />
//       ),
//       title: "Lokale leveranciers",
//       description:
//         "Wij ondersteunen onze lokale markt en werken samen met fruit- en groentetelers.",
//     },
//     {
//       id: 3,
//       icon: (
//         <img src={shieldIcon} alt="Gezond hart" className="w-12 h-12 mb-4" />
//       ),
//       title: "Weerstand boost",
//       description:
//         "Boordevol vitamine C en E om de weerstand van je lichaam te versterken.",
//     },
//     {
//       id: 4,
//       icon: <img src={leafIcon} alt="Gezond hart" className="w-12 h-12 mb-4" />,
//       title: "100% Natuurlijk",
//       description:
//         "Geen kunstmatige toevoegingen, conserveringsmiddelen of geraffineerde suikers.",
//     },
//   ];

//   return (
//     <motion.section
//       id="benefits"
//       className="py-20 px-6 md:px-[20%] text-center"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       {/* Titel */}
//       <div className="mb-12">
//         <h2 className="text-md text-tealBrand mb-4 px-[10%] md:px-0">
//           Wat is bijzonder aan onze juices en smoothies?
//         </h2>
//       </div>

//       {/* Grid met voordelen */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
//         {benefits.map((benefit, index) => (
//           <motion.div
//             key={benefit.id}
//             className="p-4 md:p-6 flex flex-col items-center justify-start transition-all duration-300"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             {benefit.icon}
//             <h3 className="text-sm md:text-md text-gray-600 mb-2">
//               {benefit.title}
//             </h3>
//             <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
//               {benefit.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }
