/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: { 950: "#070A0A", 900: "#0B0F0E", 800: "#121A18" },
        growth: {
          50: "#E9FFF3",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
        glow: { white: "#F8FAFC" },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 24px rgba(110, 231, 183, 0.25)",
        glowSoft: "0 0 48px rgba(110, 231, 183, 0.12)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at center, rgba(110,231,183,0.25), transparent 60%)",
      },
    },
  },
  plugins: [],
};
