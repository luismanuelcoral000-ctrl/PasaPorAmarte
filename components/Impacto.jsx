import Image from "next/image";
import Reveal from "./Reveal";

const fotos = [
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=700&q=80",
];

export default function Impacto() {
  return (
    <section
      id="impacto"
      className="relative overflow-hidden bg-salvia px-[6vw] py-32 text-white"
    >
      <div className="pointer-events-none absolute -right-44 -top-56 h-[640px] w-[640px] rounded-full bg-white/[0.06]" />

      <div className="relative mx-auto max-w-[1220px]">
        <Reveal className="max-w-[640px]">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/85">
            Nuestro impacto social
          </p>
          <h2 className="mt-3 font-serif text-[clamp(2.1rem,4vw,3.1rem)]">
            Un propósito que crece
            <br />
            más allá de nosotras
          </h2>
          <p className="placeholder-text mt-5 border-white/40 text-white/90">
            [Espacio para el texto de esta sección — el alcance social del
            proyecto y a quiénes beneficia.]
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {fotos.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.12}
              className={`relative h-[280px] w-full overflow-hidden rounded-lg ${
                i === 1 ? "sm:mt-8" : ""
              }`}
            >
              <Image
                src={src}
                alt="Impacto social — fotografía"
                fill
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href="#"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[0.85rem] tracking-wide text-texto transition-all duration-400 hover:-translate-y-0.5 hover:bg-crema-alt"
          >
            Quiero sumar a esta misión
          </a>
        </Reveal>
      </div>
    </section>
  );
}
