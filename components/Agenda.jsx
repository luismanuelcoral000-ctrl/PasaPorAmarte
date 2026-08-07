import Reveal from "./Reveal";

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="bg-[linear-gradient(180deg,#FAF6EF_0%,#F1DAD6_140%)] px-[6vw] py-32 text-center"
    >
      <div className="mx-auto max-w-[1220px]">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-terracota-osc">
            Agenda
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="mx-auto mt-3 max-w-[720px] font-serif text-[clamp(2.3rem,5vw,3.6rem)]">
            Tu proceso puede
            <br />
            comenzar hoy
          </h2>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="placeholder-text mx-auto mb-9 mt-5 max-w-[520px] text-left">
            [Espacio para el texto de esta sección — invitación cálida a
            reservar la primera sesión.]
          </p>
        </Reveal>
        <Reveal delay={0.36}>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-terracota px-12 py-5 text-[0.95rem] tracking-wide text-white transition-all duration-400 hover:bg-terracota-osc hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(161,95,68,0.55)]"
          >
            Agenda tu sesión
            <span className="transition-transform duration-400 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
