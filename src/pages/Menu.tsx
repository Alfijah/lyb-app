import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionWrapper from "../animations/SectionWrapper";

// Assets
import smear from "../assets/lybMenu/smear2.webp";
import bgImage from "../assets/lybMenu/menuCards.webp";
// Juices & Smoothies (Eerder geïmporteerd...)
import juice1 from "../assets/lybMenu/juice-1.webp";
import juice2 from "../assets/lybMenu/juice-2.webp";
import juice3 from "../assets/lybMenu/juice-3.webp";
import juice4 from "../assets/lybMenu/juice-4.webp";
import juice5 from "../assets/lybMenu/juice-5.webp";
import juice6 from "../assets/lybMenu/juice-6.webp";
import juice7 from "../assets/lybMenu/juice-7.webp";
import juice8 from "../assets/lybMenu/juice-8.webp";
import smoothie9 from "../assets/lybMenu/smoothie-9.webp";
import smoothie10 from "../assets/lybMenu/smoothie-10.webp";
import smoothie11 from "../assets/lybMenu/smoothie-11.webp";
import smoothie12 from "../assets/lybMenu/smoothie-12.webp";
import smoothie13 from "../assets/lybMenu/smoothie-13.webp";
import smoothie14 from "../assets/lybMenu/smoothie-14.webp";
import smoothie15 from "../assets/lybMenu/smoothie-15.webp";
import smoothie16 from "../assets/lybMenu/smoothie-16.webp";
// Vitaminewater
import vit1 from "../assets/lybMenu/vitwater1.webp";
import vit2 from "../assets/lybMenu/vitwater2.webp";
import vit3 from "../assets/lybMenu/vitwater3.webp";
import vit4 from "../assets/lybMenu/vitwater4.webp";
import vit5 from "../assets/lybMenu/vitwater5.webp";
import vit6 from "../assets/lybMenu/vitwater6.webp";
import vit7 from "../assets/lybMenu/vitwater7.webp";
// Shots & Cleanse
import shot1 from "../assets/lybMenu/shot1.webp";
import shot2 from "../assets/lybMenu/shot2.webp";
import shot3 from "../assets/lybMenu/shot3.webp";
import shot4 from "../assets/lybMenu/shot4.webp";
import comboshots from "../assets/lybMenu/cleanse1.webp";
import combojuice from "../assets/lybMenu/cleanse2.webp";
import combovit from "../assets/lybMenu/cleanse3.webp";

export default function MenuPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = 120; // Hoogte van je sticky navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Ons Menu | Verse Smoothies, Juices, Welness shots, Detox kuren & Vitawater | LYB Suriname</title>
        <meta name="description" content="Bekijk de menukaart van Love Your Body. Ontdek jouw gezonde boost in Paramaribo." />

        {/* Social Media Previews voor Menu */}
        <meta property="og:title" content="Ontdek het menu van Love Your Body" />
        <meta property="og:description" content="Van verfrissende juices tot romige smoothies. Bekijk ons aanbod!" />
        <meta property="og:image" content="https://drinklyb.com/og-image.jpg" />
        <meta property="og:url" content="https://drinklyb.com/menu" />
      </Helmet>

      <main className="bg-neutral-50 min-h-screen">
        <section id="menu" className="max-w-screen-md mx-auto text-white px-6 md:px-12 py-12 md:py-20 lg:pt-32">
          <SectionWrapper>
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">LYB Menu</h1>
          </SectionWrapper>

          <div className="flex flex-col gap-8">

            {/* 1. JUICES & 2. SMOOTHIES (Mapped voor snelheid) */}
            {[
              {
                id: "juices", title: "Juices", prices: ["350 ml ↝ SRD 100", "1000 ml ↝ SRD 230"], items: [
                  { id: 1, name: "ananas-lemmetje", img: juice1 }, { id: 2, name: "chia-zuurzak", img: juice2 },
                  { id: 3, name: "chia-aardbei", img: juice3 }, { id: 4, name: "papaja-kers", img: juice4 },
                  { id: 5, name: "awarra", img: juice5 }, { id: 6, name: "basilicum-lemmetje-moringa", img: juice6 },
                  { id: 7, name: "sopropo-zuurzak-moringa", img: juice7 }, { id: 8, name: "avocado-ananas-moringa", img: juice8 }
                ]
              },
              {
                id: "smoothies", title: "Smoothies", prices: ["350 ml ↝ SRD 115", "1000 ml ↝ SRD 260"], items: [
                  { id: 9, name: "ananas-framboos-bacove", img: smoothie9 }, { id: 10, name: "zuurzak-aardbei-bacove", img: smoothie10 },
                  { id: 11, name: "manja-markoesa-bacove", img: smoothie11 }, { id: 12, name: "awarra-bacove", img: smoothie12 },
                  { id: 13, name: "podosiri-kers-bacove", img: smoothie13 }, { id: 14, name: "spinazie-kers-bacove-moringa", img: smoothie14 },
                  { id: 15, name: "sopropo-pommeciter-bacove-moringa", img: smoothie15 }, { id: 16, name: "komkommer-gember-lemmetje-moringa", img: smoothie16 }
                ]
              }
            ].map((cat) => (
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
                {[
                  { img: shot1, name: "kurkuma-kers-zwarte peper", qty: "7x 125 ml" },
                  { img: shot2, name: "gember-markoesa-cayenne", qty: "7x 125 ml" },
                  { img: shot3, name: "gember-aardbei", qty: "5x 125 ml" },
                  { img: shot4, name: "gember-kurkuma-limoen", qty: "7x 125 ml" }
                ].map((s, i) => (
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
                {[
                  { img: vit1, name: "gember-citroengras", price: "SRD 125" },
                  { img: vit2, name: "gember-lemmetje", price: "SRD 125" },
                  { img: vit3, name: "kurkuma-kers", price: "SRD 125" },
                  { img: vit4, name: "kaneel-kruidnagel", price: "SRD 110" },
                  { img: vit5, name: "basilicum-lemmetje", price: "SRD 110" },
                  { img: vit6, name: "sjoeroe", price: "SRD 110" },
                  { img: vit7, name: "appelazijn", price: "SRD 110" }
                ].map((v, i) => (
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
                {[
                  { img: comboshots, name: "Gember shots", info: "3x 125 ml" },
                  { img: combojuice, name: "Aloë vera juice", info: "3x 350 ml" },
                  { img: combovit, name: "Kurkuma vitamine water", info: "3x 1000 ml" }
                ].map((c, i) => (
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
                    {[
                      { d: "1-daagse", i: "8 flessen* + 1 shot gratis", p: "850" },
                      { d: "3-daagse", i: "24 flessen* + 1 shot gratis", p: "2500" },
                      { d: "5-daagse", i: "40 flessen* + 1L vitawater gratis", p: "4100" },
                      { d: "7-daagse", i: "56 flessen* + 2L vitawater gratis", p: "5700" }
                    ].map((r, i) => (
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