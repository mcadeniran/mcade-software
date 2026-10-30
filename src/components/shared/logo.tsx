import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
};

export function Logo({
  variant = "light",
  showTagline = false,
  className,
}: LogoProps) {
  const textColor =
    variant === "light"
      ? "text-white"
      : "text-[#082B55]";

  return (
    <Link
      href="/"
      aria-label="McAde Software home"
      className={`inline-flex items-center gap-3 ${className ?? ""}`}
    >
      <Image
        src="/brand/mcade-mark.svg"
        alt=""
        width={42}
        height={42}
        priority
      />

      <span className="flex flex-col">
        <span
          className={`text-xl font-bold tracking-tight ${textColor}`}
        >
          McAde
        </span>

        <span
          className={`text-[10px] font-semibold tracking-[0.3em] ${textColor}`}
        >
          SOFTWARE
        </span>

        {showTagline && (
          <span className="mt-1 text-xs text-slate-400">
            Technology That Moves Business Forward.
          </span>
        )}
      </span>
    </Link>
  );
}
