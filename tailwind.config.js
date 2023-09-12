/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "corner-blue": "url('/BGshape.png')"
      },
      colors: {
         'darkblue': "#0D3DE5"
      },
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
        mont: ['var(--font-mont)'],
      },
      borderRadius: {
        'custom': '8%',      // Applies the same radius to all corners
        'custom-r': '0 10% 10% 0', // Applies a radius only to the top-left corner
        'custom-l': '10% 0 0 10%', // Applies a radius only to the top-right corner
        'custom-bl': '0 0 0 10%', // Applies a radius only to
      },

      animation: {
        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade-away": "slide-left-fade-away 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade": "slide-right-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade-away": "slide-right-fade-away 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
      },
      keyframes: {
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0.2, transform: "translateY(35px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-fade-away": {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-300px)" },
        },
        "slide-left-fade": {
          "0%": { opacity: 0, transform: "translateX(10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        }, "slide-right-fade-away": {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(300px)" },
        },
        "slide-right-fade": {
          "0%": { opacity: 0, transform: "translateX(-10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
