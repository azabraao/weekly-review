import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex"],
    flexDirection: ["row", "column"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end"],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    width: ["fit-content", "100%"],
    maxWidth: ["1000px"],
    height: ["100vh"],
    border: ["none"],
    borderRadius: vars.borderRadius,
    borderWidth: ["0", "1px", "2px"],
    borderStyle: ["solid"],
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    textAlign: ["center", "left"],
    margin: ["0 auto"],
    cursor: ["pointer"],
    textDecoration: ["none", "line-through"],
    userSelect: ["none", "text"],
    transition: ["opacity 0.2s ease-in-out", "background 0.2s ease-in-out"],
    opacity: [0, 1],
    flex: ["1", "2", "3"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["alignItems", "justifyContent"],
    typeSize: ["fontSize", "lineHeight"],
  },
});

const colorModeProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: vars.color,
    background: vars.color,
    backgroundColor: vars.color,
    borderColor: vars.color,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorModeProperties
);
