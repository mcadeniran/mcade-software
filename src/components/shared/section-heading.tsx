type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  theme?: "dark" | "light";
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  theme = "light",
  align = "center",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${align === "center"
        ? "mx-auto text-center"
        : "text-left"
        }`}
    >
      <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#06C7B7] uppercase">
        {eyebrow}
      </p>

      <h2
        className={`text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl ${isDark ? "text-white" : "text-[#082B55]"
          }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-base leading-8 ${isDark
            ? "text-slate-300"
            : "text-slate-600"
            }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
