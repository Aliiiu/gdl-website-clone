/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constant/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "ibm-font": "IBM Plex Sans",
      "title-font": "Helvetica, Arial, sans-serif",
    },
    extend: {
      colors: {
        primary: "#1F1A17",
        second: "#9A2333",
        nav: "#C1C0C0",
        gdlGrey: "#FAFBFB",
      },
      backgroundColor: {
        gdlGrey: "#FAFBFB",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-up": "slideUp 1s ease-in-out",
        "slide-down": "slideDown 0.5s ease-in-out",
        "zoom-out": "zoomOut 0.5s ease-in-out",
        "glide-up": "glideUp 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0px)", opacity: "1" },
          "100%": { transform: "translateY(-10px)", opacity: "0" },
        },
        slideDown: {
          "100%": { transform: "translateY(0px)", opacity: "1" },
          "0%": { transform: "translateY(-10px)", opacity: "0" },
        },
        glideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        zoomOut: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
