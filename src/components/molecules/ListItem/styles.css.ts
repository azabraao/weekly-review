import { sprinkles } from "styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const listItem = style({});

export const xIcon = style([
  sprinkles({
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
    cursor: "pointer",
  }),
  {
    selectors: {
      [`${listItem}:hover &`]: {
        opacity: 1,
      },
    },
  },
]);
