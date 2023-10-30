import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#377DFF",
        neutral: {
          "1": "#FEFEFE",
          "2": "#F3F5F7",
          "3": "#E8ECEF",
          "4": "#6C7275",
          "5": "#343839",
          "6": "#232627",
          "7": "#141718",
        },
      },
    },
  },
  plugins: [],
};
export default config;
