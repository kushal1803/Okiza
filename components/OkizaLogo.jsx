import Image from "next/image";

export default function OkizaLogo({
  size = 28,
  variant = "lime", // "lime" | "white" | "black"
  className = "",
  alt = "Okiza Logo",
}) {
  const src =
    variant === "white"
      ? "/logo-white.png"
      : variant === "black"
      ? "/logo-black.png"
      : "/logo-lime.png";

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
        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(200,240,77,0.35)]"
      />
    </div>
  );
}
