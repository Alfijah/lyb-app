"use client";
import logo from "../assets/logo2.png";
import fbIcon from "../assets/contactSection/fbIcon.png";
import iGIcon from "../assets/contactSection/igIcon.png";
import wAIcon from "../assets/contactSection/wAIcon.png";
import { Link } from "react-router-dom";

export default function FooterSection() {

  return (
    <footer
      id="contact"
      className="relative bg-cover bg-bottom text-white"
      style={{
        backgroundImage:
          "url('src/assets/contactSection/contactSectionBg.png')",
      }}
    >
      {/* Overlay kleur */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-4 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 text-center md:text-left">
          {/* --- LINKERKOLOM: Logo + slogan + tekst --- */}
          <div className="space-y-4 flex items-center md:items-start md:text-start  md:gap-4">
            <div
              className="flex flex-col md:w-[50%] items-center gap-1 cursor-pointer"
            // onClick={goToHome}
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

            <div className="flex flex-col gap-4 px-2">
              <p className="flex sm:mx-auto body-text footer">
                Natuurlijke sappen en smoothies in Paramaribo, Suriname.
              </p>
              <p className="flex sm:mx-auto body-text footer">
                ⚠️ Bestellen is momenteel alleen mogelijk via WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex mx-auto gap-14">
            {/* Quick Links */}
            <div className="space-y-4 flex flex-col items-center md:items-center md:text-start">
              <h3 className="text-sm font-bold">Quick Links</h3>
              <ul className="space-y-2 text-gray-200 text-xs md:text-sm">
                <li>
                  <Link to="/" className="body-text footer hover:text-darkYellow transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="body-text footer hover:text-darkYellow transition">
                    Over ons
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="body-text footer hover:text-darkYellow transition">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/benefits" className="body-text footer hover:text-darkYellow transition">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/benefits#disclaimer" className="body-text footer hover:text-darkYellow transition">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            {/*RECHTERKOLOM */}
            <div className="flex flex-col items-center md:items-center md:text-start space-y-4">
              <h3 className="text-sm font-medium">Socials</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/lybjuicesandsmoothies/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={fbIcon}
                    alt="Facebook"
                    className="w-8 h-8 hover:opacity-80 transition"
                  />
                </a>
                <a
                  href="https://www.instagram.com/lybjuicesandsmoothies/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={iGIcon}
                    alt="Instagram"
                    className="w-8 h-8 hover:opacity-80 transition"
                  />
                </a>
                <a
                  href="https://wa.me/5978531071"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={wAIcon}
                    alt="WhatsApp"
                    className="w-8 h-8 hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Onderlijn */}
        <div className="border-t border-white/30 pt-4 text-center body-text footer mt-8">
          <p>
            © {new Date().getFullYear()} LYB Juices & Smoothies. Alle rechten
            voorbehouden. Website gebouwd met 💚 door{" "}
            <a
              href="https://www.instagram.com/sarbandigital.social/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              Sarban Digital.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
