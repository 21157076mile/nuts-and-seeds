import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * need to define a color palette,
         *  - need a variety (5-10) of lighter and darker shades to choose from.
         */
        primary: "#f57264", // orange vitaminC
        secondary: "#042045",
        tertiary: "#27b5cf", // blue
        // highlight: '#ddd0fe',
        // light: '#fefefe',
        // dark: "#6658fe",
        lavender: "#9e81bf", // "#b392f0",
        mint: "#95bfac",
        // amber: "#d3ad57", //"#fca311",
      },
      // backgroundColor: {
      //   highlight: "#f57264",
      // },

      animation: {
        background: "background 2s ease-in-out infinite",
        linear: "backgroundLinear 3s linear infinite",
        slide: "backgroundSlide 120s linear infinite alternate-reverse forwards;",
      },
      keyframes: {
        background: {
          "0%, 100%": { backgroundPosition: "left 0% bottom 0%" },
          "50%": { backgroundPosition: "left 200% bottom 0%" },
        },
        backgroundLinear: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        backgroundSlide: {
          "0%": { backgroundPosition: "0 0%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
