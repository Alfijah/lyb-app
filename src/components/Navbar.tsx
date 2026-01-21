"use client";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<
    "home" | "benefits" | null
  >("home");
  const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 whitespace-nowrap
            ${isScrolled ? "backdrop-blur-xl text-black shadow-md" : "bg-transparent text-white"}`}>
      <div className="flex max-w-screen-2xl lg:gap-16 justify-between lg:justify-normal lg:items-center lg:w-[65%] px-3 lg:px-12 py-3">
        {/* Logo + slogan */}
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={goToHome}
        >
          <img src={logo} alt="JuiceBar Logo" className="h-10 w-auto" />
          <div className="flex flex-col items-center leading-tight">
            <span
              className="text-green-800 font-bold text-[9px]"
              style={{
                color: "#02888d",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              LOVE YOUR BODY
            </span>
            <span
              className="text-green-600 text-[9px]"
              style={{ color: "#02888d", fontFamily: "'Atma', cursive" }}
            >
              juices & smoothies
            </span>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-8 nav-text font-medium items-center">
          {/* Home (special) */}
          <li>
            <Link
              to={"/"}
              onClick={goToHome}
              className={`pb-1 hover:text-bioGreen transition-colors ${activeSection === "home"
                ? "border-b-2 border-bioGreen text-bioGreen"
                : ""
                }`}
            >
              Home
            </Link>
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
                      className="pb-1 hover:text-bioGreen transition-colors hover:border-b-2 hover:border-bioGreen"
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
                    className="pb-1 hover:text-bioGreen transition-colors hover:border-b-2 hover:border-bioGreen"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

          {/* Benefits (anchor on Home) */}
          <li>
            <Link
              to={"/"}
              onClick={goToBenefits}
              className={`pb-1 hover:text-bioGreen transition-colors hover:border-b-2 hover:border-bioGreen ${activeSection === "benefits"
                ? "border-b-2 border-bioGreen text-bioGreen"
                : ""
                }`}
            >
              Benefits
            </Link>
          </li>

          {/* Bestellen (link to contact page) */}
          {/* <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="bg-bioGreen text-white px-4 py-2 rounded-lg hover:bg-tealHover transition-colors"
              href="https://wa.me/5978715108"
              target="_blank"
              rel="noopener
              noreferrer"
            >
              Bestellen
            </a>
          </li> */}
        </ul>

        {/* Hamburger knop (mobiel) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-tealHover focus:outline-none"
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
        className={`md:hidden bg-gradient-to-b from-green-50 via-green-100 to-white overflow-hidden shadow-md ${menuOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-tealBrand">
          {/* Home */}
          <li>
            <button
              onClick={() => {
                goToHome();
                setMenuOpen(false);
              }}
              className={`block pb-1 transition-colors hover:text-bioGreen ${activeSection === "home"
                ? "border-b-2 border-bioGreen text-bioGreen"
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
              className={`block pb-1 transition-colors hover:text-bioGreen ${activeSection === "benefits"
                ? "border-b-2 border-green-600 text-tealHover"
                : ""
                }`}
            >
              Benefits
            </button>
          </li>

          {/* Bestellen */}
          {/* <li>
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
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
