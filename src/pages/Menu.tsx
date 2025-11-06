import menu1 from "../assets/lybMenu/1.png";
import menu2 from "../assets/lybMenu/2.png";

export default function MenuPage() {
  return (
    <section
      id="menu"
      className="bg-gradient-to-b from-green-100 via-orange-400 to-white min-h-screen bg-white px-6 md:px-20 py-16 text-center"
    >
      <p className="text-gray-600 mb-3">
        Ontdek onze heerlijke selectie van biologische juices en smoothies.
      </p>

      <div className="space-y-1">
        <img
          src={menu1}
          alt="Menu pagina 1"
          className="w-full md:w-[80%] max-w-2xl mx-auto shadow-md"
        />
        <img
          src={menu2}
          alt="Menu pagina 2"
          className="w-full md:w-[80%] max-w-2xl mx-auto shadow-md"
        />
      </div>
    </section>
  );
}
