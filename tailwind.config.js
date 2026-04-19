module.exports = {
  content: ["./*.html", "./src/**/*.{js,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkPrimary: "#0A0A0F",
        darkSecondary: "#12121A",
        darkCard: "#1A1A27",
        lightPrimary: "#F8F9FF",
        lightSecondary: "#FFFFFF",
        lightCard: "#FFFFFF",
        brandPurple: "#6C63FF",
        brandCyan: "#00D4FF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
      animation: { "spin-slow": "spin 8s linear infinite" },
    },
  },
  plugins: [],
};
