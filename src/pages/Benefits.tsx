import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import { BiSolidLeaf } from "react-icons/bi";
import smear from "../assets/lybMenu/smear.png";
import fruitrow from "../assets/benefits/fruitrow.png";
import SectionWrapper from "../animations/SectionWrapper";

export default function Benefits() {
    const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  
    return (
        <section
            id="menu"
            className="pt-28 md:pt-36 py-14 bg-gradient-to-b from-white via-green-100 to-green-100/50 min-h-screen bg-white text-sm overflow-x-hidden"
        >
            <h1 className="w-full pt-4 pb-2 text-center">Benefits</h1>
            <img src={fruitrow}
                className="w-full object-contain scale-110"
            />

            <div className="mx-auto pt-8 flex flex-col gap-12 px-6 md:px-8 xl:w-[90%]">

                {/* Elektrolyten */}
                <SectionWrapper className="mb-4">
                    <motion.h3 variants={fadeInUp} className="text-center">
                        Elektrolyten – Hydratatie & herstel
                    </motion.h3>
                    <motion.img
                        variants={fadeInUp}
                        src={smear}
                        className="w-full h-5px md:-mt-2 lg:-mt-4 xl:-mt-8 pb-3" />

                    <div className="mx-auto w-[92%]">
                        <motion.p variants={fadeInUp} className="body-text">
                            Elektrolyten helpen je lichaam vocht vast te houden, spieren te laten werken en vermoeidheid te verminderen.
                            <br></br>Ze zijn essentieel bij warmte, beweging en lange dagen.
                        </motion.p>

                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Ingrediënten die hieraan bijdragen
                        </motion.p>
                        <motion.ul variants={fadeInUp} className="flex flex-col gap-1">
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Ananas, limoen, komkommer → rijk aan water en mineralen</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Zuurzak, banaan → natuurlijke kaliumbron</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Chia → houdt vocht vast en geeft langdurige hydratatie</span>
                            </li>
                        </motion.ul>
                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Combinatie-effect
                        </motion.p>
                        <motion.p variants={fadeInUp} className="body-text">
                            Fruit + chia + citrus = snelle én langdurige hydratatie
                        </motion.p>
                    </div>
                </SectionWrapper>

                {/* Antioxidanten */}
                <SectionWrapper className="mb-4">
                    <motion.h3 variants={fadeInUp} className="text-center">
                        Antioxidanten – Bescherming & herstel van binnenuit
                    </motion.h3>
                    <motion.img variants={fadeInUp}
                        src={smear}
                        className="w-full h-5px md:-mt-2 lg:-mt-4 xl:-mt-8 pb-3" />

                    <div className="mx-auto w-[92%]">
                        <motion.p variants={fadeInUp} className="body-text">
                            Antioxidanten beschermen je cellen tegen stress (zoals vermoeidheid, drukte, slechte voeding) en ondersteunen herstel.
                        </motion.p>

                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Ingrediënten die hieraan bijdragen
                        </motion.p>
                        <motion.ul variants={fadeInUp} className="flex flex-col gap-1">
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Açaí, kers, framboos, aardbei, mango</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Hibiscus, kaneel, kruidnagel</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Zuurzak, passievrucht</span>
                            </li>
                        </motion.ul>
                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Combinatie-effect
                        </motion.p>
                        <motion.p variants={fadeInUp} className="body-text">
                            Donker fruit + kruiden = bredere bescherming (synergie)
                        </motion.p>
                    </div>
                </SectionWrapper>

                {/* Herstel */}
                <SectionWrapper className="mb-4">
                    <motion.h3 variants={fadeInUp} className="text-center">
                        Herstel – Ondersteuning van spieren & lichaam
                    </motion.h3>
                    <motion.img variants={fadeInUp}
                        src={smear}
                        className="w-full h-5px md:-mt-2 lg:-mt-4 xl:-mt-8 pb-3" />

                    <div className="mx-auto w-[92%]">
                        <motion.p variants={fadeInUp} className="body-text">
                            Herstel gaat over ontspanning, doorbloeding en het verminderen van spanning in je lichaam.
                        </motion.p>

                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Ingrediënten die hieraan bijdragen
                        </motion.p>
                        <motion.ul variants={fadeInUp} className="flex flex-col gap-1">
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Gember, kurkuma, cayennepeper</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Zwarte peper (activeert kurkuma)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Ananas (enzymen)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Avocado (vetten voor opname)</span>
                            </li>
                        </motion.ul>
                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Combinatie-effect
                        </motion.p>
                        <motion.p variants={fadeInUp} className="body-text">
                            Kurkuma + zwarte peper + vet (avocado) = veel betere opname
                        </motion.p>
                    </div>
                </SectionWrapper>

                {/* Spijsvertering */}
                <SectionWrapper className="mb-4">
                    <motion.h3 variants={fadeInUp} className="text-center">
                        Spijsvertering – Rust in je buik
                    </motion.h3>
                    <motion.img variants={fadeInUp}
                        src={smear}
                        className="w-full h-5px md:-mt-2 lg:-mt-4 xl:-mt-8 pb-3" />

                    <div className="mx-auto w-[92%]">

                        <motion.p variants={fadeInUp} className="body-text">
                            Een goede spijsvertering zorgt voor meer energie, betere opname van voedingsstoffen en minder opgeblazen gevoel.
                        </motion.p>

                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Ingrediënten die hieraan bijdragen
                        </motion.p>
                        <motion.ul variants={fadeInUp} className="flex flex-col gap-1">
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Papaja (enzymen), ananas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Bitter melon (sopropo)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Appelazijn</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Citroengras, basilicum, komkommer</span>
                            </li>
                        </motion.ul>
                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Combinatie-effect
                        </motion.p>
                        <motion.p variants={fadeInUp} className="body-text">
                            Enzymen + bitter + fris = activerend maar zacht voor de maag
                        </motion.p>
                    </div>
                </SectionWrapper>

                {/* Energie */}
                <SectionWrapper className="mb-4">
                    <motion.h3 variants={fadeInUp} className="text-center">
                        Energie – Stabiele energie zonder crash
                    </motion.h3>
                    <motion.img variants={fadeInUp}
                        src={smear}
                        className="w-full h-5px md:-mt-2 lg:-mt-4 xl:-mt-8 pb-3" />

                    <div className="mx-auto w-[92%]">
                        <motion.p variants={fadeInUp} className="body-text">
                            Energie uit smoothies komt uit natuurlijke suikers, vezels en mineralen — geen pieken en dalen.
                        </motion.p>

                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Ingrediënten die hieraan bijdragen
                        </motion.p>
                        <motion.ul variants={fadeInUp} className="flex flex-col gap-1">
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Banaan, mango, passievrucht</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Moringa (ijzer, magnesium)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Chia, avocado (vertragen suikeropname)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Spinazie</span>
                            </li>
                        </motion.ul>
                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Combinatie-effect
                        </motion.p>
                        <motion.p variants={fadeInUp} className="body-text">
                            Fruit + vezels + vet = langdurige energie
                        </motion.p>
                    </div>
                </SectionWrapper>

                {/* Weerstand */}
                <SectionWrapper className="mb-4">
                    <motion.h3 variants={fadeInUp} className="text-center">
                        Weerstand – Dagelijkse ondersteuning
                    </motion.h3>
                    <motion.img variants={fadeInUp}
                        src={smear}
                        className="w-full h-5px md:-mt-2 lg:-mt-4 xl:-mt-8 pb-3" />

                    <div className="mx-auto w-[92%]">
                        <motion.p variants={fadeInUp} className="body-text">
                            Weerstand gaat niet alleen over ziek zijn, maar over hoe sterk je lichaam dagelijks reageert op stress.
                        </motion.p>

                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Ingrediënten die hieraan bijdragen
                        </motion.p>
                        <motion.ul variants={fadeInUp} className="flex flex-col gap-1">
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Citrus (limoen, citroen)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Moringa (ijzer, magnesium)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Zuurzak</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Spinazie</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSolidLeaf className="text-bioGreen text-xl" />
                                <span className="body-text">Hibiscus, gember, kurkuma</span>
                            </li>
                        </motion.ul>
                        <motion.p variants={fadeInUp} className="body-text font-semibold pt-4 pb-2">
                            Combinatie-effect
                        </motion.p>
                        <motion.p variants={fadeInUp} className="body-text">
                            Vitamine C + mineralen + kruiden = dagelijkse bescherming
                        </motion.p>
                    </div>
                </SectionWrapper>

                {/* Disclaimer */}
                <div id="disclaimer" className="scroll-mt-32 lg:scroll-mt-42">
                    <SectionWrapper className="mb-4 bg-darkYellow/20 py-4">
                        <div className="mx-auto w-[92%] ">
                            <motion.p variants={fadeInUp} className="body-text font-semibold pb-2">
                                ⚠️ Disclaimer
                            </motion.p>
                            <motion.p variants={fadeInUp} className="body-text">
                                Bij LYB geloven we in de kracht van pure ingrediënten en krachtige combinaties. Veel van onze klanten ervaren positieve effecten, maar ieder lichaam is anders. De manier waarop smoothies worden ervaren kan per persoon verschillen. Onze producten zijn bedoeld als ondersteuning van een gezonde levensstijl en vervangen geen medisch advies.
                            </motion.p>
                        </div>
                    </SectionWrapper>
                </div>
            </div>

        </section>
    );
}
