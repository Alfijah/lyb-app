import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode, CSSProperties } from "react";

interface WipeButtonProps {
  children: ReactNode;
  to?: string; // interne route
  href?: string; // externe link
  external?: boolean;
  className?: string;
  overlayClassName?: string;
  containerClassName?: string;
  leftToRight?: boolean;
  style?: CSSProperties;
}

export default function WipeButton({
  children,
  to,
  href,
  external = false,
  className = "",
  overlayClassName = "bg-darkYellow",
  containerClassName = "",
  leftToRight = true,
  style = {},
}: WipeButtonProps) {
  const baseClasses = [
    "relative isolate overflow-hidden",
    "inline-flex items-center justify-center",
    "rounded-full",
    "px-8 py-3",
    "shadow-sm",
    "text-xs uppercase tracking-widest",
    "transition-shadow duration-300",
    className,
  ].join(" ");

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
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute inset-0 -z-10 ${overlayClassName}`}
    />
  );

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={containerClassName}
    >
      {external && href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={style}
          className={baseClasses}
        >
          {overlay}
          <span className="relative z-10">{children}</span>
        </a>
      ) : (
        <Link to={to || "/"} style={style} className={baseClasses}>
          {overlay}
          <span className="relative z-10">{children}</span>
        </Link>
      )}
    </motion.div>
  );
}