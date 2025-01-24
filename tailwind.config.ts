import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      custom: ["Vazirmatn", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--color-secondary)",
        disable: "var(--color-disable-grey)",
        "disable-dark": "var(--color-disable-dark-grey)",
        "main-yellow": "var(--color-main-yellow)",
        "grey-300": "var(--color-grey-300)",
        "grey-900": "var(--color-grey-900)",
        "grey-400": "var(--color-grey-400)",
        "grey-700": "var(--color-grey-700)",
        "grey-100": "var(--color-grey-100)",
        radio: "var(--color-radio-button)",
        error: "var(--color-error)",
        success: "var(--color-success)",
      },
      boxShadow: {
        "on-surfaces": "var(--shadow-on-surfaces)",
      },
      fontSize: {
        "headline-5": [
          "18px",
          {
            lineHeight: "28.13px",
            letterSpacing: "0px",
          },
        ],
        "headline-6": [
          "16px",
          {
            lineHeight: "27.2px",
            letterSpacing: "0px",
          },
        ],
        "subtitle-2": [
          "14px",
          {
            lineHeight: "21.88px",
            letterSpacing: "0px",
          },
        ],
        button: [
          "16px",
          {
            lineHeight: "25px",
            letterSpacing: "0px",
          },
        ],
        caption: [
          "12px",
          {
            lineHeight: "18.75px",
            letterSpacing: "0px",
          },
        ],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
      },
    },
  },
  plugins: [],
} satisfies Config;
