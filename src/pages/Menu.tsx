import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionWrapper from "../animations/SectionWrapper";
import { juicesAndSmoothies, wellnessShots, vitamineWater, cleanseAndHeal, sappenkuur } from "../data/menuData";

// Assets
import smear from "../assets/lybMenu/smear2.webp";
import bgImage from "../assets/lybMenu/menuCards.webp";

export default function MenuPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // We geven de browser 100ms de tijd om de DOM te 'settelen'
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          const offset = 100; // Pas dit aan aan de hoogte van je navbar
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 100); // 100ms is meestal genoeg voor React om te renderen

      return () => clearTimeout(timer); // Netjes opruimen als de component unmount
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Ons Menu | Verse Smoothies, Juices, Welness shots, Detox kuren & Vitawater | LYB Suriname</title>
        <meta name="description" content="Bekijk de menukaart van Love Your Body. Ontdek jouw gezonde boost in Paramaribo." />
        <link rel="canonical" href="https://drinklyb.com/menu" />

        {/* Social Media Previews voor Menu */}
        <meta property="og:title" content="Ontdek het menu van Love Your Body" />
        <meta property="og:description" content="Van verfrissende juices tot romige smoothies. Bekijk ons aanbod!" />
        <meta property="og:image" content="https://drinklyb.com/og-image.jpg" />
        <meta property="og:url" content="https://drinklyb.com/menu" />
      </Helmet>

      <main className="bg-neutral-50 min-h-screen">
        <section id="menu" className="max-w-screen-md mx-auto text-white px-6 md:px-12 py-12 md:py-20 lg:pt-32">
          <SectionWrapper>
            <h1
              className="text-center text-3xl md:text-4xl font-bold pb-4 border-b-2 border-gray-200"
            >
              LYB Menu
            </h1>
            <p
              className="body-text text-center max-w-2xl mx-auto py-6"
            >
            Het actuele aanbod vind je ook terug op de Bestellen pagina. Daar 
            </p>
          </SectionWrapper>

          <div className="flex flex-col gap-8">

            {/* 1. JUICES & 2. SMOOTHIES (Mapped voor snelheid) */}
            {juicesAndSmoothies.map((cat) => (
              <div key={cat.id} id={cat.id} style={{ backgroundImage: `url(${bgImage})` }} className="flex flex-col items-center py-12 px-4 border-[6px] border-double border-orange-100 bg-cover bg-center">
                <SectionWrapper className="flex flex-col items-center mb-10">
                  <h2 className="exceptionTextExtra text-white drop-shadow-md text-4xl">{cat.title}</h2>
                  <img src={smear} alt="" className="w-64 h-auto -mt-2" />
                  <div className="mt-4 font-bold text-bioGreen text-center">
                    {cat.prices.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </SectionWrapper>
                <ul className="grid grid-cols-2 md:grid-cols-4 px-4 gap-8 gap-y-10 w-full max-w-5xl">
                  {cat.items.map((item) => (
                    <li key={item.id} className="flex flex-col items-center text-center group">
                      <img src={item.img} alt={item.name} className="w-24 md:w-32 h-auto mb-3 transition-transform group-hover:scale-110 drop-shadow-md" />
                      <p className="text-xs font-medium"><span className="exceptionText font-bold">#{item.id}.</span> {item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* 3. WELLNESS SHOTS */}
            <div id="shots" style={{ backgroundImage: `url(${bgImage})` }} className="flex flex-col items-center py-12 border-[6px] border-double border-orange-100 bg-cover bg-center">
              <h2 className="exceptionTextExtra text-white drop-shadow-md text-4xl">Wellness shots</h2>
              <img src={smear} alt="" className="w-64 h-auto" />
              <p className="font-bold my-4">Elke set ↝ <span className="text-bioGreen">SRD 500</span></p>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-5xl">
                {wellnessShots.map((s, i) => (
                  <li key={i} className="flex flex-col items-center text-center">
                    <img src={s.img} alt={s.name} className="w-24 h-auto mb-2" />
                    <p className="text-xs font-medium">{s.name}</p>
                    <p className="text-[10px] font-bold text-bioGreen uppercase mt-1">{s.qty}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. VITAMINE WATER */}
            <div id="vitawater" style={{ backgroundImage: `url(${bgImage})` }} className="flex flex-col items-center py-12 border-[6px] border-double border-orange-100 bg-cover bg-center text-center">
              <SectionWrapper className="mb-8">
                <h2 className="exceptionTextExtra text-white drop-shadow-md text-4xl">Vitamine water</h2>
                <img src={smear} alt="" className="w-64 h-auto" />
                <p className="font-bold mt-4">7 liter pack ↝ <span className="text-bioGreen">SRD 750</span></p>
              </SectionWrapper>
              <ul className="grid grid-cols-2 md:grid-cols-4 px-4 gap-8 gap-y-12 max-w-6xl">
                {vitamineWater.map((v, i) => (
                  <li key={i} className="flex flex-col items-center">
                    <img src={v.img} alt={v.name} className="w-28 h-auto mb-2 drop-shadow-md" />
                    <p className="text-xs font-bold"><span className="exceptionText">#{i + 1}.</span> {v.name}</p>
                    <p className="text-[11px] font-bold text-bioGreen">1000 ml ↝ {v.price}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. CLEANSE & HEAL */}
            <div id="cleanse" style={{ backgroundImage: `url(${bgImage})` }} className="flex flex-col items-center py-12 border-[6px] border-double border-orange-100 bg-cover bg-center">
              <h2 className="exceptionTextExtra text-white drop-shadow-md text-4xl text-center px-4">Cleanse & heal</h2>
              <img src={smear} alt="" className="w-64 h-auto" />
              <p className="font-bold my-6 text-center">Complete set t.w.v. SRD 900 ↝ <span className="text-bioGreen">SRD 850</span></p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8 max-w-5xl">
                {cleanseAndHeal.map((c, i) => (
                  <li key={i} className="flex flex-col items-center text-center">
                    <img src={c.img} alt={c.name} className="w-48 h-auto mb-4 drop-shadow-lg" />
                    <p className="font-bold text-sm">{c.name}</p>
                    <p className="text-xs italic text-bioGreen">{c.info}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. SAPPENKUUR TABEL */}
            <div id="sappenkuur" style={{ backgroundImage: `url(${bgImage})` }} className="flex flex-col items-center py-12 px-6 border-[6px] border-double border-orange-100 bg-cover bg-center overflow-hidden">
              <h2 className="exceptionTextExtra text-white drop-shadow-md text-4xl">Sappenkuur</h2>
              <img src={smear} alt="" className="w-64 h-auto" />
              <p className="font-bold my-4">* Flessen van 350 ml</p>
              <div className="w-full overflow-x-auto max-w-4xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/50">
                      <th className="p-4 font-bold text-white">Kuur</th>
                      <th className="p-4 font-bold text-white">Inhoud</th>
                      <th className="p-4 font-bold text-white text-right">Prijs (SRD)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {sappenkuur.map((r, i) => (
                      <tr key={i} className="border-b border-white/50 transition-colors">
                        <td className="p-4 font-bold">{r.d}</td>
                        <td className="p-4 italic">{r.i}</td>
                        <td className="p-4 text-right font-black text-bioGreen">{r.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}