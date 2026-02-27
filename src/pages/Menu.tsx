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
import comboshots from "../assets/lybMenu/cleanse1.png";
import combojuice from "../assets/lybMenu/cleanse2.png";
import combovit from "../assets/lybMenu/cleanse3.png";
import bgImage from "../assets/lybMenu/paperBg.jpg";

export default function MenuPage() {
  return (
    <section
      id="menu"
      className="text-xs md:text-sm pt-28 md:pt-36 min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-orange-100 px-6 md:px-8 py-14"
    >
      <div className="lg:w-[80%] mx-auto flex flex-col items-center">
        <h1 className="w-full py-4 text-center">LYB menu</h1>

        <div className="flex flex-col gap-8 lg:gap-16">
          {/* juices */}
          <div id="juices" style={{ backgroundImage: `url(${bgImage})`}} className="flex flex-col items-center py-10 gap-6 border-5 border-double border-tealBrand shadow-md">
            <div className="w-full flex flex-col items-center">
              <p className="exceptionTextExtra text-tealBrand">Juices</p>
              <img
                src={smear}
                className="w-full pt-2" />
              <p className="body-text pt-2 font-semibold">350 ml ↝ SRD 100</p>
              <p className="body-text pt-2 font-semibold">1000 ml ↝ SRD 230</p>
            </div>
            <div className="sm:w-[90%] grid grid-cols-2 gap-4 text-center px-4">
              <li className="w-full flex flex-col items-center justify-center">
                <img
                  src={juice1}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text"><span className="exceptionText font-semibold">#1.</span> ananas-lemmetje</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice2}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text"><span className="exceptionText font-semibold">#2.</span> chia-zuurzak</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice3}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text"><span className="exceptionText font-semibold">#3.</span> chia-aardbei</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice4}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text"><span className="exceptionText font-semibold">#4.</span> papaja-kers</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice5}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text"><span className="exceptionText font-semibold">#5.</span> awarra</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice6}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text"><span className="exceptionText font-semibold">#6.</span> basilicum-lemmetje-moringa</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice7}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text"><span className="exceptionText font-semibold">#7.</span> sopropo-zuurzak-moringa</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={juice8}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text"><span className="exceptionText font-semibold">#8.</span> avocado-ananas-moringa</span>
              </li>
            </div>
          </div>

          {/* smoothies */}
          <div id="smoothies" style={{ backgroundImage: `url(${bgImage})`}} className="bg-white flex flex-col items-center py-10 gap-6 border-5 border-double border-tealBrand shadow-md">
            <div className="flex flex-col items-center">
              <h3 className="exceptionTextExtra text-tealBrand">Smoothies</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              {/* <div className="border-1 border-darkYellow/20 w-full"></div> */}
              <p className="body-text pt-2 font-semibold">350 ml ↝ SRD 115</p>
              <p className="body-text pt-2 font-semibold">1000 ml ↝ SRD 260</p>
            </div>
            <div className="sm:w-[90%] grid grid-cols-2 gap-4 text-center px-4">
              <li className="flex flex-col items-center">
                <img
                  src={smoothie9}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="menu-text"><span className="exceptionText font-semibold">#9.</span> ananas-framboos-bacove</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie10}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="menu-text"><span className="exceptionText font-semibold">#10.</span> zuurzak-aardbei-bacove</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie11}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="menu-text"><span className="exceptionText font-semibold">#11.</span> manja-markoesa-bacove</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie12}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="menu-text"><span className="exceptionText font-semibold">12.</span> awarra-bacove</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie13}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="menu-text"><span className="exceptionText font-semibold">#13.</span> podosiri-kers-bacove</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie14}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="menu-text"><span className="exceptionText font-semibold">#14.</span> spinazie-kers-bacove-moringa</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie15}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="menu-text"><span className="exceptionText font-semibold">#15.</span> sopropo-pommeciter-bacove-moringa</span>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={smoothie16}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="menu-text"><span className="exceptionText font-semibold">#16.</span> komkommer-gember-lemmetje-moringa</span>
              </li>
            </div>
          </div>

          {/* welness shots */}
          <div id="shots" style={{ backgroundImage: `url(${bgImage})`}} className="flex flex-col items-center py-10 gap-6 border-5 border-double border-tealBrand shadow-md">
            <div className="flex flex-col items-center">
              <h3 className="exceptionTextExtra text-tealBrand">Welness shots</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              <p className="body-text pt-2 font-semibold">Elke set ↝ SRD 500</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center px-4">
              <li className="flex flex-col items-center">
                <img
                  src={shot1}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text">kurkuma-kers-zwarte peper</span>
                <p className="body-text font-semibold pt-1">7x 350 ml</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={shot2}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text">gember-markoesa-cayenne</span>
                <p className="body-text font-semibold pt-1">7x 350 ml</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={shot3}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text">gember-aardbei</span>
                <p className="body-text font-semibold pt-1">5x 350 ml</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={shot4}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <span className="body-text">gember-kurkuma-limoen</span>
                <p className="body-text font-semibold pt-1">7x 350 ml</p>
              </li>
            </div>
          </div>

          {/* vitamine water */}
          <div id="vitawater" style={{ backgroundImage: `url(${bgImage})`}} className="flex flex-col items-center py-10 gap-6 border-5 border-double border-tealBrand shadow-md">
            <div className="flex flex-col items-center">
              <h3 className="exceptionTextExtra text-tealBrand">Vitamine water</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              <p className="body-text pt-2 font-semibold">7 liter pack voor SRD 750</p>
            </div>
            <div className="sm:w-[90%] grid grid-cols-2 gap-4 text-center px-4">
              <li className="flex flex-col items-center">
                <img
                  src={vit1}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <p className="body-text mt-1"><span className="exceptionText font-semibold">#1.</span> gember-citroengras</p>
                <p className="body-text font-semibold pt-1">1000 ml ↝ SRD 125</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit2}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <p className="body-text mt-1"><span className="exceptionText font-semibold">#2.</span> gember-lemmetje</p>
                <p className="body-text font-semibold pt-1">1000 ml ↝ SRD 125</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit3}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <p className="body-text mt-1"><span className="exceptionText font-semibold">#3.</span> kurkuma-kers</p>
                <p className="body-text font-semibold pt-1">1000 ml ↝ SRD 125</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit4}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <p className="body-text mt-1"><span className="exceptionText font-semibold">#4.</span> kaneel-kruidnagel</p>
                <p className="body-text font-semibold pt-1">1000 ml ↝ SRD 110</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit5}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <p className="body-text mt-1"><span className="exceptionText font-semibold">#5.</span> basilicum-lemmetje</p>
                <p className="body-text font-semibold pt-1">1000 ml ↝ SRD 110</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit6}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <p className="body-text mt-1"><span className="exceptionText font-semibold">#6.</span> sjoeroe</p>
                <p className="body-text font-semibold pt-1">1000 ml ↝ SRD 110</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={vit7}
                  alt="fruit splash"
                  className="w-[100px] h-auto" />
                <p className="body-text mt-1"><span className="exceptionText font-semibold">#7.</span> appelazijn</p>
                <p className="body-text font-semibold pt-1">1000 ml ↝ SRD 110</p>
              </li>
            </div>
          </div>

          {/* cleanse en heal */}
          <div id="cleanse" style={{ backgroundImage: `url(${bgImage})`}} className="flex flex-col items-center py-10 border-5 border-double border-tealBrand shadow-md">
            <div className="flex flex-col items-center">
              <h3 className="exceptionTextExtra text-tealBrand">Cleanse & heal</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              {/* <p className="body-text pt-2 font-semibold">3x 350 ml</p>
              <p className="body-text pt-2 font-semibold">3x 1000 ml</p> */}
              <p className="body-text pt-2 font-semibold">Complete set t.w.v. SRD 900 ↝ SRD 850</p>
            </div>
            <div className="sm:w-[90%] grid grid-cols-2 gap-4 text-center px-4">
              <li className="flex flex-col items-center">
                <img
                  src={comboshots}
                  alt="fruit splash"
                  className="w-[200px] h-auto sm:h-auto" />
                <span className="body-text">Gember shots</span>
                <p className="body-text font-semibold pt-1">3x 125 ml</p>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={combojuice}
                  alt="fruit splash"
                  // className="w-auto h-32 sm:h-60" />
                  className="w-[200px] h-auto sm:h-auto" />
                <span className="body-text">Aloë vera juice</span>
                <p className="body-text font-semibold pt-1">3x 350 ml</p>

              </li>
              <li className="flex flex-col items-center">
                <img
                  src={combovit}
                  alt="fruit splash"
                  className="w-[200px] h-auto" />
                <span className="body-text">Kurkuma vitamine water</span>
                <p className="body-text font-semibold pt-1">3x 1000 ml</p>
              </li>
            </div>
          </div>

          {/* sappenkuur */}
          <div id="sappenkuur" style={{ backgroundImage: `url(${bgImage})`}} className="flex flex-col items-center py-10 gap-6 border-5 border-double border-tealBrand shadow-md">
            <div className="flex flex-col items-center">
              <h3 className="exceptionTextExtra text-tealBrand">Sappenkuur</h3>
              <img
                src={smear}
                className="w-full pt-2" />
              <p className="body-text pt-2 font-semibold">*350 ml</p>
            </div>

            <table className="body-text w-[92%] border-collapse">
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
                  <td className="py-2 pl-4">8 flessen*</td>
                  <td className="py-2 text-right">850</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-nowrap">3-daagse</td>
                  <td className="py-2 pl-4">24 flessen* + 1 shot <span className="exceptionText font-semibold">gratis</span></td>
                  <td className="py-2 text-right">2500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-nowrap">5-daagse</td>
                  <td className="py-2 pl-4">40 flessen* + 1000 ml vita water <span className="exceptionText font-semibold">gratis</span></td>
                  <td className="py-2 text-right">4100</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-nowrap">7-daagse</td>
                  <td className="py-2 pl-4">56 flessen* + 2000 ml vita water <span className="exceptionText font-semibold">gratis</span></td>
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
