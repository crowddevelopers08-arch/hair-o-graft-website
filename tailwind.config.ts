import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#354C9C",
        "on-primary": "#ffffff",
        secondary: "#ED3136",
        "secondary-hover": "#D91F2C",
        accent: "#F4D03F",
        "accent-light": "#FFF9E6",
        surface: "#F7F8FC",
        "surface-container-low": "#F7F8FC",
        "on-surface": "#363435",
        "on-surface-variant": "#555555",
        "outline-variant": "#D8DDE8",
        "dark-footer": "#1F2937",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      spacing: {
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        gutter: "24px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "sans-serif"],
        "display-lg": ["var(--font-outfit)", "Outfit", "sans-serif"],
        "headline-md": ["var(--font-outfit)", "Outfit", "sans-serif"],
        "headline-sm": ["var(--font-outfit)", "Outfit", "sans-serif"],
        "body-lg": ["var(--font-outfit)", "Outfit", "sans-serif"],
        "body-md": ["var(--font-outfit)", "Outfit", "sans-serif"],
        "label-md": ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};

export default config;
