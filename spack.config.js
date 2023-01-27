const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    test: __dirname + "/src/index.ts",
  },
  output: {
    path: __dirname + "/dist",
    name: "index.js",
  },
  options: {
    minify: false,
    sourceMaps: false,
  },
});
