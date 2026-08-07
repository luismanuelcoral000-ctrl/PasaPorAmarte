import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import WhatsappFloat from "@/components/WhatsappFloat";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata = {
  title: "Pasa Por Amarte · La libertad de elegirte",
  description:
    "Empresa social dedicada al bienestar integral de las mujeres. Acompañamos procesos de transformación emocional, mental, corporal y espiritual.", 
    verification: {
    google: "8Wg-_PwDLBwvJFi2IH",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        {children}
        <WhatsappFloat />
      </body>
    </html>
  );
}
