/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pacific: "#00b8ff",
        indigo: "#6736e4",
        marine: "#001D3D",
        asphalt: "#000814",
        danger: "#e74c3c",
        success: "#1DBC60",
      },
    },
  },
  plugins: [],
};
