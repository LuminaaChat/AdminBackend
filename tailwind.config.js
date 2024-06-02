/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['TitilliumWeb', 'sans-serif'],
    },
    extend: {
      colors: {
        'lc-yellow-dark': '#CCB10B',
        'lc-yellow-light': '#FFE12B',
        'lc-yellow-ultralight': '#FFE548',
        'lc-petrol': '#0C242D',
        'lc-petrol-light': '#0D3546',
        'lc-petrol-ultralight': '#475962',
        'lc-turqouise': '#00AEAE',
        'lc-positive': '#009834',
        'lc-warning': '#FF819F',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        jho: {
          "primary": "#FFDD0E",
          "primary-content": "#0C242D",
          "primary-content-light": "#0D3546",
          // "primary-dark": "#CCB10B",
          // "primary-light": "#FFE12B",
          // "primary-ultralight": "#FFE548",
          "secondary": "#f6d860",
          "secondary-content": "#475962",
          "accent": "#00AEAE",
          "neutral": "#3d4451",
          "positive": "#009834",
          "warning": "#FF819F",
          "base-100": "#ffffff",
        },
      },
      "light",
      "dark"
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
  },
}

