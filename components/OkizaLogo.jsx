export default function OkizaLogo({
  size = 28,
  variant = "white", // default to white for monochrome theme
  className = "",
  alt = "Okiza Logo",
}) {
  const src =
    variant === "black"
      ? "/logo-black.png"
      : "/logo-white.png";

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
      />
    </div>
  );
}
