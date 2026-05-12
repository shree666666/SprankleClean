/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0D5C63",
          50: "#E6F3F4",
          100: "#CCE7E9",
          200: "#99CFD3",
          300: "#66B7BD",
          400: "#339FA7",
          500: "#0D5C63",
          600: "#0B4F55",
          700: "#094248",
          800: "#06353A",
          900: "#04282C",
        },
        saffron: {
          DEFAULT: "#F4A300",
          50: "#FEF4DD",
          100: "#FDE9BB",
          200: "#FBD377",
          300: "#F9BD33",
          400: "#F4A300",
          500: "#D18C00",
          600: "#A36E00",
          700: "#755000",
          800: "#473200",
          900: "#1A1300",
        },
        cream: {
          DEFAULT: "#FDF5E6",
          50: "#FFFDF8",
          100: "#FDF5E6",
          200: "#FBEBCC",
          300: "#F8E0B3",
          400: "#F6D699",
          500: "#F4CC80",
        },
        offwhite: {
          DEFAULT: "#FAFAFA",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-heading)", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0D5C63 0%, #094248 60%, #F4A300 100%)",
        "saffron-glow":
          "radial-gradient(circle at top, rgba(244,163,0,0.25), transparent 60%)",
      },
      boxShadow: {
        warm: "0 10px 30px -10px rgba(13, 92, 99, 0.25)",
        glow: "0 0 0 4px rgba(244, 163, 0, 0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};