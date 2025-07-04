module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        chocolate: "#5A3825",
        magenta: {
          500: "#D1006B",
        },
      },
      boxShadow: {
        cartoon: "4px 4px 0px 0px rgba(0, 0, 0, 0.8)",
        "cartoon-lg": "6px 6px 0px 0px rgba(0, 0, 0, 0.9)",
      },
      animation: {
        "bounce-subtle": "bounce-subtle 3s infinite ease-in-out",
        strikethrough: "strikethrough 0.5s ease-out forwards", // New animation
      },
      keyframes: {
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-2px)" },
        },
        // New keyframes for the strikethrough animation
        strikethrough: {
          "0%": { width: "0%", left: "0%" }, // Start from 0 width on the left
          "100%": { width: "100%", left: "0%" }, // Expand to 100% width
        },
      },
    },
  },
  plugins: [],
};
