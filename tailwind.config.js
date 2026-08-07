/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        crema: "#FAF6EF",
        "crema-alt": "#F3ECE0",
        arena: "#E7DAC5",
        rosa: "#F1DAD6",
        salvia: "#93A382",
        "salvia-osc": "#6E7F5C",
        terracota: "#C1795A",
        "terracota-osc": "#A15F44",
        texto: "#3C352C",
        "texto-suave": "#6B6153",
        linea: "rgba(60,53,44,0.12)",
        footer: "#332C24",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      borderRadius: {
        organic: "60px 6px 60px 6px",
        "organic-r": "6px 60px 6px 6px",
      },
      keyframes: {
        scrollcue: {
          "0%": { top: "-46px" },
          "100%": { top: "100%" },
        },
      },
      animation: {
        scrollcue: "scrollcue 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
