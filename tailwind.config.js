/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      ],
  theme: {
    extend: {
      colors: {
        blue: "#0079FF",
        green: "#00DFA2",
        pink: "#FF0060",
        yellow: "#FBFDCE"
      },
      fontFamily: {
        jaldi: 'Jaldi'
      }
    },
  },
  plugins: [],
}

