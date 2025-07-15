const measurements = [
  { label: 'Height / Altura', value: '1,63 mts' },
  { label: 'Bust / Busto', value: '80 cm' },
  { label: 'Waist / Cintura', value: '61 cm' },
  { label: 'Hips / Cadera', value: '89 cm' },
  { label: 'Eyes / Ojos', value: 'Marrones' },
  { label: 'Hair / Pelo', value: 'Castaño Claro' },
  { label: 'Shoe / Calzado', value: '37' },
  { label: 'Bottom & Top / Talle', value: '36 - Small' },
];

export default function About() {
  return (
    <section id="about" className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light uppercase tracking-widest text-center mb-12">
          Sobre Mí
        </h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {measurements.map((item) => (
              <li key={item.label} className="flex justify-between items-baseline border-b border-border/50 pb-2">
                <span className="text-base font-normal text-foreground/80">{item.label}</span>
                <span className="text-base font-light text-foreground">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
