import type { Config } from "tailwindcss";

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
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        ".text-shadow-sharp": {
          textShadow: "2px 2px 0px rgba(0, 0, 0, 1)",
        },
        ".text-shadow-large": {
          textShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
        },
        ".text-shadow-red": {
          textShadow: "2px 2px 0px rgba(255, 0, 0, 1)",
        },
        ".text-shadow-yellowish-green": {
          textShadow: "3px 3px 0px rgba(173, 255, 47, 1)",
        },
      });
    },
  ],
} satisfies Config;
