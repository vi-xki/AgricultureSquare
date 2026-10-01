import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f7f1",
          100: "#e4ebdb",
          200: "#c9d8b8",
          300: "#a9c08e",
          400: "#8aab68",
          500: "#70914d",
          600: "#57753a",
          700: "#44602f",
          800: "#384d28",
          900: "#2e3f23",
          950: "#1a2414",
        },
        paper: {
          50: "#fdfcfa",
          100: "#f7f5f0",
          200: "#efebe1",
          300: "#e3ddcf",
        },
        ink: {
          900: "#1d2317",
          700: "#3a4332",
          500: "#5f6b54",
          300: "#8f9a83",
        },
      },
      fontFamily: {
        display: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        book: "0 30px 60px -20px rgba(26, 36, 20, 0.35)",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
