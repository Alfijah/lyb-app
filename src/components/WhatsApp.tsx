// import WhatsAppIcon from "../assets/social.png";
import { PiWhatsappLogoLight } from "react-icons/pi";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/5978715108"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 bottom-20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:opacity-100 z-50"
    >
      <PiWhatsappLogoLight className="w-10 h-10 bg-tealBrand text-white rounded-l-lg hover:opacity-80 transition"/>
      {/* <img
        src={WhatsAppIcon}
        alt="WhatsApp"
        className="w-12 h-12 rounded-l-lg hover:opacity-80 transition"
      /> */}
    </a>
  );
}
