/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "top-left-gradient":
          "radial-gradient(ellipse at top left, #18FF9E 0%, #17FFE3 100%)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        hanson: ["var(--font-hanson)", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false, // Optional: if you're using your own reset or not importing preflight
  },
  plugins: [],
};
