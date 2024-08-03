/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        form: "0 1px 2px 0px rgba(5, 42, 60, 0.05)",
        button: "0 2px 4px 0px rgba(97, 179, 15, 0.15)",
      },
      colors: {
        homeColor: "#052A3C",
        servicesBg: "#F0F1F3",
        buttonColor: "#61B34F",
        textColor: "#A9A9AA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gotham: ["Gotham", "sans-serif"],
      },
      gap: {
        2.25: "9px",
      },
      height: {
        18: "72px",
        25: "100px",
        34.3025: "137.21px",
        35: "140px",
        46: "184px",
        100: "400px",
        101.5: "406px",
      },
      margin: {
        25: "100px",
      },
      minWidth: {
        300: "1200px",
      },
      padding: {
        1.5: "6px",
        2.5: "10px",
      },
      rotate: {
        8.96: "8.96deg",
      },
      width: {
        12.5: "50px",
        32.25: "129px",
        35.065: "140.26px",
        67.5: "270px",
        70: "280px",
        76: "304px",
        84: "336px",
        88: "352px",
        87.5: "350px",
        90: "360px",
        97.5: "390px",
        107.5: "430px",
        120: "480px",
        128: "512px",
        176: "704px",
        200: "800px",
        300: "1200px",
        341.5: "1366px",
      },
    },
  },
  plugins: [],
};
