"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<
    "home" | "about" | "benefits" | "menu" | null
  >("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // voorkomt "layout shift" door scrollbar verdwijnen (desktop)
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [menuOpen]);


  // Scroll-tracking enkel wanneer we op de home route zitten
  useEffect(() => {
    if (location.pathname !== "/") {
      const map: Record<string, "about" | "menu" | "benefits" | "home"> = {
        "/about": "about",
        "/menu": "menu",
        "/benefits": "benefits",
        "/": "home",
      };
      setActiveSection(map[location.pathname] ?? null);
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
      const scrollPosition = window.scrollY + 120;

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

      // als niets matcht
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const goToHome = () => {
    setMenuOpen(false);
    setActiveSection("home");

    if (location.pathname === "/") {
      navigate("/", { replace: false });
      // wacht tot de nieuwe route gerenderd is
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Anders: navigeer eerst naar home, wacht kort en scroll
    navigate("/");
    // kleine delay zodat de DOM van de home pagina kan renderen
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      setMenuOpen(false);
    }, 120);
  };

  // navLinks: path voor pages; benefits handled separately because it's an anchor on home
  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "Over ons", path: "/about" },
    { id: "menu", label: "Menu", path: "/menu" },
    { id: "benefits", label: "Benefits", path: "/benefits" },
  ];

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="home" className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-700 whitespace-nowrap
            ${isScrolled ? "backdrop-blur-xl text-black shadow-md" : "bg-transparent text-white"}`}>
      <div className="relative z-[70] flex max-w-screen-3xl lg:gap-16 justify-between lg:justify-normal lg:items-center lg:w-[65%] px-6 lg:pl-12 py-3">
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
              className={`pb-1 hover:text-bioGreen hover:border-b-2 hover:border-bioGreen transition-colors ${activeSection === "home"
                ? "border-b-2 border-bioGreen text-bioGreen"
                : ""
                }`}
            >
              Home
            </Link>
          </li>

          {/* Overige pagina-links */}
          {navLinks
            .filter((n) => n.id !== "home")
            .map(({ id, label, path }) => {
              return (
                <li key={id}>
                  <Link
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`pb-1 hover:text-bioGreen hover:border-b-2 hover:border-bioGreen transition-colors ${activeSection === id
                      ? "border-b-2 border-bioGreen text-bioGreen"
                      : ""
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
        </ul>

        {/* Hamburger knop */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[80] lg:hidden text-tealHover focus:outline-none"
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden fixed top-0 right-0 h-screen w-[60%] bg-gradient-to-b from-green-50 via-green-100 to-white shadow-md z-[50]"
          >
            <ul className="flex flex-col items-center gap-4 pt-20 body-text">
              {/* Home */}
              <li>
                <Link
                  to={"/"}
                  onClick={goToHome}
                  className={`block pb-1 transition-colors hover:text-bioGreen hover:border-b-2 hover:border-bioGreen ${activeSection === "home"
                    ? "border-b-2 border-bioGreen text-bioGreen"
                    : ""
                    }`}
                >
                  Home
                </Link>
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
                        className={`block pb-1 transition-colors hover:text-bioGreen hover:border-b-2 hover:border-bioGreen ${activeSection === "menu"
                          ? "border-b-2 border-bioGreen text-bioGreen"
                          : ""
                          }`}
                      >
                        {label}
                      </Link>
                    ) : (
                      <Link
                        to={path}
                        onClick={() => setMenuOpen(false)}
                        className={`block pb-1 transition-colors hover:text-bioGreen hover:border-b-2 hover:border-bioGreen ${activeSection === id
                          ? "border-b-2 border-bioGreen text-bioGreen"
                          : ""
                          }`}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}

              {/* Benefits */}
              {/* <li>
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
          </li> */}

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

            {/* Socials */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-10 flex space-x-4">
              <a
                href="https://www.facebook.com/lybjuicesandsmoothies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialFacebook className="w-6 h-6 body-text" />
              </a>
              <a
                href="https://www.instagram.com/lybjuicesandsmoothies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialInstagram className="w-6 h-6 body-text" />
              </a>
              <a
                href="https://wa.me/5978715108"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="w-6 h-6 body-text" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
