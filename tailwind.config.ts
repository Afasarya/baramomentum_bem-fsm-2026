import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bara-orange": "#F25C05",
        "bara-red": "#B22408",
        "bara-maroon": "#5C1002",
        "bara-gold": "#F5C542",
        "bara-bg-dark": "#1A0A06",
        "bara-bg-darker": "#110604",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;