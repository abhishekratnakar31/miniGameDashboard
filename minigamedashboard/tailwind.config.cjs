// module.exports = {
// darkMode: "class",
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#7c3aed", // purple-ish
//         accent: "#06b6d4"
//       }
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",   // REQUIRED FOR MANUAL DARK MODE

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        accent: "#06b6d4",
      },
    },
  },

  plugins: [],
};