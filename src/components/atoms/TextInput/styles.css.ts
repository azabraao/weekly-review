import { sprinkles } from "styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const textInput = style([
  sprinkles({
    borderRadius: "2x",
    padding: "4x",
    color: {
      darkMode: "white",
      lightMode: "slate-900",
    },
    background: {
      darkMode: "slate-900",
      lightMode: "white",
    },
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: {
      darkMode: "white",
      lightMode: "slate-900",
    },
  }),
  {
    "::placeholder": {
      color: "slate-500",
    },
  },
]);
