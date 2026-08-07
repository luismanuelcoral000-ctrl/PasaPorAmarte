import Image from "next/image";
import Reveal from "./Reveal";

export default function ComoTeAcompano() {
  return (
    <section id="acompano" className="bg-crema-alt px-[6vw] py-28">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_0.95fr]">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-terracota-osc">
              Cómo te acompaño
            </p>
            <h2 className="mt-3 font-serif text-[clamp(2.1rem,4vw,3.1rem)]">
              Un proceso hecho
              <br />a tu propio ritmo
            </h2>
            <p className="placeholder-text mt-6">
              [Metodología ORA
Un camino para recuperar la libertad de elegirte.
En PASA POR AMARTE cada proceso de acompañamiento sigue una metodología propia llamada ORA, creada para ayudarte a comprender tu historia, reconectar contigo y transformar tu bienestar desde una mirada integral.
No importa cuál sea el punto de partida; cada mujer llega con una historia única. Por eso, más que aplicar una técnica, caminamos juntas a través de un proceso que respeta tu ritmo, tus necesidades y tu momento de vida.
O · Observar
Todo comienza con una pausa.
Observamos tu historia, tus emociones, tus pensamientos, tu cuerpo, tus relaciones y aquello que hoy necesita ser escuchado. Creamos un espacio seguro donde puedes expresarte con libertad y empezar a mirar tu vida con mayor claridad y compasión.
"No podemos transformar aquello que aún no hemos aprendido a mirar."
R · Reconocer
Después de observar, llega el momento de comprender.
Reconocemos los patrones que se repiten, las creencias que te limitan, los recursos que ya habitan en ti y las posibilidades que quizá aún no habías visto. Integramos herramientas de la psicología, el enfoque holístico y la espiritualidad para dar un nuevo significado a tu historia.
"Reconocer también es recordar quién eres más allá de tus heridas."
A · Actuar
La transformación ocurre cuando elegimos dar un paso diferente.
Actuar significa llevar lo aprendido a la vida cotidiana, construir nuevas formas de relacionarte contigo misma y tomar decisiones más conscientes y alineadas con la mujer que deseas ser.
Porque el bienestar no termina cuando acaba una sesión; comienza cuando decides vivir de una manera diferente.
"Cada pequeña decisión es una oportunidad para recuperar la libertad de elegirte."
Los pilares que sostienen nuestra metodología
La metodología ORA integra cuatro dimensiones que se encuentran presentes en cada proceso de acompañamiento. 
Psicología: Aporta el conocimiento científico para comprender tus emociones, pensamientos, vínculos y experiencias, ofreciendo herramientas que favorecen un bienestar emocional sostenible.
Enfoque Holístico: Entendemos que mente, cuerpo, emociones y energía están profundamente conectados. Por eso acompañamos a la persona como un todo, favoreciendo procesos de transformación integral
Espiritualidad: Promovemos un espacio de conexión con tu mundo interior, tu intuición y aquello que da sentido a tu vida, siempre desde el respeto por tus creencias y tu propio camino.
Naturaleza: Nos inspira a recordar que todo tiene un ritmo. Muchas de nuestras experiencias encuentran en ella un espacio para cultivar la calma, la presencia y la reconexión con lo esencial.
ORA no es solo una metodología; es una invitación a detenerte, escucharte y dar el siguiente paso hacia una vida vivida con mayor conciencia, bienestar y libertad.]
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative h-[560px] w-full overflow-hidden rounded-organic">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
                alt="Espacio de acompañamiento — fotografía grande"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
