import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    './src/main.jsx',
    './src/App.jsx',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure it covers all relevant files
  ],
  mode: "jit",
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        charcoal: '#394149',
        charcoalLite: '#494149',
      },
      fontFamily: {
        logo: ['Megrim', 'serif'],
        creator: ['Caveat', 'cursive'],
      },
      animation: {
        'slide-left': 'slideLeft 22s linear infinite',
        'slide-right': 'slideRight 30s linear infinite',
        wave: 'wave 10s cubic-bezier(0.44, 0.66, 0.67, 0.37) infinite',
      },
      keyframes: {
        slideLeft: {
          '0%': { left: '-25%' },
          '100%': { left: '100%' },
        },
        slideRight: {
          '0%': { left: '-25%' },
          '100%': { left: '100%' },
        },
        wave: {
          '0%': { 'background-position': '0' },
          '100%': { 'background-position': '1440px' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
