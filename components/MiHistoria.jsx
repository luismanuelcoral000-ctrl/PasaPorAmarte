import Image from "next/image";
import Reveal from "./Reveal";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1441829266145-9e8faf37f8b1?auto=format&fit=crop&w=700&q=80",
    tag: "Fotografía",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80",
    tag: "Video",
  },
  {
    src: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=700&q=80",
    tag: "Momento",
  },
];

export default function MiHistoria() {
  return (
    <section id="historia" className="px-[6vw] py-32">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Reveal className="relative before:absolute before:-left-6 before:-top-6 before:-z-10 before:h-[120px] before:w-[120px] before:rounded-full before:border before:border-terracota">
            <div className="relative h-[520px] w-full overflow-hidden rounded-organic-r">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80"
                alt="Retrato — espacio para fotografía de la fundadora"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-terracota-osc">
              Mi historia
            </p>
            <h2 className="mt-3 font-serif text-[clamp(2.1rem,4vw,3.1rem)]">
              Antes de acompañarte, 
              <br />
              quiero presentarme
            </h2>
            <p className="placeholder-text mt-6">
              [Hola, soy Vania Guerrero Oquendo, psicóloga, terapeuta holística y fundadora de PASA POR AMARTE.
Pero, antes que todo eso, soy una mujer que también tuvo que aprender a elegirse.
Hubo un momento en mi vida en el que comprendí que sanar no significaba dejar atrás el dolor, sino aprender a escucharlo con amor. Ese camino transformó mi manera de ver la vida y despertó en mí un propósito: acompañar a otras mujeres a descubrir que el bienestar no es un lugar al que se llega, sino una forma de volver a habitarse.
Soy psicóloga, graduada de la Universidad Nacional Abierta y a Distancia (UNAD), y encontré en esta profesión una base sólida para comprender el comportamiento humano y acompañar procesos de bienestar emocional, con el tiempo sentí el llamado a ampliar esa mirada y me formé en acompañamiento holístico en Astro Alquimia, una escuela de Argentina, donde profundicé en herramientas que integran la mente, el cuerpo, las emociones, la energía y el espíritu.
Hace algunos años comenzó para mí un camino de profundo autoconocimiento, en ese proceso fui reconociendo dones que hoy pongo al servicio de quienes acompaño: la guía espiritual, la canalización y la medicina del alma. Más que definir quién soy, estos dones representan una forma de escuchar, sostener y acompañar desde la intuición, el respeto y el amor, siempre en diálogo con mi formación profesional como psicóloga.
Creo que la ciencia y la espiritualidad no tienen que caminar por separado, por eso, cada proceso que acompaño integra herramientas psicológicas con meditación, escritura terapéutica, ritualidad consciente, terapias energéticas y experiencias en la naturaleza, creando un camino personalizado para cada mujer. Además de mi formación terapéutica, he fortalecido este propósito participando en iniciativas de liderazgo e innovación social como Dreamers & Makers y Girl Up, experiencias que reafirmaron mi convicción de que el bienestar también puede ser una herramienta para transformar comunidades.
Hoy, PASA POR AMARTE es la expresión de todo ese camino. Una empresa social que acompaña a mujeres a reconectar consigo mismas y que, al mismo tiempo, lleva espacios de bienestar a mujeres rurales que históricamente han tenido menos oportunidades de acceder a ellos.
Si decides caminar conmigo, encontrarás un espacio donde podrás ser tú, sin prisa y sin juicios, un lugar para escucharte, comprender tu historia y recordar que la mayor transformación comienza cuando recuperas la libertad de elegirte.
Será un honor acompañarte en ese camino.
]
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-3.5">
          {gallery.map((item, i) => (
            <Reveal
              key={item.tag}
              delay={i * 0.12}
              className="group relative overflow-hidden rounded"
              as="figure"
            >
              <div
                className={`relative h-[230px] w-full ${
                  i === 1 ? "mt-9" : i === 2 ? "-mt-5" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={`Galería — ${item.tag.toLowerCase()}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-crema/90 px-3 py-1.5 text-[0.68rem] tracking-wide">
                  {item.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <Reveal
              key={n}
              delay={i * 0.12}
              className="rounded-[10px] bg-white p-8 shadow-[0_20px_40px_-30px_rgba(60,53,44,0.35)]"
            >
              <p className="font-serif text-lg italic">
                &ldquo;[Frase inspiradora — espacio para completar.]&rdquo;
              </p>
              <span className="mt-4 block text-[0.72rem] uppercase tracking-[0.1em] text-texto-suave">
                Frase 0{n}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
