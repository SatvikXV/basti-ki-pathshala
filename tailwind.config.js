// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // This line tells Tailwind to scan all your components for class names.
  // This will fix the layout issue.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // This section adds the 'Poppins' font to Tailwind's theme.
  // This will fix the font issue.
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
}