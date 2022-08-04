import { vars } from "../vars.css";

export const levelToFontSize = (
  level: HeadingLevel
): keyof typeof vars.fontSize => {
  switch (level) {
    case "1":
      return "2xl";
    case "2":
      return "xl";
    case "3":
      return "lg";
    case "4":
      return "base";
    case "5":
      return "sm";
    case "6":
      return "xs";
    default:
      return "2xl";
  }
};

export const levelToLineHeight = (
  level: HeadingLevel
): keyof typeof vars.lineHeight => {
  switch (level) {
    case "1":
      return "2xl";
    case "2":
      return "xl";
    case "3":
      return "lg";
    case "4":
      return "base";
    case "5":
      return "sm";
    case "6":
      return "xs";
    default:
      return "2xl";
  }
};
