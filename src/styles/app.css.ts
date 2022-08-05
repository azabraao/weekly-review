import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./vars.css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("body", {
  fontFamily: vars.fontFamily.body,
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: vars.color["slate-900"],
      color: vars.color["white"],
    },
    "(prefers-color-scheme: light)": {
      backgroundColor: vars.color["white"],
      color: vars.color["slate-900"],
    },
  },
});
