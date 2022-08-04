import { createGlobalTheme } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";

export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    "1x": "4px",
    "2x": "8px",
    "3x": "12px",
    "4x": "16px",
    "5x": "20px",
    "6x": "24px",
    "7x": "28px",
    "8x": "32px",
    "9x": "36px",
    "10x": "40px",
  },
  color: {
    white: colors.slate[50],

    "slate-100": colors.slate[100],
    "slate-200": colors.slate[200],
    "slate-300": colors.slate[300],
    "slate-400": colors.slate[400],
    "slate-500": colors.slate[500],
    "slate-900": colors.slate[900],

    cyan: colors.cyan[500],
    "cyan-700": colors.cyan[700],
  },
  borderRadius: {
    "0": "0",
    "1x": "4px",
    "2x": "8px",
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
  },
  lineHeight: {
    xs: "16px",
    sm: "20px",
    base: "24px",
    lg: "28px",
    xl: "28px",
    "2xl": "32px",
    "3xl": "36px",
    "4xl": "40px",
  },
});
