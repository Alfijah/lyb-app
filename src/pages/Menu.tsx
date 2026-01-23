import menu1 from "../assets/lybMenu/1.png";
import menu2 from "../assets/lybMenu/2.png";
import juice1 from "../assets/lybMenu/juice-1.png";
import juice2 from "../assets/lybMenu/juice-2.png";
import juice3 from "../assets/lybMenu/juice-3.png";
import juice4 from "../assets/lybMenu/juice-4.png";

export default function MenuPage() {
  return (
    <section
      id="menu"
      className="text-xs md:text-sm pt-28 md:pt-36 bg-gradient-to-b from-green-200 via-orange-300 to-orange-500/80 min-h-screen bg-white px-6 md:px-[30%]"
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="py-4">LYB menu</h1>

        {/* juices */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <h3 className="py-2">Juices</h3>
            <p className="body-text pt-2">350 ml ↝ SRD 100</p>
            <p className="body-text pt-2">1000 ml ↝ SRD 230</p>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <li className="flex flex-col items-center gap-2">
              <img
                src={juice1}
                alt="fruit splash"
                className="w-full h-auto" />
              <span className="menu-text">#1. ananas-lemmetje</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <img
                src={juice2}
                alt="fruit splash"
                className="w-full h-auto" />
              <span className="menu-text">#2. chia-zuurzak</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <img
                src={juice3}
                alt="fruit splash"
                className="w-full h-auto" />
              <span className="menu-text">#3.chia-aardbei</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <img
                src={juice4}
                alt="fruit splash"
                className="w-full h-auto" />
              <span className="menu-text">#4. papaja-kers</span>
            </li>
          </div>
        </div>
        
        <div className="space-y-1 pt-5 md:pt-10">
          <img
            src={menu1}
            alt="Menu pagina 1"
            className="w-full md:w-[100%] max-w-2xl mx-auto shadow-md"
          />
          <img
            src={menu2}
            alt="Menu pagina 2"
            className="w-full md:w-[100%] max-w-2xl mx-auto shadow-md pb-20"
          />
        </div>
      </div>
    </section>
  );
}
