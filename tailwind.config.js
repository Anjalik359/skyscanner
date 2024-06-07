/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      caveat: ["Caveat", "sans-serif"],
    },
  },
  plugins: [],
};
