"use client";

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<
    "home" | "benefits" | null
  >("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll-tracking enkel wanneer we op de home route zitten
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    // initial active = home (top)
    const updateInitial = () => {
      const elHome = document.getElementById("home");
      if (elHome && window.scrollY < 120) {
        setActiveSection("home");
      }
    };
    updateInitial();

    const handleScroll = () => {
      // alleen deze twee secties tracken
      const sections: Array<"home" | "benefits"> = ["home", "benefits"];
      const scrollPosition = window.scrollY + 120; // offset voor fixed navbar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          el.offsetTop + el.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          return;
        }
      }

      // als niets matcht (bijv. helemaal bovenaan)
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Helper: navigeren naar home of naar sectie op home
  const goToHome = () => {
    // Als we al op home zitten: scroll naar top
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      setMenuOpen(false);
      return;
    }

    // Anders: navigeer eerst naar home, wacht kort en scroll
    navigate("/");
    // kleine delay zodat de DOM van de home pagina kan renderen
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      setMenuOpen(false);
    }, 120);
  };

  const goToBenefits = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("benefits");
      if (el) {
        // scroll erbij, houdt rekening met vaste navbar
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveSection("benefits");
      }
      setMenuOpen(false);
      return;
    }

    // navigeer eerst naar home en scroll daarna naar benefits
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("benefits");
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveSection("benefits");
      }
      setMenuOpen(false);
    }, 200);
  };

  // navLinks: path voor pages; benefits handled separately because it's an anchor on home
  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "Over ons", path: "/about" },
    { id: "menu", label: "Menu", path: "/menu" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="flex justify-between items-center px-6 md:px-16 py-3">
        {/* Logo + slogan */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={goToHome}
        >
          <img src={logo} alt="JuiceBar Logo" className="h-10 w-auto" />
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

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center text-sm">
          {/* Home (special) */}
          <li>
            <button
              onClick={goToHome}
              className={`pb-1 transition-colors hover:text-tealHover ${
                activeSection === "home"
                  ? "border-b-2 border-green-600 text-bioGreen"
                  : ""
              }`}
            >
              Home
            </button>
          </li>

          {/* Overige pagina-links (geen underline) */}
          {navLinks
            .filter((n) => n.id !== "home")
            .map(({ id, label, path }) => {
              if (id === "menu") {
                // menu: normale route
                return (
                  <li key={id}>
                    <Link
                      to={path}
                      onClick={() => setMenuOpen(false)}
                      className="pb-1 transition-colors hover:text-tealHover"
                    >
                      {label}
                    </Link>
                  </li>
                );
              }
              // overige pages (about, faq, delivery, contact)
              return (
                <li key={id}>
                  <Link
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className="pb-1 transition-colors hover:text-tealHover"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

          {/* Benefits (anchor on Home) */}
          <li>
            <button
              onClick={goToBenefits}
              className={`pb-1 transition-colors hover:text-tealHover ${
                activeSection === "benefits"
                  ? "border-b-2 border-green-600 text-bioGreen"
                  : ""
              }`}
            >
              Benefits
            </button>
          </li>

          {/* Bestellen (link to contact page) */}
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="bg-bioGreen text-white px-4 py-2 rounded-lg hover:bg-tealHover transition-colors"
              href="https://wa.me/31648610436"
              target="_blank"
              rel="noopener
              noreferrer"
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

      {/* Mobiel menu */}
      <div
        className={`md:hidden bg-green/90 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-md ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 text-xs md:text-sm">
          {/* Home */}
          <li>
            <button
              onClick={() => {
                goToHome();
                setMenuOpen(false);
              }}
              className={`block pb-1 transition-colors hover:text-bioGreen ${
                activeSection === "home"
                  ? "border-b-2 border-green-600 text-tealHover"
                  : ""
              }`}
            >
              Home
            </button>
          </li>

          {/* Regular links */}
          {navLinks
            .filter((n) => n.id !== "home")
            .map(({ id, label, path }) => (
              <li key={id}>
                {id === "menu" ? (
                  <Link
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className="block pb-1 transition-colors hover:text-bioGreen"
                  >
                    {label}
                  </Link>
                ) : (
                  <Link
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className="block pb-1 transition-colors hover:text-bioGreen"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}

          {/* Benefits */}
          <li>
            <button
              onClick={() => {
                goToBenefits();
                setMenuOpen(false);
              }}
              className={`block pb-1 transition-colors hover:text-bioGreen ${
                activeSection === "benefits"
                  ? "border-b-2 border-green-600 text-tealHover"
                  : ""
              }`}
            >
              Benefits
            </button>
          </li>

          {/* Bestellen */}
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="bg-bioGreen text-white px-4 py-2 rounded-lg hover:bg-tealHover transition-colors"
              href="https://wa.me/31648610436"
              target="_blank"
              rel="noopener
              noreferrer"
            >
              Bestellen
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
