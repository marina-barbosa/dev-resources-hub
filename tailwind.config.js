/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/pages/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['MagdaMono', 'ui-monospace', 'monospace'
        ],
      },
      boxShadow: {
        shape:
          "0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
        'custom-card': '#737373 0px 6.16px 0px 0px',
      },
      backgroundImage: {
        'pattern': "url(../../assets/pattern.svg)",
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [],
}

