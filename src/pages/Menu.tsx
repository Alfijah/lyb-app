import smear from "../assets/lybMenu/smear.png";
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

export default function MenuPage() {
  return (
    <section
      id="menu"
      className="text-xs md:text-sm pt-28 md:pt-36 min-h-screen bg-white px-6 md:px-[30%]"
    >
      <div className="flex flex-col items-center shadow-sm">
        <h1 className="w-full py-4 text-center bg-darkYellow/10">LYB menu</h1>
        <div className="border-1 border-darkYellow/20 w-full"></div>

        <div className="bg-gradient-to-b from-white via-orange-100 to-yellow-50 px-4 py-4 flex flex-col gap-12">
          {/* juices */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full flex flex-col items-center">
              <h3 className="">Juices</h3>
              <img
                src={smear}
                className="w-full h-5px" />
              {/* <div className="border-1 border-tealBrand/50 w-full"></div> */}
              <p className="body-text pt-2 font-semibold">350 ml ↝ SRD 100</p>
              <p className="body-text pt-2 font-semibold">1000 ml ↝ SRD 230</p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 text-center">
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
                className="w-full h-5px" />
              {/* <div className="border-1 border-darkYellow/20 w-full"></div> */}
              <p className="body-text pt-2 font-semibold">350 ml ↝ SRD 115</p>
              <p className="body-text pt-2 font-semibold">1000 ml ↝ SRD 260</p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 text-center">
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
                className="w-full h-5px" />
              <p className="body-text pt-2 font-semibold">sets van 125 ml ↝ SRD 500</p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 text-center">
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
                className="w-full h-5px" />
              <p className="body-text pt-2 font-semibold">1000 ml</p>
              <p className="body-text pt-2 font-semibold">7 liter pack voor SRD 750</p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 text-center">
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
        </div>
      </div>
    </section>
  );
}
