
import type { Config } from "tailwindcss";

export default {
  // Use class strategy for dark mode - this will look for .dark on the HTML element
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
       colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'muted-foreground': "var(--muted-foreground)",
        primary: "var(--primary)",
        'primary-foreground': "var(--primary-foreground)",
        border: "var(--border)"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate")
  ],
  typography: (theme) => ({
    DEFAULT: {
      css: {
        color: 'var(--foreground)',
        a: { color: 'var(--primary)' },
        h1: { color: 'var(--foreground)' },
        h2: { color: 'var(--foreground)' },
        h3: { color: 'var(--foreground)' },
        strong: { color: 'var(--foreground)' },
        code: { color: 'var(--primary)' },
      },
    },
    invert: {
      css: {
        color: 'var(--foreground)',
        a: { color: 'var(--primary)' },
        h1: { color: 'var(--foreground)' },
        h2: { color: 'var(--foreground)' },
        h3: { color: 'var(--foreground)' },
        strong: { color: 'var(--foreground)' },
        code: { color: 'var(--primary)' },
      },
    },
  }),
} satisfies Config;
