import Image from "next/image";
import Reveal from "./Reveal";

const recursos = [
  {
    tipo: "Artículo",
    titulo: "[Título de artículo próximamente]",
    src: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=600&q=80",
  },
  {
    tipo: "Video",
    titulo: "[Título de video próximamente]",
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
  },
  {
    tipo: "Guía",
    titulo: "[Título de guía próximamente]",
    src: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Recursos() {
  return (
    <section id="recursos" className="px-[6vw] py-32">
      <div className="mx-auto max-w-[1220px]">
        <Reveal className="mb-14 max-w-[640px]">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-terracota-osc">
            Recursos
          </p>
          <h2 className="mt-3 font-serif text-[clamp(2.1rem,4vw,3.1rem)]">
            Herramientas para
            <br />
            seguir creciendo
          </h2>
          <p className="placeholder-text mt-5">
            [Espacio para el texto de esta sección — presentación del centro
            de recursos.]
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {recursos.map((r, i) => (
            <Reveal
              key={r.tipo}
              delay={i * 0.12}
              className="overflow-hidden rounded-xl border border-linea transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-34px_rgba(60,53,44,0.35)]"
            >
              <div className="relative h-[190px] w-full">
                <Image src={r.src} alt={r.tipo} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-terracota-osc">
                  {r.tipo}
                </p>
                <h4 className="mt-2 font-serif text-[1.15rem]">{r.titulo}</h4>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href="#"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-texto px-8 py-3.5 text-[0.85rem] tracking-wide transition-all duration-400 hover:-translate-y-0.5 hover:bg-texto hover:text-crema"
          >
            Explorar recursos
          </a>
        </Reveal>
      </div>
    </section>
  );
}
