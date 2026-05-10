import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08111F",
        surface: "#0F1D33",
        accent: "#47C7A6",
        warning: "#FFB84D",
        danger: "#FF5B6E",
        sky: "#62A7FF"
      },
      boxShadow: {
        panel: "0 25px 60px rgba(3, 10, 20, 0.35)"
      },
      backgroundImage: {
        "city-grid": "radial-gradient(circle at 20% 20%, rgba(98,167,255,0.2), transparent 30%), radial-gradient(circle at 80% 0%, rgba(71,199,166,0.16), transparent 25%), linear-gradient(135deg, #08111F 0%, #102645 45%, #07101D 100%)"
      }
    }
  },
  plugins: []
};

export default config;

