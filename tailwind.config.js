/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // paths to your components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Blue used for button hover and active states
        secondary: "#2563eb", // Secondary blue
        background: "#f3f4f6", // Light grey background for the page
        sidebar: "#1f2937", // Dark background for sidebar
        textPrimary: "#ffffff", // White text color
        cardBackground: "#ffffff", // White background for cards
        hoverBackground: "#334155", // Hover effect on sidebar and navbar links
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
