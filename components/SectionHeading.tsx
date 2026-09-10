interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionHeading({ title, subtitle, dark = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          dark ? "text-on-surface" : "text-on-surface"
        }`}
      >
        {title}
      </h2>
      <div className="mt-4 mx-auto w-16 h-[2px] bg-secondary" />
      {subtitle && (
        <p
          className={`mt-4 font-body text-lg max-w-2xl mx-auto ${
            dark ? "text-on-surface-variant" : "text-on-surface-variant"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
