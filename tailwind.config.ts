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
    },
  },
  plugins: [],
};
export default config;
