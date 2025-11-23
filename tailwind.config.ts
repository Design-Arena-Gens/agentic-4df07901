import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ecogic: {
          green: "#2F855A",
          dark: "#22543D",
          sand: "#F4EDE4",
          sky: "#4FD1C5"
        }
      }
    }
  },
  plugins: []
};

export default config;
