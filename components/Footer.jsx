export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer px-[6vw] py-20 text-[#EDE3D3]">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <h3 className="font-serif text-2xl text-white">PASA POR AMARTE</h3>
            <p className="mt-2 font-serif italic text-rosa">
              La libertad de elegirte.
            </p>
            <p className="mt-4 text-[0.82rem] opacity-80">
              Psicología · Terapias Holísticas · Bienestar Integral
            </p>

            <div className="mt-6 flex gap-3.5">
              <a
                href="#"
                aria-label="Instagram"
                title="Instagram"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/25 transition-all duration-300 hover:-translate-y-1 hover:border-terracota hover:bg-terracota"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="2" width="20" height="20" rx="5.5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.3" cy="6.7" r="1" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/25 transition-all duration-300 hover:-translate-y-1 hover:border-terracota hover:bg-terracota"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.36 2 11.75c0 2.02.62 3.9 1.68 5.46L2 22l5-1.6a10.2 10.2 0 0 0 5 1.3c5.52 0 10-4.36 10-9.75S17.52 2 12 2Zm0 17.8c-1.6 0-3.1-.44-4.38-1.2l-.31-.18-2.96.95.98-2.85-.2-.32A7.7 7.7 0 0 1 4.2 11.75C4.2 7.6 7.7 4.2 12 4.2s7.8 3.4 7.8 7.55S16.3 19.8 12 19.8Zm4.3-5.63c-.24-.12-1.4-.68-1.62-.76-.22-.08-.38-.12-.54.12-.16.24-.62.76-.76.92-.14.16-.28.18-.52.06-.24-.12-1-.36-1.9-1.16-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.36.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.5.58.18 1.1.16 1.52.1.46-.07 1.4-.57 1.6-1.13.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Gmail"
                title="Gmail"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/25 transition-all duration-300 hover:-translate-y-1 hover:border-terracota hover:bg-terracota"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <p className="mb-2 text-[0.68rem] uppercase tracking-[0.15em] text-[#B8A98A]">
                Atención presencial
              </p>
              <p className="text-[0.92rem]">Pasto | Túquerres, Nariño</p>
            </div>
            <div>
              <p className="mb-2 text-[0.68rem] uppercase tracking-[0.15em] text-[#B8A98A]">
                Atención virtual
              </p>
              <p className="text-[0.92rem]">Desde cualquier lugar del mundoo</p>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <p className="mb-2 text-[0.68rem] uppercase tracking-[0.15em] text-[#B8A98A]">
                Correo electrónico
              </p>
              <p className="text-[0.92rem]">pasaporamarte@gmail.com</p>
            </div>
            <div>
              <p className="mb-2 text-[0.68rem] uppercase tracking-[0.15em] text-[#B8A98A]">
                Teléfono
              </p>
              <p className="text-[0.92rem]">+57 317 392 2564</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.78rem] text-[#B8A98A] sm:flex-row sm:justify-between">
          <span>© {year} Pasa Por Amarte. Todos los derechos reservados.</span>
          <span>Diseño con intención, para mujeres en transformación.</span>
        </div>
      </div>
    </footer>
  );
}
