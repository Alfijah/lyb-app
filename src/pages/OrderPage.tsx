import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../store/useCartStore";
import { useState } from "react";
import { IoCartOutline, IoAdd, IoChevronDownOutline } from "react-icons/io5";
import { juicesAndSmoothies, wellnessShots, vitamineWater, cleanseAndHeal, sappenkuur } from '../data/menuData';

// Importeer hier al je assets (zelfde als in MenuPage)
import specialImg from "../assets/lybMenu/cleanse1.webp"; // Voorbeeld voor de banner

function ProductAddToCart({ item, category, addItem, triggerToast, parsePrice }: any) {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    // Helper om de tekst te splitsen: "350 ml ↝ SRD 75" -> ["350 ml", "SRD 75"]
    const getParts = (priceString: string) => {
        const parts = priceString.split('↝');
        return {
            label: parts[0]?.trim() || "",
            priceDisplay: parts[1]?.trim() || ""
        };
    };

    const currentData = getParts(category.prices[selectedIdx]);
    const numericPrice = parsePrice(category.prices[selectedIdx]);

    const handleAdd = () => {
        addItem({
            id: `${category.id}-${item.id}-${selectedIdx}`,
            name: `${item.name} (${currentData.label})`,
            price: numericPrice,
            quantity: 1,
            img: item.img
        });
        triggerToast();
    };

    return (
        <div className="flex flex-col w-full h-full">
            {/* 1. DYNAMISCHE PRIJS (Onder de naam) */}
            <div className="mb-4">
                <p className="text-2xl font-black text-bioGreen tracking-tight">
                    {currentData.priceDisplay}
                </p>
            </div>

            {/* 2. DROPDOWN & PLUS BUTTON RIJ */}
            <div className="flex items-center gap-2 mt-auto relative">
                <div className="relative flex-1">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full bg-neutral-100 py-3 px-4 rounded-2xl text-[11px] font-black text-gray-700 flex justify-between items-center uppercase tracking-wider hover:bg-neutral-200 transition-colors border border-transparent focus:border-bioGreen/20"
                    >
                        {currentData.label}
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                            <IoChevronDownOutline size={16} />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <>
                                <div className="fixed inset-0 z-[60]" onClick={() => setIsOpen(false)} />
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 5 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-0 right-0 top-full bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden z-[70] py-1"
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
                                            {getParts(p).label} {/* Toon alleen de inhoud (ml) */}
                                        </button>
                                    ))}
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>

                <button
                    onClick={handleAdd}
                    className="bg-bioGreen text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-darkYellow transition-all shadow-md active:scale-90 flex-shrink-0"
                >
                    <IoAdd size={28} />
                </button>
            </div>
        </div>
    );
}

export default function OrderPage() {
    const { addItem } = useCartStore();

    const [showToast, setShowToast] = useState(false);

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
                                    <div
                                        key={item.id}
                                        className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col min-h-[420px]"
                                    >
                                        {/* Afbeelding */}
                                        <div className="h-40 flex items-center justify-center mb-4">
                                            <img src={item.img} alt={item.name} className="max-h-full w-auto object-contain drop-shadow-xl" />
                                        </div>

                                        {/* Info sectie */}
                                        <div className="flex-grow flex flex-col">
                                            <span className="text-[10px] font-black text-bioGreen/40 mb-1 tracking-widest uppercase">#{item.id}</span>
                                            <h4 className="font-bold text-gray-800 mb-1 leading-tight uppercase text-sm line-clamp-2">
                                                {item.name}
                                            </h4>

                                            {/* De component rendert nu zelf de prijs én de controls. 
          Hierdoor reageert de prijs boven de dropdown op de selectie.
      */}
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