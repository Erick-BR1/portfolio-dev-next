import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1366px"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
       'custom': '0px 0px 5px #0f172a, 0px 0px 5px #ffffff'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        goldman: ['Goldman', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
