module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        black: {
          900: "var(--black_900)",
          "900_21": "var(--black_900_21)",
        },
        "blue-gray": {
          50: "var(--blue_gray_50)",
          500: "var(--blue_gray_500)",
          600: "var(--blue_gray_600)",
          800: "var(--blue_gray_800)",
          900: "var(--blue_gray_900)",
          "100_66": "var(--blue_gray_100_66)",
          "900_01": "var(--blue_gray_900_01)",
          "900_02": "var(--blue_gray_900_02)",
        },
        gray: {
          50: "var(--gray_50)",
          100: "var(--gray_100)",
          200: "var(--gray_200)",
          400: "var(--gray_400)",
          500: "var(--gray_500)",
          600: "var(--gray_600)",
          700: "var(--gray_700)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "100_01": "var(--gray_100_01)",
          "500_01": "var(--gray_500_01)",
          "500_66": "var(--gray_500_66)",
        },
        "light-blue": {
          700: "var(--light_blue_700)",
          800: "var(--light_blue_800)",
        },
        pink: {
          50: "var(--pink_50)",
        },
        teal: {
          900: "var(--teal_900)",
        },
        white: "var(--white)",
        color_white: {
          a700_87: "var(--color_white_a700_87)",
        },
      },
      boxShadow: {},
    },
    fontFamily: {
      cabinetgrotesk: ["Cabinet Grotesk", "sans-serif"],
      geist: ["Geist", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      playfairdisplay: ["Playfair Display", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
