import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  themes: {
    light: {
      colors: {
        default: {
          50: "#fafafa",
          100: "#f2f2f3",
          200: "#ebebec",
          300: "#e3e3e6",
          400: "#dcdcdf",
          500: "#d4d4d8",
          600: "#afafb2",
          700: "#8a8a8c",
          800: "#656567",
          900: "#404041",
          foreground: "#000",
          DEFAULT: "#d4d4d8",
        },
        primary: {
          50: "#dfedfd",
          100: "#b3d4fa",
          200: "#86bbf7",
          300: "#59a1f4",
          400: "#2d88f1",
          500: "#006fee",
          600: "#005cc4",
          700: "#00489b",
          800: "#003571",
          900: "#002147",
          foreground: "#fff",
          DEFAULT: "#006fee",
        },
        secondary: {
          50: "#eee4f8",
          100: "#d7bfef",
          200: "#bf99e5",
          300: "#a773db",
          400: "#904ed2",
          500: "#7828c8",
          600: "#6321a5",
          700: "#4e1a82",
          800: "#39135f",
          900: "#240c3c",
          foreground: "#fff",
          DEFAULT: "#7828c8",
        },
        success: {
          50: "#e2f8ec",
          100: "#b9efd1",
          200: "#91e5b5",
          300: "#68dc9a",
          400: "#40d27f",
          500: "#17c964",
          600: "#13a653",
          700: "#0f8341",
          800: "#0b5f30",
          900: "#073c1e",
          foreground: "#000",
          DEFAULT: "#17c964",
        },
        warning: {
          50: "#fef4e4",
          100: "#fce4bd",
          200: "#fad497",
          300: "#f9c571",
          400: "#f7b54a",
          500: "#f5a524",
          600: "#ca881e",
          700: "#9f6b17",
          800: "#744e11",
          900: "#4a320b",
          foreground: "#000",
          DEFAULT: "#f5a524",
        },
        danger: {
          50: "#fee1eb",
          100: "#fbb8cf",
          200: "#f98eb3",
          300: "#f76598",
          400: "#f53b7c",
          500: "#f31260",
          600: "#c80f4f",
          700: "#9e0c3e",
          800: "#73092e",
          900: "#49051d",
          foreground: "#000",
          DEFAULT: "#f31260",
        },
        background: "#ffffff",
        foreground: {
          50: "#dfdfdf",
          100: "#b3b3b3",
          200: "#868686",
          300: "#595959",
          400: "#2d2d2d",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          foreground: "#fff",
          DEFAULT: "#000000",
        },
        content1: {
          DEFAULT: "#ffffff",
          foreground: "#000",
        },
        content2: {
          DEFAULT: "#f4f4f5",
          foreground: "#000",
        },
        content3: {
          DEFAULT: "#e4e4e7",
          foreground: "#000",
        },
        content4: {
          DEFAULT: "#d4d4d8",
          foreground: "#000",
        },
        focus: "#006FEE",
        overlay: "#000000",
      },
    },
    dark: {
      colors: {
        default: {
          50: "#e7e7e8",
          100: "#c5c5c8",
          200: "#a4a4a7",
          300: "#828287",
          400: "#616166",
          500: "#3f3f46",
          600: "#34343a",
          700: "#29292e",
          800: "#1e1e21",
          900: "#131315",
          foreground: "#fff",
          DEFAULT: "#3f3f46",
        },
        primary: {
          50: "#dfedfd",
          100: "#b3d4fa",
          200: "#86bbf7",
          300: "#59a1f4",
          400: "#2d88f1",
          500: "#006fee",
          600: "#005cc4",
          700: "#00489b",
          800: "#003571",
          900: "#002147",
          foreground: "#fff",
          DEFAULT: "#006fee",
        },
        secondary: {
          50: "#eee4f8",
          100: "#d7bfef",
          200: "#bf99e5",
          300: "#a773db",
          400: "#904ed2",
          500: "#7828c8",
          600: "#6321a5",
          700: "#4e1a82",
          800: "#39135f",
          900: "#240c3c",
          foreground: "#fff",
          DEFAULT: "#7828c8",
        },
        success: {
          50: "#e2f8ec",
          100: "#b9efd1",
          200: "#91e5b5",
          300: "#68dc9a",
          400: "#40d27f",
          500: "#17c964",
          600: "#13a653",
          700: "#0f8341",
          800: "#0b5f30",
          900: "#073c1e",
          foreground: "#000",
          DEFAULT: "#17c964",
        },
        warning: {
          50: "#fef4e4",
          100: "#fce4bd",
          200: "#fad497",
          300: "#f9c571",
          400: "#f7b54a",
          500: "#f5a524",
          600: "#ca881e",
          700: "#9f6b17",
          800: "#744e11",
          900: "#4a320b",
          foreground: "#000",
          DEFAULT: "#f5a524",
        },
        danger: {
          50: "#fee1eb",
          100: "#fbb8cf",
          200: "#f98eb3",
          300: "#f76598",
          400: "#f53b7c",
          500: "#f31260",
          600: "#c80f4f",
          700: "#9e0c3e",
          800: "#73092e",
          900: "#49051d",
          foreground: "#000",
          DEFAULT: "#f31260",
        },
        background: "#000000",
        foreground: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#d2d2d2",
          700: "#a6a6a6",
          800: "#797979",
          900: "#4d4d4d",
          foreground: "#000",
          DEFAULT: "#ffffff",
        },
        content1: {
          DEFAULT: "#18181b",
          foreground: "#fff",
        },
        content2: {
          DEFAULT: "#27272a",
          foreground: "#fff",
        },
        content3: {
          DEFAULT: "#3f3f46",
          foreground: "#fff",
        },
        content4: {
          DEFAULT: "#52525b",
          foreground: "#fff",
        },
        focus: "#006FEE",
        overlay: "#ffffff",
      },
    },
  },
  layout: {
    disabledOpacity: "0.5",
  },

  darkMode: "class",
  plugins: [heroui({
    defaultTheme: "dark",
    layout: {
      dividerWeight: "1px", // h-divider the default height applied to the divider component
      disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
      fontSize: {
        tiny: "0.75rem", // text-tiny
        small: "0.875rem", // text-small
        medium: "1rem", // text-medium
        large: "1.125rem", // text-large
      },
      lineHeight: {
        tiny: "1rem", // text-tiny
        small: "1.25rem", // text-small
        medium: "1.5rem", // text-medium
        large: "1.75rem", // text-large
      },
      radius: {
        small: "8px", // rounded-small
        medium: "12px", // rounded-medium
        large: "14px", // rounded-large
      },
      borderWidth: {
        small: "1px", // border-small
        medium: "2px", // border-medium (default)
        large: "3px", // border-large
      },
    },
    themes: {
      light: {
        layout: {
          hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
          boxShadow: {
            // shadow-small
            small:
              "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            // shadow-medium
            medium:
              "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            // shadow-large
            large:
              "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
          },
        },
      },
      dark: {
        layout: {
          hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
          boxShadow: {
            // shadow-small
            small:
              "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            // shadow-medium
            medium:
              "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            // shadow-large
            large:
              "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
          },
        },
      },
    },
  })],
} satisfies Config;