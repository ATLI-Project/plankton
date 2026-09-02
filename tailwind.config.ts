import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        brand: {
          blue: "#072199",       // wordmark deep blue
          "blue-700": "#0A2AB8",
          "blue-50": "#EEF0FC",
          red: "#E32024",        // mark red
          "red-700": "#B81A1E",
          "red-50": "#FDECEC",
        },
        // Semantic aliases
        navy: "#072199",
        accent: "#E32024",
        ink: "#0B1230",
        paper: "#FFFFFF",
        cream: "#F7F8FB",
        line: "#E6E8EF",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
        wide: "80rem",
      },
      letterSpacing: {
        tightish: "-0.015em",
      },
    },
  },
  plugins: [],
};

export default config;
