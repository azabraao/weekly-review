module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    // "@vanilla-extract/babel-plugin",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
