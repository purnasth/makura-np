/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37",
        secondary: "#C0C0C0",
        dark: "#000111",
        light: "#F8F8FF",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(121.21deg, #C0C0C0 13.03%, #D3D3D3 48.04%, #A9A9A9 81.98%)",
      },
      fontFamily: {
        body: ["Titillium Web", "sans-serif"],
        luxury: ["Tan Pearl", "sans-serif"],
      },
      textShadow: {
        dark: "0 20px 20px rgba(0, 0, 0, 0.5)",
        light: "0 2px 5px rgba(255, 255, 255, 0.5)",
        red: "2px 2px 4px rgba(255, 0, 0, 0.5)",
        "light-glow": "1px 1px 2px #F8F8FF,  0 0 1em #F8F8FF, 0 0 0.2em #F8F8FF",
        "dark-glow": "1px 1px 2px #000111,  0 0 1em #000111, 0 0 0.2em #000111",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
