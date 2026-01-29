type LiquidImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

export default function LiquidImage({ src, alt = "", className = "" }: LiquidImageProps) {
  const clipId = `clip-${Math.random().toString(36).slice(2)}`;

  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label={alt}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Vloeiende blob zonder puntige hoeken */}
        <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
          <path d="M438 88c67 43 96 118 92 192-4 74-40 147-101 196-61 49-145 73-225 48-80-25-156-88-176-172-20-84 15-189 87-238 72-49 256-69 323-26Z" />
        </clipPath>

        {/* Subtiele schaduw (premium look) */}
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Schaduwlaag */}
      <g filter="url(#softShadow)">
        <image
          href={src}
          x="20"
          y="0"
          width="550"
          height="530"
          clipPath={`url(#${clipId})`}
          preserveAspectRatio="xMidYMid slice"
        />
      </g>
    </svg>
  );
}
