import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "50%": {
            transform: "translateY(-20px) scale(1.05)",
          },
        },
        "float-delayed": {
          "0%, 100%": {
            transform: "translateY(0) scale(1.05)",
          },
          "50%": {
            transform: "translateY(-20px) scale(1)",
          },
        },
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        "float-delayed": "float-delayed 14s ease-in-out infinite 1s",
      },
      backgroundImage: {
        noise: "url('/noise.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config
