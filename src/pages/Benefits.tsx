import { BiSolidLeaf } from "react-icons/bi";
import smear from "../assets/lybMenu/smear.png";
import fruitrow from "../assets/benefits/fruitrow.png";

export default function Benefits() {
    return (
        <section
            id="menu"
            className="pt-28 md:pt-36 py-14 bg-gradient-to-b from-white via-green-100 to-green-100/50 min-h-screen bg-white text-sm overflow-x-hidden"
        >
            <h1 className="w-full pt-4 pb-2 text-center">Benefits</h1>
            <img src={fruitrow}
            className="w-full object-contain scale-110"
            />

            <div className="py-14 flex flex-col gap-12 px-6">

                {/* Elektrolyten */}
                <div className="mb-4">
                    <h3 className="text-center">
                        Elektrolyten – Hydratatie & herstel
                    </h3>
                    <img
                        src={smear}
                        className="w-full h-5px pb-3" />

                    <p className="body-text">
                        Elektrolyten helpen je lichaam vocht vast te houden, spieren te laten werken en vermoeidheid te verminderen.
                        <br></br>Ze zijn essentieel bij warmte, beweging en lange dagen.
                    </p>

                    <p className="body-text font-semibold pt-4 pb-2">
                        Ingrediënten die hieraan bijdragen
                    </p>
                    <ul className="flex flex-col gap-1">
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
                    </ul>
                    <p className="body-text font-semibold pt-4 pb-2">
                        Combinatie-effect
                    </p>
                    <p className="body-text">
                        Fruit + chia + citrus = snelle én langdurige hydratatie
                    </p>
                </div>

                {/* Antioxidanten */}
                <div className="mb-4">
                    <h3 className="text-center">
                        Antioxidanten – Bescherming & herstel van binnenuit
                    </h3>
                    <img
                        src={smear}
                        className="w-full h-5px pb-3" />

                    <p className="body-text">
                        Antioxidanten beschermen je cellen tegen stress (zoals vermoeidheid, drukte, slechte voeding) en ondersteunen herstel.
                    </p>

                    <p className="body-text font-semibold pt-4 pb-2">
                        Ingrediënten die hieraan bijdragen
                    </p>
                    <ul className="flex flex-col gap-1">
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
                    </ul>
                    <p className="body-text font-semibold pt-4 pb-2">
                        Combinatie-effect
                    </p>
                    <p className="body-text">
                        Donker fruit + kruiden = bredere bescherming (synergie)
                    </p>
                </div>

                {/* Herstel */}
                <div className="mb-4">
                    <h3 className="text-center">
                        Herstel – Ondersteuning van spieren & lichaam
                    </h3>
                    <img
                        src={smear}
                        className="w-full h-5px pb-3" />

                    <p className="body-text">
                        Herstel gaat over ontspanning, doorbloeding en het verminderen van spanning in je lichaam.
                    </p>

                    <p className="body-text font-semibold pt-4 pb-2">
                        Ingrediënten die hieraan bijdragen
                    </p>
                    <ul className="flex flex-col gap-1">
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
                    </ul>
                    <p className="body-text font-semibold pt-4 pb-2">
                        Combinatie-effect
                    </p>
                    <p className="body-text">
                        Kurkuma + zwarte peper + vet (avocado) = veel betere opname
                    </p>
                </div>

                {/* Spijsvertering */}
                <div className="mb-4">
                    <h3 className="text-center">
                        Spijsvertering – Rust in je buik
                    </h3>
                    <img
                        src={smear}
                        className="w-full h-5px pb-3" />

                    <p className="body-text">
                        Een goede spijsvertering zorgt voor meer energie, betere opname van voedingsstoffen en minder opgeblazen gevoel.
                    </p>

                    <p className="body-text font-semibold pt-4 pb-2">
                        Ingrediënten die hieraan bijdragen
                    </p>
                    <ul className="flex flex-col gap-1">
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
                    </ul>
                    <p className="body-text font-semibold pt-4 pb-2">
                        Combinatie-effect
                    </p>
                    <p className="body-text">
                        Enzymen + bitter + fris = activerend maar zacht voor de maag
                    </p>
                </div>

                {/* Energie */}
                <div className="mb-4">
                    <h3 className="text-center">
                        Energie – Stabiele energie zonder crash
                    </h3>
                    <img
                        src={smear}
                        className="w-full h-5px pb-3" />

                    <p className="body-text">
                        Energie uit smoothies komt uit natuurlijke suikers, vezels en mineralen — geen pieken en dalen.
                    </p>

                    <p className="body-text font-semibold pt-4 pb-2">
                        Ingrediënten die hieraan bijdragen
                    </p>
                    <ul className="flex flex-col gap-1">
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
                    </ul>
                    <p className="body-text font-semibold pt-4 pb-2">
                        Combinatie-effect
                    </p>
                    <p className="body-text">
                        Fruit + vezels + vet = langdurige energie
                    </p>
                </div>

                {/* Weerstand */}
                <div className="mb-4">
                    <h3 className="text-center">
                        Weerstand – Dagelijkse ondersteuning
                    </h3>
                    <img
                        src={smear}
                        className="w-full h-5px pb-3" />

                    <p className="body-text">
                        Weerstand gaat niet alleen over ziek zijn, maar over hoe sterk je lichaam dagelijks reageert op stress.
                    </p>

                    <p className="body-text font-semibold pt-4 pb-2">
                        Ingrediënten die hieraan bijdragen
                    </p>
                    <ul className="flex flex-col gap-1">
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
                    </ul>
                    <p className="body-text font-semibold pt-4 pb-2">
                        Combinatie-effect
                    </p>
                    <p className="body-text">
                        Vitamine C + mineralen + kruiden = dagelijkse bescherming
                    </p>
                </div>
            </div>

        </section>
    );
}
