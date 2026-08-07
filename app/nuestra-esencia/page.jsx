import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nuestra esencia · Pasa Por Amarte",
};

const bloques = [
  {
    eyebrow: "Misión",
    titulo: "Misión",
    texto:
      "Acompañar procesos de bienestar integral que permitan a las personas reconectar consigo mismas, abrazar su historia y construir una relación más amorosa con su vida mediante herramientas psicológicas, terapias holísticas y experiencias de transformación.",
  },
  {
    eyebrow: "Visión",
    titulo: "Visión",
    texto:
      "Ser un referente en bienestar integral y salud emocional femenina, demostrando que la sanación puede ser profunda, consciente y accesible, mientras generamos impacto social en comunidades de mujeres.",
  },
  {
    eyebrow: "Enfoque",
    titulo: "Nuestro enfoque",
    texto:
      "Entendemos a cada persona como un ser integral donde cuerpo, mente, emociones, energía y espiritualidad se encuentran profundamente conectados. Por eso nuestros procesos combinan diferentes herramientas terapéuticas para acompañar la transformación desde múltiples dimensiones del bienestar.",
  },
  {
    eyebrow: "Terapia holística",
    titulo: "¿Qué es una terapia holística?",
    texto:
      "La terapia holística comprende que ningún síntoma aparece de manera aislada. Las emociones, el cuerpo, la mente y la energía dialogan constantemente entre sí.Nuestro acompañamiento busca comprender el origen de los desequilibrios. ¿Qué puedes encontrar? Mayor claridad emocional, regulación del estrés y la ansiedad, reconexión contigo, fortalecimiento del amor propio, bienestar integral",
  },
];

export default function NuestraEsencia() {
  return (
    <main>
      <section className="mx-auto max-w-[820px] px-[6vw] pb-20 pt-44">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-terracota-osc">
            Nuestra esencia
          </p>
          <h1 className="mt-3 font-serif text-[clamp(2.6rem,6vw,4.4rem)]">
            Lo que nos guía y
            <br />
            lo que nos sostiene
          </h1>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[1220px] px-[6vw] pb-28">
        {bloques.map((b, i) => (
          <Reveal
            key={b.titulo}
            className={`grid grid-cols-1 gap-6 border-t border-linea py-14 md:grid-cols-[0.5fr_1.5fr] md:gap-16 ${
              i === bloques.length - 1 ? "border-b" : ""
            }`}
          >
            <div>
              <span className="font-serif text-base text-terracota-osc">
                {b.eyebrow}
              </span>
            </div>
            <div>
              <h2 className="font-serif text-[clamp(1.7rem,3vw,2.3rem)]">
                {b.titulo}
              </h2>
              <p className="placeholder-text mt-4">{b.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Footer />
    </main>
  );
}
