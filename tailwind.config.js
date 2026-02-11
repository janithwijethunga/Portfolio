/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f6ff",
          100: "#dfeaff",
          200: "#bdd5ff",
          300: "#9bbcff",
          400: "#6e97ff",
          500: "#4a72ff",
          600: "#3357e6",
          700: "#2844b4",
          800: "#223b8c",
          900: "#1f356f",
        },
        neutral: {
          50: "#f7f7f8",
          100: "#ececef",
          200: "#d5d6dc",
          300: "#b2b5c1",
          400: "#8a8f9f",
          500: "#6b7183",
          600: "#535869",
          700: "#3f4351",
          800: "#2b2f3a",
          900: "#171a21",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        sans: ["Manrope", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(15, 23, 42, 0.08)",
        glow: "0 12px 40px rgba(74, 114, 255, 0.18)",
      },
      fontSize: {
        "display-1": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-2": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
      },
    },
  },
  plugins: [],
};
