/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      backgroundImage: {
        "offcanvas-bg": "url('../temp-asset/statis-asset/Navbar.png')",
        "onlineBookGreen-bg": "url('../temp-asset/homepage/Booking-1.png')",
        "onlineBookPink-bg": "url('../temp-asset/homepage/Booking-2.png')",
      },

      fontFamily: {
        spartanThin: ["spartanThin"],
        spartanSemiBold: ["spartanSemiBold"],
        spartanRegular: ["spartanRegular"],
        spartanMedium: ["spartanMedium"],
        spartanLight: ["spartanLight"],
        spartanExtraLight: ["spartanExtraLight"],
        spartanExtraBold: ["spartanExtraBold"],
        spartanBold: ["spartanBold"],
        spartanBlack: ["spartanBlack"],
      },

      colors: {
        "green-ZAP": "#31AB5C",
        "black-ZAP": "#231F20",
        "white-ZAP": "#FAF7F5",
        "light-green": "#E0F2D6",
        "yellow-ZAP": "#F8D6B7",
        "light-maggenta": "#EFCDC2",
        "pink-ZAP": "#F8958C",
        "grey-ZAP": "#767876",
        "dark-grey": "#343534",
        "brownCream-zap": "#C0A279",
        "brown-zap": "#8B4328",
        "blue-water-zap": "#50ABF0",
      },

      screens: {
        xl: "1200px",
        "2xl": "1320px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
