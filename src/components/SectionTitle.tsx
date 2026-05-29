export default function SectionTitle({
  subtitle,
  title,
  light = false,
}: {
  subtitle?: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      {subtitle && (
        <p className={`text-sm tracking-[0.3em] uppercase mb-3 ${light ? "text-rose-gold" : "text-rose-gold"}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl ${light ? "text-white" : "text-charcoal"}`}>
        {title}
      </h2>
      <div className="w-16 h-px bg-rose-gold mx-auto mt-6" />
    </div>
  );
}
