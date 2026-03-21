"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Voorkom scrollen wanneer mobiel menu open is
  useEffect(() => {
    if (!menuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  // Scroll tracking voor actieve secties
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      if (location.pathname === "/") {
        const sections = ["home", "benefits"];
        const scrollPosition = window.scrollY + 150;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el && el.offsetTop <= scrollPosition && (el.offsetTop + el.offsetHeight) > scrollPosition) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const goToHome = () => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "Over ons", path: "/about" },
    { id: "menu", label: "Menu", path: "/menu" },
    { id: "benefits", label: "Benefits", path: "/benefits" },
    { id: "faq", label: "FAQ", path: "/faq" },
  ];

  return (
    // Veranderd naar sticky zodat de HeroSection eronder begint
    <nav 
      className={`sticky top-0 left-0 right-0 z-[60] bg-neutral-50 transition-all duration-300 border-b-2 shadow-xs`}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 xl:px-10 2xl:px-0 py-3 flex items-center justify-between lg:justify-start lg:gap-16">
        
        {/* 1. LINKERKANT: Hamburger knop (Mobile) 
            We zetten dit in een container met flex-1 op mobiel om ruimte in te nemen */}
        <div className="flex-1 lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[90] text-gray-600 focus:outline-none p-2 -ml-2"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* 2. MIDDEN: Logo & Slogan 
            Op mobiel staat dit nu gecentreerd door de flex-1 containers aan beide kanten */}
        <div
          className="flex flex-col items-center gap-1 cursor-pointer transition-transform hover:scale-105 shrink-0"
          onClick={goToHome}
        >
          <img src={logo} alt="Love Your Body Logo" className="h-9 w-auto" />
          <div className="flex flex-col items-center leading-tight">
            <span
              className="font-bold text-[8px] tracking-widest text-[#02888d]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              LOVE YOUR BODY
            </span>
            <span
              className="text-[9px] text-[#02888d]"
              style={{ fontFamily: "'Atma', cursive" }}
            >
              juices & smoothies
            </span>
          </div>
        </div>

        {/* 3. RECHTERKANT: Onzichtbare spacer op mobiel / Menu & Socials op desktop 
            De flex-1 zorgt ervoor dat het logo in het midden blijft staan op mobiel */}
        <div className="flex-1 lg:flex-none flex justify-end lg:ml-auto">
          
          {/* Desktop Menu (Verborgen op mobiel) */}
          <ul className="hidden lg:flex gap-8 items-center list-none mr-16">
            {navLinks.map(({ id, label, path }) => (
              <li key={id}>
                <Link
                  to={path}
                  onClick={() => id === "home" ? goToHome() : setMenuOpen(false)}
                  className={`text-md transition-all pb-1 border-b-2 ${
                    (location.pathname === path && id !== "benefits") || (activeSection === id && location.pathname === "/")
                      ? "border-bioGreen text-bioGreen"
                      : "border-transparent text-gray-500 hover:text-bioGreen"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* WhatsApp Icon (Zichtbaar op desktop) */}
          <div className="hidden lg:flex items-center">
             <a href="https://wa.me/5978531071" target="_blank" rel="noopener noreferrer" className="text-bioGreen hover:scale-110 transition-transform">
               <IoLogoWhatsapp className="w-6 h-6" />
             </a>
          </div>

          {/* Onzichtbare spacer voor mobiel: zorgt dat logo gecentreerd blijft */}
          <div className="w-12 lg:hidden" aria-hidden="true"></div>
        </div>

      </div>

      {/* Mobiel Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop om focus op menu te leggen */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[70] lg:hidden"
            />
            
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed z-[80] top-0 left-0 h-screen w-[75%] bg-neutral-50 shadow-2xl flex flex-col"
            >
              <ul className="flex flex-col px-8 gap-6 pt-24">
                {navLinks.map(({ id, label, path }) => (
                  <li key={id}>
                    <Link
                      to={path}
                      onClick={() => {
                        setMenuOpen(false);
                        if (id === "home") goToHome();
                      }}
                      className={`text-md block pb-2 border-b-2 transition-colors ${
                        activeSection === id ? "border-bioGreen text-bioGreen" : "border-gray-100 text-gray-600"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Socials Footer */}
              <div className="mt-auto p-8 border-t border-gray-100 flex gap-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><TiSocialFacebook className="w-7 h-7 text-gray-500" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><TiSocialInstagram className="w-7 h-7 text-gray-500" /></a>
                <a href="https://wa.me/5978531071" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className="w-7 h-7 text-gray-500" /></a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}