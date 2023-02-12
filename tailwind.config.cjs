/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "g-1": "#D3D6D9",
        "g-2": "#B3B8BD",
        "g-3": "#9299A0",
        "g-4": "#727A83",
        "g-5": "#555B62",
        "g-6": "#35393D",
        "b-1": "#B2CFE6",
        "b-2": "#81B0D6",
        "b-3": "#5887B5",
        "b-4": "#385C80",
        "b-5": "#253D55",
        "b-6": "#192939",
        "y-1": "#EFD595",
        "y-2": "#E9C46A",
        "y-3": "#DFAC2A",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200",
      xxl: "1400",
    },
  },
  plugins: [],
};