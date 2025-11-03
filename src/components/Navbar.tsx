"use client";
import { useState, useEffect } from "react";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Volgt de scrollpositie om underline toe te passen
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "benefits", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          el.offsetTop + el.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "Over ons" },
    { id: "menu", label: "Menu" },
    { id: "benefits", label: "Benefits" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-sm shadow-md transition-colors duration-300">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo + Slogan */}
        <div className="flex items-center gap-3">
          {/* Logo afbeelding */}
          <img src={logo} alt="JuiceBar Logo" className="h-10 w-auto" />

          {/* Tekst rechts van logo */}
          <div className="flex flex-col items-center leading-tight">
            <span
              className="text-green-800 font-bold text-base"
              style={{
                color: "#02888d",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              LOVE YOUR BODY
            </span>
            <span
              className="text-green-600 text-sm"
              style={{ color: "#02888d", fontFamily: "'Atma', cursive" }}
            >
              juices & smoothies
            </span>
          </div>
        </div>

        {/* Logo links
        <div className="flex items-center">
          <img
            src={logo}
            alt="JuiceBar Logo"
            className="h-10 w-auto" // pas deze grootte aan naar wens
          />
        </div> */}

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center text-sm">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={`pb-1 transition-colors hover:text-tealHover ${
                  activeSection === id
                    ? "border-b-2 border-green-600 text-tealBrand"
                    : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-tealBrand text-white px-4 py-2 rounded-lg hover:bg-tealHover transition-colors"
            >
              Bestellen
            </a>
          </li>
        </ul>

        {/* Hamburger knop (mobiel) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-tealHover focus:outline-none"
          aria-label="Menu toggle"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobiel menu (uitklapbaar) */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden shadow-md ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`block pb-1 transition-colors hover:text-tealBrand ${
                  activeSection === id
                    ? "border-b-2 border-green-600 text-tealHover"
                    : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-tealBrand text-white px-4 py-2 rounded-lg hover:bg-tealHover transition-colors"
            >
              Bestellen
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
