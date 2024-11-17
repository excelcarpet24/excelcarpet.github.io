/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#212b36",
        "dark-700": "#090e34b3",
        dark: {
          DEFAULT: "#111928",
          2: "#1F2A37",
          3: "#374151",
          4: "#4B5563",
          5: "#6B7280",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        primary: "#3758F9",
        "blue-dark": "#1B44C8",
        secondary: "#13C296",
        "body-color": "#637381",
        "body-secondary": "#8899A8",
        warning: "#FBBF24",
        stroke: "#DFE4EA",
        "gray-1": "#F9FAFB",
        "gray-2": "#F3F4F6",
        "gray-7": "#CED4DA",
        fontFamily: {
          luckiest: ['"Luckiest Guy"', 'cursive'], // Custom font
        },
        // Custom color palette
        red_pantone: {
          DEFAULT: '#e43a48',
          100: '#32070a',
          200: '#650e15',
          300: '#97151f',
          400: '#c91b2a',
          500: '#e43a48',
          600: '#e9616c',
          700: '#ef8991',
          800: '#f4b0b6',
          900: '#fad8da',
        },
        orange_peel: {
          DEFAULT: '#ff9f1c',
          100: '#382100',
          200: '#704100',
          300: '#a86200',
          400: '#e08300',
          500: '#ff9f1c',
          600: '#ffb347',
          700: '#ffc675',
          800: '#ffd9a3',
          900: '#ffecd1',
        },
        flash_white: {
          DEFAULT: '#f3f3f7',
          100: '#27273b',
          200: '#4e4e76',
          300: '#7d7da9',
          400: '#b8b8d0',
          500: '#f3f3f7',
          600: '#f5f5f8',
          700: '#f8f8fa',
          800: '#fafafc',
          900: '#fdfdfd',
        },
        tropical_indigo: {
          DEFAULT: '#8e94f2',
          100: '#080c44',
          200: '#101889',
          300: '#1824cd',
          400: '#4853ea',
          500: '#8e94f2',
          600: '#a4a9f4',
          700: '#bbbff7',
          800: '#d1d4fa',
          900: '#e8eafc',
        },
        neon_blue: {
          DEFAULT: '#1f66ff',
          100: '#001239',
          200: '#002472',
          300: '#0036ab',
          400: '#0048e4',
          500: '#1f66ff',
          600: '#4b84ff',
          700: '#78a3ff',
          800: '#a5c2ff',
          900: '#d2e0ff',
        },
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        form: "0px 1px 55px -11px rgba(0, 0, 0, 0.01)",
        pricing: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
        "testimonial-btn": "0px 8px 15px 0px rgba(72, 72, 138, 0.08)",
        1: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        2: "0px 5px 12px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
}
