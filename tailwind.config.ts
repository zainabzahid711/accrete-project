import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        btnBackground: "#FFA500",
        prupleColor: "#281EFF",
        greyBackground: "#252A34",
        iconBackground: "#454A52",
        footerBackground: "#374A5E",
        footerSecond: "#EA5356",
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
