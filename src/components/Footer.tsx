"use client";

import logo from "../assets/logo2.png";
import fbIcon from "../assets/contactSection/fbIcon.png";
import iGIcon from "../assets/contactSection/igIcon.png";
import inIcon from "../assets/contactSection/inIcon.png";

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('../assets/contactSection/contactSectionBg.png')",
      }} // 👈 vervang door jouw afbeelding
    >
      {/* Overlay kleur */}
      <div className="absolute inset-0 bg-green-900/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-12">
        {/* Bovenste contentgedeelte */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo + slogan + tekst */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="LYB Logo" className="h-16 w-auto" />
              <div className="leading-tight">
                <p className="text-lg font-semibold font-[Cerebri] tracking-wide">
                  LOVE YOUR BODY
                </p>
                <p className="text-sm font-[Atma] italic">juices & smoothies</p>
              </div>
            </div>
            <p className="text-gray-200 max-w-sm">
              Verse, gezonde juices en smoothies, dagelijks met liefde bereid
              met de beste biologische ingrediënten.
            </p>

            {/* Social media icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/jouwpagina"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-green-700 transition"
              >
                <img
                  src={fbIcon}
                  alt="Gezond hart"
                  className="w-12 h-12 mb-4"
                />
              </a>
              <a
                href="https://www.instagram.com/jouwpagina"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-green-700 transition"
              >
                <img
                  src={iGIcon}
                  alt="Gezond hart"
                  className="w-12 h-12 mb-4"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Snelkoppelingen</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="#menu" className="hover:text-white transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-white transition">
                  Bezorging
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Bestelmelding */}
          <div className="flex flex-col justify-center items-center md:items-start space-y-3">
            <p className="text-sm text-gray-200">
              ⚠️ Bestellen is momenteel alleen mogelijk via{" "}
              <span className="text-green-300 font-semibold">WhatsApp</span>.
            </p>
            <a
              href="https://wa.me/31600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Bestel via WhatsApp
            </a>
          </div>
        </div>

        {/* Onderlijn */}
        <div className="border-t border-white/30 pt-6 text-center text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} LYB Juices & Smoothies — Alle rechten
            voorbehouden.
          </p>
          <p className="mt-2">
            Gemaakt met ❤️ door{" "}
            <a
              href="https://www.linkedin.com/in/jouwprofiel"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              <img src={inIcon} alt="Gezond hart" className="w-12 h-12 mb-4" />
              Jouw Naam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
