import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../store/useCartStore";
import { IoLogoWhatsapp, IoCartOutline, IoTrashOutline, IoAdd } from "react-icons/io5";
import { juicesAndSmoothies } from '../data/menuData';

// Importeer hier al je assets (zelfde als in MenuPage)
import specialImg from "../assets/lybMenu/cleanse1.webp"; // Voorbeeld voor de banner

export default function OrderPage() {
  const { cart, addItem, removeItem, totalPrice, clearCart } = useCartStore();

  const handleWhatsApp = () => {
    const items = cart.map(i => `• ${i.quantity}x ${i.name} - SRD ${i.price * i.quantity}`).join('%0A');
    const message = `Hallo LYB! 👋 Ik wil graag de volgende bestelling plaatsen:%0A%0A${items}%0A%0A*Totaalbedrag: SRD ${totalPrice()}*%0A%0A_Ik wacht op bevestiging voor betaling en levering._`;
    window.open(`https://wa.me/5978531071?text=${message}`, '_blank');
  };

  const parsePrice = (priceString: string) => {
    const priceMatch = priceString.match(/SRD\s*(\d+)/);
    return priceMatch ? parseInt(priceMatch[1], 10) : 0;
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
            <motion.span initial={{opacity:0}} animate={{opacity:1}} className="bg-darkYellow text-xs font-black px-3 py-1 rounded-full uppercase">Weekly Special</motion.span>
            <h1 className="text-4xl md:text-6xl font-black italic mt-4 drop-shadow-lg">The Ginger-Berry Reset</h1>
            <p className="mt-4 text-lg font-medium drop-shadow-md">Alleen deze week: Een krachtige mix van bosvruchten en extra gember voor die ultieme immuunboost.</p>
            <button 
              onClick={() => addItem({ id: 'special-w1', name: 'Weekly Special', price: 125, quantity: 1 })}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {category.items.map(item => (
                  <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                    <img src={item.img} alt={item.name} className="w-32 h-auto mx-auto mb-4" />
                    <h4 className="font-bold text-center text-gray-800 mb-4 h-10 line-clamp-2 uppercase text-sm">#{item.id} {item.name}</h4>
                    <div className="flex gap-2 mt-auto">
                      {category.prices.map((price, index) => (
                        <button 
                          key={index}
                          onClick={() => addItem({ id: `${category.id}-${item.id}-${index}`, name: `${item.name} (${price.split('↝')[0].trim()})`, price: parsePrice(price), quantity: 1 })}
                          className="flex-1 bg-neutral-100 py-2 rounded-xl text-[10px] font-bold hover:bg-bioGreen hover:text-white transition-colors"
                        >
                          {price.replace('↝', '-')}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Voeg hier op dezelfde manier Smoothies, Shots etc. toe */}
          {/* Tip: Gebruik voor shots en kuren maar 1 knop omdat daar geen maatkeuze is */}

        </div>

        {/* 3. FLOATING WHATSAPP CART */}
        <AnimatePresence>
          {cart.length > 0 && (
            <motion.div 
              initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
              className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-6 md:pb-10"
            >
              <div className="max-w-md mx-auto bg-white rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-black italic flex items-center gap-2 text-gray-800">
                    <IoCartOutline className="text-bioGreen text-2xl" /> Jouw Mandje ({cart.reduce((total, item) => total + item.quantity, 0)})
                  </h3>
                  <button onClick={clearCart} className="text-red-400 text-xs flex items-center gap-1 hover:underline">
                    <IoTrashOutline /> Leegmaken
                  </button>
                </div>

                <div className="max-h-40 overflow-y-auto mb-4 divide-y divide-gray-50">
                  {cart.map(item => (
                    <div key={item.id} className="py-2 flex justify-between items-center text-sm">
                      <div className="flex flex-col">
                        <span className="font-bold">{item.quantity}x {item.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-bioGreen">SRD {item.price * item.quantity}</span>
                        <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-500">×</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-gray-100">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Totaalbedrag</p>
                    <p className="text-2xl font-black text-gray-800">SRD {totalPrice()}</p>
                  </div>
                  <button 
                    onClick={handleWhatsApp}
                    className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-lg hover:bg-[#128C7E] transition-all scale-105"
                  >
                    <IoLogoWhatsapp className="text-2xl" /> BESTEL NU
                  </button>
                </div>
                <p className="text-[9px] text-center text-gray-400 mt-4 italic">Bestelling is pas definitief na bevestiging via WhatsApp.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}