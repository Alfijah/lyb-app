import smear from "../assets/lybMenu/smear2.png";
import juice1 from "../assets/lybMenu/juice-1.png";
import juice2 from "../assets/lybMenu/juice-2.png";
import juice3 from "../assets/lybMenu/juice-3.png";
import juice4 from "../assets/lybMenu/juice-4.png";
import juice5 from "../assets/lybMenu/juice-5.png";
import juice6 from "../assets/lybMenu/juice-6.png";
import juice7 from "../assets/lybMenu/juice-7.png";
import juice8 from "../assets/lybMenu/juice-8.png";
import smoothie9 from "../assets/lybMenu/smoothie-9.png";
import smoothie10 from "../assets/lybMenu/smoothie-10.png";
import smoothie11 from "../assets/lybMenu/smoothie-11.png";
import smoothie12 from "../assets/lybMenu/smoothie-12.png";
import smoothie13 from "../assets/lybMenu/smoothie-13.png";
import smoothie14 from "../assets/lybMenu/smoothie-14.png";
import smoothie15 from "../assets/lybMenu/smoothie-15.png";
import smoothie16 from "../assets/lybMenu/smoothie-16.png";
import shot1 from "../assets/lybMenu/shot1.png";
import shot2 from "../assets/lybMenu/shot2.png";
import shot3 from "../assets/lybMenu/shot3.png";
import shot4 from "../assets/lybMenu/shot4.png";
import vit1 from "../assets/lybMenu/vitwater1.png";
import vit2 from "../assets/lybMenu/vitwater2.png";
import vit3 from "../assets/lybMenu/vitwater3.png";
import vit4 from "../assets/lybMenu/vitwater4.png";
import vit5 from "../assets/lybMenu/vitwater5.png";
import vit6 from "../assets/lybMenu/vitwater6.png";
import vit7 from "../assets/lybMenu/vitwater7.png";
import comboshots from "../assets/lybMenu/comboshots.png";
import combojuice from "../assets/lybMenu/combojuice.png";
import combovit from "../assets/lybMenu/combovit.png";

export default function MenuPage() {
  return (
    <section
      id="menu"
      className="text-xs md:text-sm pt-28 md:pt-36 min-h-screen bg-gradient-to-b from-white via-green-100 to-orange-100/50 px-6 md:px-8 py-14"
    >
      <div className="lg:w-[80%] mx-auto flex flex-col items-center shadow-lg">
        <h1 className="w-full py-4 text-center bg-darkYellow/10">LYB menu</h1>
        <div className="border-1 border-darkYellow/20 w-full"></div>

        <div className="bg-gradient-to-b from-white via-orange-100 to-yellow-50 px-4 py-14 flex flex-col gap-12 lg:gap-16">
          {/* juices */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full flex flex-col items-center">
              <h3 className="">Juices</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              <p className="body-text pt-2 font-semibold">350 ml ↝ SRD 100</p>
              <p className="body-text pt-2 font-semibold">1000 ml ↝ SRD 230</p>
            </div>
            <div className="sm:w-[90%] grid grid-cols-3 sm:grid-cols-4 gap-4 text-center">
              <li className="flex flex-col items-center">
                <img
                  src={juice1}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#1. ananas-lemmetje</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice2}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#2. chia-zuurzak</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice3}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#3. chia-aardbei</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice4}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#4. papaja-kers</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice5}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#5. awarra</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice6}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#6. basilicum-lemmetje-moringa</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice7}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#7. sopropo-zuurzak-moringa</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice8}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#8. avocado-ananas-moringa</span>
              </li>
            </div>
          </div>

          {/* smoothies */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <h3 className="">Smoothies</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              {/* <div className="border-1 border-darkYellow/20 w-full"></div> */}
              <p className="body-text pt-2 font-semibold">350 ml ↝ SRD 115</p>
              <p className="body-text pt-2 font-semibold">1000 ml ↝ SRD 260</p>
            </div>
            <div className="sm:w-[90%] grid grid-cols-3 sm:grid-cols-4 gap-4 text-center">
              <li className="flex flex-col items-center">
                <img
                  src={smoothie9}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#9. ananas-framboos-bacove</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie10}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#10. zuurzak-aardbei-bacove</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie11}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#11. manja-markoesa-bacove</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie12}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#12. awarra-bacove</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie13}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#13. podosiri-kers-bacove</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie14}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#14. spinazie-kers-bacove-moringa</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie15}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#15. sopropo-pommeciter-bacove-moringa</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie16}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">#16. komkommer-gember-lemmetje-moringa</span>
              </li>
            </div>
          </div>

          {/* welness shots */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <h3 className="">Welness shots</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              <p className="body-text pt-2 font-semibold">sets van 125 ml ↝ SRD 500</p>
            </div>
            <div className="grid grid-cols-4 sm:w-[70%] gap-4 text-center">
              <li className="flex flex-col items-center">
                <img
                  src={shot1}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">7x kurkuma-kers-zwarte peper</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={shot2}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">7x gember-markoesa-cayenne</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={shot3}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">5x gember-aardbei</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={shot4}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text">7x gember-kurkuma-limoen</span>
              </li>
            </div>
          </div>

          {/* vitamine water */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <h3 className="">Vitamine water</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              <p className="body-text pt-2 font-semibold">1000 ml</p>
              <p className="body-text pt-2 font-semibold">7 liter pack voor SRD 750</p>
            </div>
            <div className="sm:w-[90%] grid grid-cols-3 sm:grid-cols-4 gap-4 text-center">
              <li className="flex flex-col items-center">
                <img
                  src={vit1}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <p className="menu-text font-semibold">SRD 125</p>
                <p className="menu-text mt-1">#1. gember-citroengras</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit2}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <p className="menu-text font-semibold">SRD 125</p>
                <p className="menu-text mt-1">#2. gember-lemmetje</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit3}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <p className="menu-text font-semibold">SRD 125</p>
                <p className="menu-text mt-1">#3. kurkuma-kers</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit4}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <p className="menu-text font-semibold">SRD 110</p>
                <p className="menu-text mt-1">#4. kaneel-kruidnagel</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit5}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <p className="menu-text font-semibold">SRD 110</p>
                <p className="menu-text mt-1">#5. basilicum-lemmetje</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit6}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <p className="menu-text font-semibold">SRD 110</p>
                <p className="menu-text mt-1">#6. sjoeroe</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit7}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <p className="menu-text font-semibold">SRD 110</p>
                <p className="menu-text mt-1">#7. appelazijn</p>
              </li>
            </div>
          </div>

          {/* cleanse en heal */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h3 className="">Cleanse & heal</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              <p className="body-text pt-2 font-semibold">3x 125 ml • 3x 350 ml • 3x 1000 ml</p>
              {/* <p className="body-text pt-2 font-semibold">3x 350 ml</p>
              <p className="body-text pt-2 font-semibold">3x 1000 ml</p> */}
              <p className="body-text pt-2 font-semibold">Complete set t.w.v. SRD 900 ↝ SRD 850</p>
            </div>
            <div className="sm:w-[90%] grid grid-cols-3 gap-2 sm:-ml-6 items-end text-center">
              <li className="flex flex-col items-center">
                <img
                  src={comboshots}
                  alt="fruit splash"
                  // className="w-auto h-28 sm:h-52" />
                  className="w-[72%] h-28 sm:h-auto" />

                <span className="menu-text h-9">3x gember shots</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={combojuice}
                  alt="fruit splash"
                  // className="w-auto h-32 sm:h-60" />
                  className="w-[72%] h-32 sm:h-auto" />

                <span className="menu-text h-9">3x aloë vera juice</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={combovit}
                  alt="fruit splash"
                  className="w-full h-auto" />
                <span className="menu-text h-9">3x kurkuma vitamine water</span>
              </li>
            </div>
          </div>

          {/* sappenkuur */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center">
              <h3 className="">Sappenkuur</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              <p className="body-text pt-2 font-semibold">350 ml</p>
            </div>

            <table className="menu-text w-[92%] border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2"></th>
                  <th className="py-2"></th>
                  <th className="py-2 text-right">Bedrag in SRD</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-nowrap">1-daagse</td>
                  <td className="py-2 pl-4">8 flessen</td>
                  <td className="py-2 text-right">850</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-nowrap">3-daagse</td>
                  <td className="py-2 pl-4">24 flessen + 1 shot gratis</td>
                  <td className="py-2 text-right">2500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-nowrap">5-daagse</td>
                  <td className="py-2 pl-4">40 flessen + 1 L vita water gratis</td>
                  <td className="py-2 text-right">4100</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-nowrap">7-daagse</td>
                  <td className="py-2 pl-4">56 flessen + 2 L vita water gratis</td>
                  <td className="py-2 text-right">5700</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
