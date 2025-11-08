import WhatsAppIcon from "../assets/social.png";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/31648610436"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-20 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:opacity-100 z-50"
    >
      <img
        src={WhatsAppIcon}
        alt="WhatsApp"
        className="w-16 h-16 hover:opacity-80 transition"
      />
    </a>
  );
}
