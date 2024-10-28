import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0px)" },
        },
        moveGradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUpFade: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "gradient-move": "moveGradient 5s ease infinite",
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "slide-up-fade": "slideUpFade 1.5s ease-out forwards",
      },
      zIndex: {
        "-1": "-1", // Add a negative z-index
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(270deg, #B9E5E8,#7AB2D3, #93C5FD)",
        "hero-bg": "url('/homePage/heroBg.jpg')",
      },
      colors: {
        background: "#C2DFF2",
        textColor: "#274760",
        foreground: "var(--foreground)",
        btnBackground: "#FFA500",
        prupleColor: "#281EFF",
        greyBackground: "#252A34",
        blueBackground: "#307BC4",
        iconBackground: "#454A52",
        footerBackground: "#374A5E",
        footerSecond: "#EA5356",
        customBlue1: "#004080", // Darker blue
        customBlue2: "#3366cc", // Medium blue
        customBlue3: "#6699ff", // Light blue
      },
      fontSize: {
        "mobile-xl": ["3rem", { lineHeight: "1.2" }], // Custom size for large text on mobile
        "mobile-lg": ["2rem", { lineHeight: "1.2" }], // Custom size for medium text on mobile
        "mobile-md": ["0.875rem", { lineHeight: "1.5" }], // Custom size for smaller text on mobile
      },
      spacing: {
        "mobile-gap": "1rem", // Custom spacing for mobile
        "mobile-padding": "1rem", // Custom padding for mobile
      },
    },
  },
  plugins: [],
};

export default config;
