function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center px-8 py-16 bg-green-50"
    >
      <div className="flex-1 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-green-800">
          Pure. Fris. Gezond.
        </h1>
        <p className="text-gray-600 text-lg">
          Ontdek onze verse biologische juices en smoothies — vol smaak, zonder
          toevoegingen.
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Bestel nu via WhatsApp
        </a>
      </div>
      <div className="flex-1 mt-8 md:mt-0">
        {/* <Image src={heroImage} alt="Smoothies" className="rounded-2xl shadow-lg" /> */}
      </div>
    </section>
  );
}

export default HeroSection;
