/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        80: [
          "5rem",
          {
            lineHeight: "5.063rem",
            // letterSpacing: "-0.03em",
          },
        ],
      },
      boxShadow: {
        primary: "0px 0px 60px 0px #0000000D",
      },
      colors: {
        heading: "#0E191E",
        "sb-orange": "#ec4814",
        paragraph: "#5B5B5B",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
