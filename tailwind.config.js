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
  plugins: [],
};
