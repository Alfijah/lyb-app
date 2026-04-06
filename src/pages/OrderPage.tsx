import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../store/useCartStore";
import { useState } from "react";
import { IoLogoWhatsapp, IoCartOutline, IoTrashOutline, IoAdd, IoChevronDownOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { juicesAndSmoothies, wellnessShots, vitamineWater, cleanseAndHeal, sappenkuur } from '../data/menuData';

// Importeer hier al je assets (zelfde als in MenuPage)
import specialImg from "../assets/lybMenu/cleanse1.webp"; // Voorbeeld voor de banner

function ProductAddToCart({ item, category, addItem, triggerToast, parsePrice }: any) {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [isOpen, setIsOpen] = useState(false); // Houdt bij of de lijst open is
    const currentPriceString = category.prices[selectedIdx];

    const handleAdd = () => {
        addItem({
            id: `${category.id}-${item.id}-${selectedIdx}`,
            name: `${item.name} (${currentPriceString.split('↝')[0].trim()})`,
            price: parsePrice(currentPriceString),
            quantity: 1,
            img: item.img
        });
        triggerToast();
    };

    return (
        <div className="flex items-center w-full gap-2 mt-auto border-t border-gray-50 relative">

            {/* CUSTOM DROPDOWN CONTAINER */}
            <div className="relative flex-1">
                {/* De 'Button' die de dropdown opent */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-neutral-100 py-3 px-4 rounded-2xl text-[11px] font-black text-gray-700 flex justify-between items-center uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                >
                    {currentPriceString.replace('↝', '-')}
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <IoChevronDownOutline size={16} />
                    </motion.div>
                </button>

                {/* DE LIJST ZELF (De popup) */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Onzichtbare klik-laag om dropdown te sluiten bij klik buiten menu */}
                            <div className="fixed inset-0 z-[60]" onClick={() => setIsOpen(false)} />

                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 5 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute left-0 right-0 top-full bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden z-[70] py-2"
                            >
                                {category.prices.map((p: string, i: number) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setSelectedIdx(i);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider transition-colors
                      ${selectedIdx === i ? 'bg-bioGreen text-white' : 'text-gray-600 hover:bg-bioGreen/10'}
                    `}
                                    >
                                        {p.replace('↝', '-')}
                                    </button>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>

            {/* PLUS BUTTON */}
            <button
                onClick={handleAdd}
                className="bg-bioGreen text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-darkYellow transition-all shadow-md active:scale-90 flex-shrink-0"
            >
                <IoAdd size={28} />
            </button>
        </div>
    );
}

export default function OrderPage() {
    const { cart, addItem, removeItem, totalPrice, clearCart, isCartOpen, setIsCartOpen } = useCartStore();

    const [showToast, setShowToast] = useState(false);

    const showCart = cart.length > 0 && isCartOpen;

    const handleWhatsApp = () => {
        const items = cart.map(i => `• ${i.quantity}x ${i.name} - SRD ${i.price * i.quantity}`).join('%0A');
        const message = `Hallo LYB! 👋 Ik wil graag de volgende bestelling plaatsen:%0A%0A${items}%0A%0A*Totaalbedrag: SRD ${totalPrice()}*%0A%0A_Ik wacht op bevestiging voor betaling en levering._`;
        window.open(`https://wa.me/5978531071?text=${message}`, '_blank');
    };

    const parsePrice = (priceString: string) => {
        const priceMatch = priceString.match(/SRD\s*(\d+)/);
        return priceMatch ? parseInt(priceMatch[1], 10) : 0;
    };

    const triggerToast = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500); // Verdwijnt na 2.5 sec
    };

    return (
        <>
            <Helmet>
                <title>Bestel Direct | Verse Juices & Smoothies | LYB Suriname</title>
            </Helmet>

            <main className="bg-neutral-50 min-h-screen pb-40">

                {/* 1. WEEKLY SPECIAL BANNER */}
                <section className="relative w-full h-[300px] md:h-[400px] bg-bioGreen overflow-hidden flex items-center">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <img src={specialImg} alt="Special" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-20 px-6 md:px-20 text-white max-w-3xl">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-darkYellow text-xs font-black px-3 py-1 rounded-full uppercase">Weekly Special</motion.span>
                        <h1 className="text-4xl md:text-6xl font-black italic mt-4 drop-shadow-lg">The Ginger-Berry Reset</h1>
                        <p className="mt-4 text-lg font-medium drop-shadow-md">Alleen deze week: Een krachtige mix van bosvruchten en extra gember voor die ultieme immuunboost.</p>
                        <button
                            onClick={() => { addItem({ id: 'special-w1', name: 'Weekly Special', price: 125, quantity: 1, img: specialImg }); triggerToast() }}
                            className="mt-6 bg-white text-bioGreen px-8 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            <IoAdd className="text-xl" /> Voeg toe - SRD 125
                        </button>
                    </div>
                </section>

                <div className="max-w-screen-xl mx-auto px-6 py-12">

                    {juicesAndSmoothies.map(category => (
                        <div key={category.id}>
                            <h2 className="text-3xl font-black italic mb-8 border-l-8 border-bioGreen pl-4">{category.title}</h2>
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                                {category.items.map(item => (
                                    <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                                        <img src={item.img} alt={item.name} className="w-32 h-auto mx-auto mb-2" />
                                        <h4 className="font-bold text-center text-gray-800 h-10 line-clamp-2 text-sm">#{item.id}. {item.name}</h4>
                                        <div className="flex gap-2 mt-auto border-t border-gray-50">
                                            <ProductAddToCart
                                                item={item}
                                                category={category}
                                                addItem={addItem}
                                                triggerToast={triggerToast}
                                                parsePrice={parsePrice}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Wellness Shots */}
                    <div>
                        <h2 className="text-3xl font-black italic mb-8 border-l-8 border-bioGreen pl-4">Wellness Shots</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {wellnessShots.map((item, index) => (
                                <div key={`shot-${index}`} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                                    <img src={item.img} alt={item.name} className="w-32 h-auto mx-auto mb-4" />
                                    <h4 className="font-bold text-center text-gray-800 mb-2 h-10 line-clamp-2 uppercase text-sm">{item.name}</h4>
                                    <p className="text-center text-xs text-gray-500 mb-4">{item.qty}</p>
                                    <button
                                        onClick={() => { addItem({ id: `shot-${index}`, name: item.name, price: 500, quantity: 1, img: item.img }); triggerToast() }}
                                        className="mt-auto w-full bg-neutral-100 py-2 rounded-xl text-xs font-bold hover:bg-bioGreen hover:text-white transition-colors"
                                    >
                                        Voeg toe - SRD 500
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vitamine Water */}
                    <div>
                        <h2 className="text-3xl font-black italic mb-8 border-l-8 border-bioGreen pl-4">Vitamine Water</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {vitamineWater.map((item, index) => (
                                <div key={`vitawater-${index}`} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                                    <img src={item.img} alt={item.name} className="w-32 h-auto mx-auto mb-4" />
                                    <h4 className="font-bold text-center text-gray-800 mb-2 h-10 line-clamp-2 uppercase text-sm">{item.name}</h4>
                                    <button
                                        onClick={() => { addItem({ id: `vitawater-${index}`, name: item.name, price: parsePrice(item.price), quantity: 1, img: item.img }); triggerToast() }}
                                        className="mt-auto w-full bg-neutral-100 py-2 rounded-xl text-xs font-bold hover:bg-bioGreen hover:text-white transition-colors"
                                    >
                                        Voeg toe - {item.price}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cleanse & Heal Set */}
                    <div>
                        <h2 className="text-3xl font-black italic mb-8 border-l-8 border-bioGreen pl-4">Cleanse & Heal Set</h2>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-6 mb-16">
                            <div className="flex-shrink-0 grid grid-cols-3 gap-4">
                                {cleanseAndHeal.map((item, index) => (
                                    <img key={index} src={item.img} alt={item.name} className="w-24 h-auto" />
                                ))}
                            </div>
                            <div className="flex-grow text-center lg:text-left">
                                <h4 className="font-bold text-xl text-gray-800 mb-2">Complete Cleanse & Heal Set</h4>
                                <p className="text-gray-600 mb-4">Een complete set van Gember shots, Aloë vera juice en Kurkuma vitamine water voor een volledige reset.</p>
                                <p className="font-bold text-lg text-bioGreen mb-4"><span className="line-through text-gray-400 text-sm">SRD 900</span> SRD 850</p>
                            </div>
                            <div className="flex-shrink-0 w-full lg:w-auto">
                                <button
                                    onClick={() => { addItem({ id: 'cleanse-set', name: 'Cleanse & Heal Set', price: 850, quantity: 1, img: cleanseAndHeal[0].img }); triggerToast() }}
                                    className="w-full lg:w-auto bg-bioGreen text-white px-8 py-3 rounded-xl font-bold hover:bg-darkYellow transition-colors"
                                >
                                    Voeg set toe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sappenkuur */}
                    <div>
                        <h2 className="text-3xl font-black italic mb-8 border-l-8 border-bioGreen pl-4">Sappenkuur</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {sappenkuur.map((item, index) => (
                                <div key={`kuur-${index}`} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col text-center">
                                    <h3 className="font-black text-lg text-bioGreen mb-2">{item.d}</h3>
                                    <p className="text-xs text-gray-600 mb-4 flex-grow">{item.i}</p>
                                    <button
                                        onClick={() => { addItem({ id: `kuur-${index}`, name: `Sappenkuur ${item.d}`, price: parseInt(item.p, 10), quantity: 1, img: cleanseAndHeal[0].img }); triggerToast() }}
                                        className="mt-auto w-full bg-neutral-100 py-2 rounded-xl text-xs font-bold hover:bg-bioGreen hover:text-white transition-colors"
                                    >
                                        Voeg toe - SRD {item.p}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* 3. FLOATING WHATSAPP CART */}

                <AnimatePresence>
                    {showCart && (
                        <>
                            {/* 1. BACKDROP: Sluit mandje bij klik buiten venster */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsCartOpen(false)}
                                className="fixed inset-0 bg-black/60 z-[120] backdrop-blur-sm"
                            />

                            {/* 2. HET WINKELMAND VENSTER */}
                            <motion.div
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "100%", opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed bottom-0 left-0 right-0 z-[130] px-4 pb-6 md:pb-10"
                            >
                                <div className="max-w-md mx-auto bg-white rounded-t-[2.5rem] rounded-b-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-6 relative">

                                    {/* SLUIT ICOON RECHTSBOVEN */}
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="absolute -top-3 right-6 bg-white shadow-xl rounded-full p-2 text-gray-400 hover:text-red-500 border border-gray-100 transition-all hover:scale-110"
                                    >
                                        <IoCloseOutline size={28} />
                                    </button>

                                    {/* HEADER */}
                                    <div className="flex justify-between items-center mb-6 mt-2">
                                        <h3 className="font-black italic flex items-center gap-2 text-gray-800 text-xl">
                                            <IoCartOutline className="text-bioGreen text-3xl" /> Jouw Mandje
                                        </h3>
                                        <button
                                            onClick={clearCart}
                                            className="text-red-400 text-xs font-bold flex items-center gap-1 hover:text-red-600 transition-colors bg-red-50 px-3 py-1.5 rounded-full"
                                        >
                                            <IoTrashOutline /> Leegmaken
                                        </button>
                                    </div>

                                    {/* DE LIJST MET ITEMS (Swipeable & Geoptimaliseerde layout) */}
                                    <div className="max-h-[40vh] overflow-y-auto mb-6 pr-1 custom-scrollbar">
                                        <AnimatePresence mode="popLayout">
                                            {cart.map((item) => (
                                                <motion.div
                                                    key={item.id}
                                                    layout
                                                    drag="x"
                                                    dragConstraints={{ left: 0, right: 100 }}
                                                    onDragEnd={(_, info) => {
                                                        if (info.offset.x > 80) removeItem(item.id);
                                                    }}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, x: 100 }}
                                                    className="relative mb-3 group"
                                                >
                                                    {/* Swipe indicator achtergrond */}
                                                    <div className="absolute inset-0 bg-red-100 flex items-center pl-6 rounded-2xl -z-10">
                                                        <IoTrashOutline className="text-red-500 text-xl animate-pulse" />
                                                    </div>

                                                    {/* De Item Kaart */}
                                                    <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-gray-50 shadow-sm">
                                                        {/* 1. Afbeelding */}
                                                        <div className="w-14 h-14 bg-neutral-50 rounded-xl flex items-center justify-center p-1">
                                                            <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                                                        </div>

                                                        {/* 2 & 3. Naam & Prijs */}
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-bold text-gray-800 text-[11px] uppercase truncate leading-tight">{item.name}</p>
                                                            <p className="text-bioGreen font-black text-sm">SRD {item.price * item.quantity}</p>
                                                        </div>

                                                        {/* 4. Aantal Controls */}
                                                        <div className="flex items-center bg-neutral-100 rounded-full p-1 gap-2 border border-gray-200">
                                                            <button
                                                                onClick={() => useCartStore.getState().updateQuantity(item.id, -1)}
                                                                className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm hover:text-bioGreen font-bold transition-transform active:scale-90"
                                                            >
                                                                -
                                                            </button>
                                                            <span className="text-xs font-black w-4 text-center">{item.quantity}</span>
                                                            <button
                                                                onClick={() => useCartStore.getState().updateQuantity(item.id, 1)}
                                                                className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm hover:text-bioGreen font-bold transition-transform active:scale-90"
                                                            >
                                                                +
                                                            </button>
                                                        </div>

                                                        {/* 5. Prullenbak */}
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                                        >
                                                            <IoTrashOutline size={20} />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    </div>

                                    {/* FOOTER: TOTAAL & BESTELKNOP */}
                                    <div className="pt-5 border-t-2 border-dashed border-gray-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Totaalbedrag</p>
                                                <p className="text-3xl font-black text-gray-800 tracking-tight">SRD {totalPrice()}</p>
                                            </div>
                                            <button
                                                onClick={handleWhatsApp}
                                                className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:bg-[#128C7E] transition-all hover:scale-105 active:scale-95"
                                            >
                                                <IoLogoWhatsapp size={24} /> BESTEL NU
                                            </button>
                                        </div>
                                        <p className="text-[10px] text-center text-gray-400 italic">Tik op '+' of '-' om te wijzigen. Swipe een item naar rechts om te wissen.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* 4. DE TOAST NOTIFICATIE RECHTSBOVEN */}
                <AnimatePresence>
                    {showToast && (
                        <motion.div
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            className="fixed top-24 right-4 z-[200] bg-white border-l-4 border-bioGreen shadow-2xl rounded-2xl p-4 flex items-center gap-3 min-w-[200px]"
                        >
                            <div className="bg-bioGreen/10 p-2 rounded-full">
                                <IoCartOutline className="text-bioGreen text-xl" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-gray-800 uppercase tracking-tight">Gelukt!</p>
                                <p className="text-[10px] text-gray-500 font-medium">Toegevoegd aan mandje</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </>
    );
}