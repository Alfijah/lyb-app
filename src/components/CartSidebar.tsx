import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../store/useCartStore";
import {
    IoCartOutline,
    IoCloseOutline,
    IoTrashOutline,
    IoLogoWhatsapp,
    IoBagHandleOutline,
    IoGiftOutline,
    IoAlertCircleOutline,
    IoSparklesOutline
} from "react-icons/io5";

interface ScratchModalProps {
    onComplete: () => void;
    onClose: () => void;
}
// --- SUBCOMPONENT: DE KRASKAART MODAL ---
function ScratchModal({ onComplete, onClose }: ScratchModalProps) {
    const [isScratched, setIsScratched] = useState(false);

    // We simuleren het krassen met een hover/touch beweging of simpelweg een klik op de "deklaag"
    const handleScratch = () => {
        if (!isScratched) {
            setIsScratched(true);
            setTimeout(() => {
                onComplete(); // Voeg item toe aan mandje
            }, 1000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                className="bg-white w-full max-w-[320px] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
                <div className="p-8 text-center">
                    <h3 className="font-black text-2xl italic text-gray-800 mb-2">KRAS & WIN!</h3>
                    <p className="text-gray-500 text-sm mb-6">Beweeg over de kaart om je cadeau te onthullen</p>

                    {/* Het kras-oppervlak */}
                    <div
                        className="relative w-full aspect-square bg-neutral-100 rounded-3xl overflow-hidden cursor-pointer"
                        onMouseEnter={handleScratch}
                        onTouchStart={handleScratch}
                    >
                        <AnimatePresence>
                            {!isScratched ? (
                                <motion.div
                                    exit={{ opacity: 0, scale: 1.2 }}
                                    className="absolute inset-0 bg-gradient-to-br from-bioGreen to-emerald-700 z-10 flex flex-col items-center justify-center text-white p-6"
                                >
                                    <IoGiftOutline size={60} className="mb-2 animate-bounce" />
                                    <span className="font-black uppercase tracking-widest text-xs">Kras hier!</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                                >
                                    <IoSparklesOutline size={40} className="text-yellow-400 mb-2" />
                                    <img src="/images/smoothie-350ml.png" alt="Smoothie" className="w-24 h-24 object-contain mb-2" />
                                    <h4 className="font-black text-bioGreen uppercase text-sm">GEWONNEN!</h4>
                                    <p className="text-[12px] font-bold text-gray-700">Verse Smoothie (350ml)</p>
                                    <p className="text-[10px] text-gray-400 mt-1">Automatisch toegevoegd!</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-6 w-full py-3 bg-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                        Sluiten
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function CartSidebar() {
    const { cart, isCartOpen, setIsCartOpen, removeItem, totalPrice, clearCart } = useCartStore();
    const [showScratchCard, setShowScratchCard] = useState(false);
    const [hasWonGift, setHasWonGift] = useState(false);

    const subtotal = totalPrice();
    const deliveryFee = 100;
    const grandTotal = subtotal + deliveryFee;

    // CONFIGURATIE VOOR MAKKELIJK AAN/UIT ZETTEN
    const MINIMUM_SPEND = 499;

    const handleScratchComplete = () => {
        setHasWonGift(true);
        // Hier kun je optioneel ook een actie naar je store sturen:
        // addFreeItem({ id: 'free-smoothie', name: 'Gratis Smoothie 350ml', price: 0 });
    };

    const handleWhatsApp = () => {
        const items = cart.map(i => `• ${i.quantity}x ${i.name} - SRD ${i.price * i.quantity}`).join('%0A');
        const giftText = hasWonGift ? `%0A🎁 *CADEAU: 1x Gratis Smoothie 350ml (Kraskaart)*` : '';
        // const message = `Hallo LYB! 👋 Ik wil graag de volgende bestelling plaatsen:%0A%0A${items}%0A%0A*Subtotaal: SRD ${subtotal}*%0A*Bezorgkosten: SRD ${deliveryFee}*%0A*Totaalbedrag: SRD ${grandTotal}*%0A%0A_Ik wacht op bevestiging voor betaling en levering._`;
        // window.open(`https://wa.me/5978531071?text=${message}`, '_blank');
        const message = `Hallo LYB! 👋 Bestelling:%0A%0A${items}${giftText}%0A%0A*Totaal: SRD ${grandTotal}*%0A_Inclusief bezorging en eventuele kortingen._`;
        window.open(`https://wa.me/5978531071?text=${message}`, '_blank');
    };

    return (
        <>
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="fixed inset-0 bg-black/40 z-[150] backdrop-blur-[2px]"
                        />

                        {/* SIDEBAR */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full max-w-[400px] bg-white z-[160] shadow-[-10px_0_50px_rgba(0,0,0,0.1)] flex flex-col"
                        >
                            {/* HEADER */}
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                                <h3 className="font-black italic flex items-center gap-2 text-gray-800 text-xl">
                                    <IoCartOutline className="text-bioGreen text-3xl" /> Jouw Mandje
                                </h3>
                                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-800">
                                    <IoCloseOutline size={32} />
                                </button>
                            </div>

                            {/* CONTENT AREA */}
                            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                                <AnimatePresence mode="popLayout">
                                    {cart.length > 0 ? (
                                        cart.map((item) => (
                                            <div key={item.id} className="relative mb-4 overflow-hidden rounded-[1.5rem]">
                                                {/* SWIPE DELETE BACKGOUND */}
                                                <div className="absolute inset-0 bg-red-500 flex items-center px-6">
                                                    <div className="flex items-center gap-2 text-white">
                                                        <IoTrashOutline size={20} />
                                                        <span className="font-black text-[10px] uppercase tracking-wider">Verwijderen</span>
                                                    </div>
                                                </div>

                                                {/* ITEM CARD */}
                                                <motion.div
                                                    drag="x"
                                                    dragConstraints={{ left: 0, right: 150 }}
                                                    dragElastic={0.1}
                                                    onDragEnd={(_, info) => {
                                                        if (info.offset.x > 100) removeItem(item.id);
                                                    }}
                                                    className="relative flex items-center gap-4 bg-white p-4 border border-gray-100 shadow-sm"
                                                >
                                                    <div className="w-16 h-16 flex-shrink-0 bg-neutral-50 rounded-xl flex items-center justify-center p-1">
                                                        <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-bold text-gray-800 text-[12px] uppercase leading-tight">{item.name}</p>
                                                        <p className="text-bioGreen font-black text-sm mt-1">SRD {item.price}</p>

                                                        <div className="flex items-center bg-neutral-100 rounded-full w-fit mt-3 px-1 py-1 gap-3">
                                                            <button onClick={() => useCartStore.getState().updateQuantity(item.id, -1)} className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-bioGreen">-</button>
                                                            <span className="text-xs font-black min-w-[15px] text-center">{item.quantity}</span>
                                                            <button onClick={() => useCartStore.getState().updateQuantity(item.id, 1)} className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-bioGreen">+</button>
                                                        </div>
                                                    </div>

                                                    <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-500 p-2"><IoTrashOutline size={22} /></button>
                                                </motion.div>
                                            </div>
                                        ))
                                    ) : (
                                        /* LEGE WINKELMAND STATE */
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="h-full flex flex-col items-center justify-center text-center p-10"
                                        >
                                            <div className="w-24 h-24 bg-neutral-50 rounded-full flex items-center justify-center mb-4">
                                                <IoBagHandleOutline size={48} className="text-gray-300" />
                                            </div>
                                            <h4 className="font-black text-gray-800 uppercase tracking-tight">Je mandje is nog leeg</h4>
                                            <p className="text-gray-400 text-sm mt-2">Het lijkt erop dat je nog geen keus hebt kunnen maken. Onze producten wachten op je!</p>
                                            <button
                                                onClick={() => setIsCartOpen(false)}
                                                className="mt-6 text-bioGreen font-black text-xs uppercase border-b-2 border-bioGreen pb-1 hover:text-gray-800 hover:border-gray-800 transition-all"
                                            >
                                                Verder winkelen
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {cart.length > 0 && (
                                    <button onClick={clearCart} className="w-full py-3 text-red-400 text-xs font-bold hover:underline mt-4">
                                        Winkelmand leegmaken
                                    </button>
                                )}
                            </div>

                            {/* FOOTER */}
                            {cart.length > 0 && (
                                <div className="p-8 border-t border-gray-100 bg-neutral-50 rounded-t-[2.5rem]">
                                    <div className="space-y-2 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Subtotaal</span>
                                            <span className="font-bold text-gray-800">SRD {subtotal}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Bezorgkosten</span>
                                            <span className="font-bold text-gray-800">SRD {deliveryFee}</span>
                                        </div>

                                        {/* GRATIS ITEM WEERGAVE (Na krassen) */}
                                        {hasWonGift && (
                                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex justify-between text-bioGreen font-bold border-t border-dashed border-bioGreen/30 pt-2 mt-2">
                                                <span className="flex items-center gap-1"><IoSparklesOutline /> Smoothie 350ml</span>
                                                <span className="uppercase text-[10px] bg-bioGreen text-white px-2 py-0.5 rounded-full">Gratis</span>
                                            </motion.div>
                                        )}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Totaal te betalen</p>
                                            <p className="text-3xl font-black text-gray-800">SRD {grandTotal}</p>
                                        </div>
                                    </div>

                                    {/* OPTIE 1: KRASKAART MELDING (Makkelijk te commentariëren) */}
                                    {subtotal >= 500 && !hasWonGift && (
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setShowScratchCard(true)}
                                            className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 p-4 rounded-2xl flex items-center gap-4 mb-4 shadow-md group relative overflow-hidden"
                                        >
                                            <div className="bg-white/20 p-2 rounded-xl text-white group-hover:rotate-12 transition-transform">
                                                <IoGiftOutline size={24} />
                                            </div>
                                            <div className="text-left">
                                                <p className="text-[11px] font-black text-white uppercase leading-none">Je hebt een cadeau verdiend!</p>
                                                <p className="text-[12px] text-white font-bold underline decoration-white/50">Bekijk wat je hebt gewonnen!</p>
                                            </div>
                                            <IoSparklesOutline className="absolute right-4 top-4 text-white/40 animate-pulse" />
                                        </motion.button>

                                        // <motion.div
                                        //     initial={{ scale: 0.9, opacity: 0 }}
                                        //     animate={{ scale: 1, opacity: 1 }}
                                        //     className="bg-yellow-100 border border-yellow-200 p-3 rounded-xl flex items-center gap-3 mb-4"
                                        // >
                                        //     <div className="bg-yellow-400 p-2 rounded-lg text-white">
                                        //         <IoGiftOutline size={20} />
                                        //     </div>
                                        //     <div>
                                        //         <p className="text-[11px] font-black text-yellow-800 uppercase leading-none">Hoera! Je krijgt een kraskaart</p>
                                        //         <p className="text-[10px] text-yellow-700 mt-1">Omdat je voor meer dan SRD 500 bestelt!</p>
                                        //     </div>
                                        // </motion.div>
                                    )}

                                    {/* OPTIE 2: BESTEDINGSMINIMUM MELDING (Makkelijk te commentariëren) */}
                                    {subtotal < MINIMUM_SPEND && (
                                        <div className="bg-orange-50 border border-orange-100 p-3 rounded-xl flex items-center gap-3 mb-4 text-orange-700">
                                            <IoAlertCircleOutline size={20} className="flex-shrink-0" />
                                            <p className="text-[10px] font-bold">Minimaal SRD 500 nodig om een bestelling te plaatsen via WhatsApp.</p>
                                        </div>
                                    )}

                                    <button
                                        onClick={handleWhatsApp}
                                        disabled={subtotal < MINIMUM_SPEND} // Optioneel: blokkeer knop bij te laag bedrag
                                        className={`w-full py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-lg transition-all active:scale-95 ${subtotal < MINIMUM_SPEND
                                            ? "bg-gray-300 cursor-not-allowed text-white"
                                            : "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-[0_10px_20px_rgba(37,211,102,0.2)]"
                                            }`}
                                    >
                                        <IoLogoWhatsapp size={24} /> BESTEL VIA WHATSAPP
                                    </button>

                                    <p className="text-[9px] text-center text-gray-400 mt-4 leading-relaxed">
                                        Door op bestellen te klikken openen we WhatsApp.<br />Je kunt daar je bestelling controleren en versturen.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* MODAL VOOR KRASKAART */}
            <AnimatePresence>
                {showScratchCard && (
                    <ScratchModal
                        onClose={() => setShowScratchCard(false)}
                        onComplete={() => {
                            handleScratchComplete();
                            // Optioneel: sluit de modal na 2 seconden automatisch
                            setTimeout(() => setShowScratchCard(false), 2000);
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
}