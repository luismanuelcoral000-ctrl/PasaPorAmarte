"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/#historia", label: "Mi historia" },
  { href: "/#acompano", label: "Cómo te acompaño" },
  { href: "/#camino", label: "Elige tu camino" },
  { href: "/nuestra-esencia", label: "Nuestra esencia" },
  { href: "/#recursos", label: "Recursos" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6vw] transition-all duration-500 ${
          scrolled
            ? "bg-crema/90 backdrop-blur-md py-3 shadow-[0_1px_0_rgba(60,53,44,0.12)]"
            : "py-6"
        }`}
      >
        <Link href="/" className="font-serif text-lg tracking-tight">
          Pasa Por Amarte
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-[0.83rem] tracking-wide after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-terracota after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#agenda"
            className="rounded-full bg-terracota px-6 py-2.5 text-[0.78rem] tracking-wide text-white transition-all duration-300 hover:bg-terracota-osc hover:-translate-y-0.5"
          >
            Agenda tu sesión
          </Link>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="lg:hidden z-[110] flex flex-col gap-1.5"
        >
          <span className="block h-px w-6 bg-texto" />
          <span className="block h-px w-6 bg-texto" />
          <span className="block h-px w-6 bg-texto" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[105] flex flex-col items-start justify-center gap-7 bg-crema px-[6vw]"
          >
            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="absolute top-6 right-[6vw] text-2xl"
            >
              ×
            </button>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#agenda"
              onClick={() => setOpen(false)}
              className="font-serif text-3xl text-terracota-osc"
            >
              Agenda tu sesión
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
