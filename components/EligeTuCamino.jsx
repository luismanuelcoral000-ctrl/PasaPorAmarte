"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const servicios = [
  {
    num: "01",
    titulo: "Necesito claridad",
    desc: "Cuando sientes que las preguntas son más grandes que las respuestas. Oráculo Terapéutico. Un espacio de reflexión, meditación y acompañamiento para ayudarte a mirar tu presente con mayor claridad. La libertad de comprender lo que hoy estás viviendo.",
    boton: "Quiero conocer este proceso",
  },
  {
    num: "02",
    titulo: "Quiero comenzar terapia",
    desc: "Porque todos los grandes cambios empiezan con una conversación. Sesión de Orientación y Bienestar Integral. Nuestro primer encuentro para escucharte, conocerte y descubrir cuál es el camino que mejor responde a tus necesidades. La libertad de empezar por ti.",
    boton: "Quiero comenzar",
  },
  {
    num: "03",
    titulo: "Quiero sanar profundamente",
    desc: "Hay historias que merecen ser comprendidas para dejar de repetirse. Terapia Sistémica y Sanación Transgeneracional. Un proceso para comprender tu historia familiar, reconocer los patrones heredados y caminar con mayor libertad hacia tu propio proyecto de vida. La libertad de escribir una historia diferente.",
    boton: "Quiero sanar mi historia",
  },
  {
    num: "04",
    titulo: "Quiero un proceso completo",
    desc: "Cuando decides regalarte el tiempo necesario para transformarte desde la raíz. Programa Sanación de Útero .Un viaje de diez encuentros para reconectar con tu feminidad, fortalecer el amor propio y recordar el poder que siempre ha habitado en ti. La libertad de habitarte con amor.",
    boton: "Quiero conocer el programa",
  },
  {
    num: "05",
    titulo: "Busco una experiencia",
    desc: "Porque algunos momentos merecen ser vividos con intención. RITUALES PARA LA VIDA .Ceremonias Holísticas y Experiencias de Bienestar .Creamos rituales, ceremonias y encuentros personalizados para celebrar nuevos comienzos, despedidas, uniones y momentos que transforman la vida. La libertad de honrar cada etapa de tu camino.",
    boton: "Quiero vivir una experiencia",
  },
];

const offsets = ["", "md:mt-10", "md:-mt-6", "md:mt-14", "md:mt-2.5"];

function CaminoCard({ item, offset, delay }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal
      delay={delay}
      className={`flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-[0_24px_50px_-34px_rgba(60,53,44,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_60px_-30px_rgba(60,53,44,0.45)] ${offset}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-salvia font-serif text-sm text-salvia-osc">
        {item.num}
      </span>
      <h3 className="font-serif text-[1.3rem] leading-tight">{item.titulo}</h3>
      <p className="flex-grow text-[0.92rem] text-texto-suave">{item.desc}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[0.88rem] text-texto-suave">
              [Espacio para detalle ampliado de este servicio — a completar
              más adelante en su propia página.]
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-left text-[0.78rem] tracking-wide text-terracota-osc"
      >
        Ver más
        <svg
          viewBox="0 0 12 8"
          fill="none"
          className={`h-[11px] w-[11px] transition-transform duration-400 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>

      <a
        href="#"
        className="mt-1 inline-flex items-center justify-center rounded-full border border-texto px-7 py-3 text-[0.85rem] tracking-wide transition-all duration-400 hover:-translate-y-0.5 hover:bg-texto hover:text-crema"
      >
        {item.boton}
      </a>
    </Reveal>
  );
}

export default function EligeTuCamino() {
  return (
    <section id="camino" className="px-[6vw] py-32">
      <div className="mx-auto max-w-[1220px]">
        <Reveal className="mb-14 max-w-[640px]">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-terracota-osc">
            Elige tu camino
          </p>
          <h2 className="mt-3 font-serif text-[clamp(2.1rem,4vw,3.1rem)]">
            Cada mujer llega desde
            <br />
            un lugar distinto
          </h2>
          <p className="placeholder-text mt-5">
            [Texto introductorio — breve orientación para que cada mujer
            identifique el proceso que necesita hoy.]
          </p>
        </Reveal>

        <div className="relative mt-16">
          <svg
            viewBox="0 0 1200 260"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          >
            <path
              d="M20,140 C160,20 260,240 400,120 S620,20 760,140 900,240 1040,90 1140,150 1180,110"
              fill="none"
              stroke="#C1795A"
              strokeWidth="1.5"
              strokeDasharray="6 10"
              opacity="0.55"
            />
          </svg>

          <div className="relative z-[1] grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-5">
            {servicios.map((item, i) => (
              <CaminoCard
                key={item.num}
                item={item}
                offset={offsets[i]}
                delay={(i % 3) * 0.12}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
