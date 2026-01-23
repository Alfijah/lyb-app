import menu1 from "../assets/lybMenu/1.png";
import menu2 from "../assets/lybMenu/2.png";
import juice1 from "../assets/lybMenu/juice-1.png";
import juice2 from "../assets/lybMenu/juice-2.png";
import juice3 from "../assets/lybMenu/juice-3.png";

export default function MenuPage() {
  return (
    <section
      id="menu"
      className="text-xs md:text-sm pt-28 md:pt-36 bg-gradient-to-b from-green-200 via-orange-300 to-orange-500/80 min-h-screen bg-white px-6 md:px-[30%]"
    >
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        <li className="flex flex-col items-center gap-2">
          <img
            src={juice1}
            alt="fruit splash"
            className="w-full -mt-8 h-auto object-cover lg:object-center" />
          <span className="menu-text">ananas-lemmetje</span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <img
            src={juice2}
            alt="fruit splash"
            className="w-full -mt-8 h-auto object-cover lg:object-center" />
          <span className="menu-text">chia-zuurzak</span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <img
            src={juice3}
            alt="fruit splash"
            className="w-full -mt-8 h-auto object-cover lg:object-center" />
          <span className="menu-text">chia-aardbei</span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <span className="menu-text">Natuurlijker leven</span>
        </li>
      </div>
      <p className="text-gray-600 mb-3 text-center md:text-left"></p>
      Uit ons menu kunt u kiezen voor een losse juice of smoothie, of een
      combinatie hiervan. <br></br>
      <br></br>Wilt u een plan dat perfect aansluit bij uw levensstijl? Neem
      gerust contact met ons op via WhatsApp.
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
    </section>
  );
}
