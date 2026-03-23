import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode, CSSProperties, MouseEvent } from "react";

interface WipeButtonProps {
  children: ReactNode;
  to?: string; // Interne route
  href?: string; // Externe link
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void; // Voor acties zonder link
  external?: boolean;
  className?: string;
  overlayClassName?: string;
  containerClassName?: string;
  leftToRight?: boolean;
  style?: CSSProperties;
  ariaLabel?: string; // Belangrijk voor SEO/A11y
  type?: "button" | "submit" | "reset"; // Voor formulieren
}

export default function WipeButton({
  children,
  to,
  href,
  onClick,
  external = false,
  className = "",
  overlayClassName = "bg-darkYellow",
  containerClassName = "w-full sm:w-auto", // Standaard breed op mobiel
  leftToRight = true,
  style = {},
  ariaLabel,
  type = "button",
}: WipeButtonProps) {
  
  // Gezamenlijke styles voor Link, A en Button
  const baseClasses = `
    relative isolate overflow-hidden
    inline-flex items-center justify-center
    rounded-full
    px-8 py-[12px]
    shadow-sm hover:shadow-md
    text-sm font-bold uppercase tracking-widest
    transition-all duration-300
    active:scale-95
    ${className}
  `.trim();

  // De Wipe-animatie
  const overlay = (
    <motion.span
      variants={{
        rest: {
          scaleX: 0,
          transformOrigin: leftToRight ? "0% 50%" : "100% 50%",
        },
        hover: {
          scaleX: 1,
          transformOrigin: leftToRight ? "0% 50%" : "100% 50%",
        },
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute inset-0 -z-10 ${overlayClassName}`}
      aria-hidden="true"
    />
  );

  const content = <span className="relative z-10">{children}</span>;

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={containerClassName}
    >
      {/* CASE 1: Externe link */}
      {external && href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={style}
          className={baseClasses}
          aria-label={ariaLabel}
          onClick={onClick as any}
        >
          {overlay}
          {content}
        </a>
      ) : /* CASE 2: Interne link */
      to ? (
        <Link 
          to={to} 
          style={style} 
          className={baseClasses} 
          aria-label={ariaLabel}
        >
          {overlay}
          {content}
        </Link>
      ) : (
        /* CASE 3: Gewone button (bijv. voor formulieren of toggles) */
        <button
          type={type}
          onClick={onClick}
          style={style}
          className={baseClasses}
          aria-label={ariaLabel}
        >
          {overlay}
          {content}
        </button>
      )}
    </motion.div>
  );
}