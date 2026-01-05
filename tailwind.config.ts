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
        olive: {
          50: '#f7f8f0',
          100: '#eceedd',
          200: '#d9ddbb',
          300: '#c0c690',
          400: '#a3aa69',
          500: '#7d854d',
          600: '#646b3c',
          700: '#505f02',
          800: '#3f4a1f',
          900: '#363e1b',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;
