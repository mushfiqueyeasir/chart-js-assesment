/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#0A0A0A",
        primary: "#1F2443 ",
        secondary: "#BEADFA",
        info: "#00B8D9",
        success: "#4e8353",
        warning: "#FFAB00",
        error: "#FF5630",
        yellow: "#FBB040",
        "body-color": "#959CB1",
        pitBlack: "dark-gradient",
      },
      gradientColorStops: {
        "dark-gradient": "linear-gradient(315deg, #141920, #181e27)",
      },
      darkBox: {
        background: "linear-gradient(315deg, #141920, #181e27)",
        "box-shadow": "-6px -6px 12px #11161c, 6px 6px 12px #1b222c",
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        darkShadow:
          "-6px -6px 12px rgba(17, 22, 28, 1), 6px 6px 12px rgba(27, 34, 44, 1)",
      },
    },
  },

  plugins: [require("daisyui")],
};
