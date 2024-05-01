/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        maxWidth: "1200px",
        padding: "0 32px",
        margin: "0 auto",
      },
    },
  },
  plugins: [require("daisyui"), "flowbite/plugin"],
};
