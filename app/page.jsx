import Hero from "@/components/Hero";
import MiHistoria from "@/components/MiHistoria";
import ComoTeAcompano from "@/components/ComoTeAcompano";
import EligeTuCamino from "@/components/EligeTuCamino";
import Impacto from "@/components/Impacto";
import Recursos from "@/components/Recursos";
import Agenda from "@/components/Agenda";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <MiHistoria />
      <ComoTeAcompano />
      <EligeTuCamino />
      <Impacto />
      <Recursos />
      <Agenda />
      <Footer />
    </main>
  );
}
