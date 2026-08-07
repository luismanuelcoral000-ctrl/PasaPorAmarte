"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_30%]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(60,53,44,0.18)_0%,rgba(60,53,44,0.08)_40%,rgba(250,246,239,0.96)_96%)]" />

      <div className="relative z-[2] w-full px-[6vw] pb-24">
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/90"
        >
          Bienestar integral para mujeres
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-3 mb-7 font-serif text-[clamp(3rem,9vw,6.6rem)] leading-[0.98] text-white [text-shadow:0_6px_30px_rgba(0,0,0,0.18)]"
        >
          Pasa Por
          <br />
          Amarte
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
          className="mb-9 max-w-[480px] text-white/90 [text-shadow:0_2px_14px_rgba(0,0,0,0.18)]"
        >
          [Espacio para el texto principal — una invitación breve y cálida a
          iniciar el proceso de transformación.]
        </motion.p>

        <motion.a
          href="#camino"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.36, ease: [0.2, 0.7, 0.2, 1] }}
          className="group inline-flex items-center gap-2 rounded-full bg-terracota px-9 py-4 text-[0.85rem] tracking-wide text-white transition-all duration-400 hover:bg-terracota-osc hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(161,95,68,0.55)]"
        >
          Comienza tu camino
          <span className="transition-transform duration-400 group-hover:translate-x-1">
            →
          </span>
        </motion.a>
      </div>

      <div className="absolute bottom-10 right-[6vw] z-[2] hidden flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-white sm:flex">
        <span>Descubre</span>
        <span className="relative h-11 w-px overflow-hidden bg-white/60">
          <span className="absolute left-0 top-[-46px] h-11 w-full animate-scrollcue bg-white" />
        </span>
      </div>
    </section>
  );
}
