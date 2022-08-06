import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles/sprinkles.css";
import { vars } from "styles/vars.css";

export const button = style([
  sprinkles({
    backgroundColor: "cyan",
    color: "slate-900",
    borderRadius: "1x",
    paddingY: "2x",
    paddingX: "6x",
    transition: "background 0.2s ease-in-out",
    border: "none",
    cursor: "pointer",
    fontSize: "base",
  }),
  {
    ":hover": {
      backgroundColor: vars.color["cyan-700"],
    },
  },
]);
