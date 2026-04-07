import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../store/useCartStore";
import { IoCartOutline, IoCloseOutline, IoTrashOutline, IoLogoWhatsapp } from "react-icons/io5";

export default function CartSidebar() {
    const { cart, isCartOpen, setIsCartOpen, removeItem, totalPrice, updateQuantity } = useCartStore();

    // We tonen hem alleen als de state op 'open' staat
    const showCart = isCartOpen;

    const handleWhatsApp = () => {
        const items = cart.map(i => `• ${i.quantity}x ${i.name} - SRD ${i.price * i.quantity}`).join('%0A');
        const message = `Hallo LYB! 👋 Ik wil graag de volgende bestelling plaatsen:%0A%0A${items}%0A%0A*Totaalbedrag: SRD ${totalPrice()}*%0A%0A_Ik wacht op bevestiging voor betaling en levering._`;
        window.open(`https://wa.me/5978531071?text=${message}`, '_blank');
    };

    return (
        <AnimatePresence>
            {showCart && (
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
                        {/* Header, Items-lijst (met de rode swipe-laag) en Footer code hier... */}
                        {/* Gebruik de code die we eerder voor de sidebar hebben gemaakt */}

                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                            <h3 className="font-black italic flex items-center gap-2 text-gray-800 text-xl">
                                <IoCartOutline className="text-bioGreen text-3xl" /> Jouw Mandje
                            </h3>
                            <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-800">
                                <IoCloseOutline size={32} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            <AnimatePresence mode="popLayout">
                                {cart.length === 0 ? (
                                    <p className="text-center text-gray-400 mt-10 uppercase font-bold text-xs">Je mandje is leeg</p>
                                ) : (
                                    cart.map((item) => (
                                        <div key={item.id} className="relative mb-4 overflow-hidden rounded-[1.5rem]">
                                            {/* De rode verwijder-laag */}
                                            <div className="absolute inset-0 bg-red-500 flex items-center px-6">
                                                <div className="flex items-center gap-2 text-white">
                                                    <IoTrashOutline size={20} />
                                                    <span className="font-black text-[10px] uppercase tracking-wider">Verwijderen</span>
                                                </div>
                                            </div>

                                            {/* De witte item-kaart */}
                                            <motion.div
                                                drag="x"
                                                dragConstraints={{ left: 0, right: 150 }}
                                                onDragEnd={(_, info) => { if (info.offset.x > 100) removeItem(item.id); }}
                                                className="relative flex items-center gap-4 bg-white p-4 border border-gray-100 shadow-sm"
                                            >
                                                <img src={item.img} alt={item.name} className="w-16 h-16 object-contain bg-neutral-50 rounded-xl" />
                                                <div className="flex-1">
                                                    <p className="font-bold text-gray-800 text-[12px] uppercase leading-tight">{item.name}</p>
                                                    <p className="text-bioGreen font-black text-sm mt-1">SRD {item.price * item.quantity}</p>
                                                    <div className="flex items-center bg-neutral-100 rounded-full w-fit mt-3 px-1 py-1 gap-3">
                                                        <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm">-</button>
                                                        <span className="text-xs font-black min-w-[15px] text-center">{item.quantity}</span>
                                                        <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm">+</button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="p-8 border-t border-gray-100 bg-neutral-50 rounded-t-[2.5rem]">
                            <div className="flex justify-between mb-6">
                                <p className="text-3xl font-black text-gray-800">SRD {totalPrice()}</p>
                            </div>
                            <button onClick={handleWhatsApp} className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3">
                                <IoLogoWhatsapp size={24} /> BESTEL VIA WHATSAPP
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}