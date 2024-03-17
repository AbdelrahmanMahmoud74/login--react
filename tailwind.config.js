/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purpl":"#6315DB",
        "blu":"#EC2E76", 
        "buttons":"#6315DB"
      }
    },
  },
  plugins: [],
}

