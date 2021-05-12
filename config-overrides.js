const { override, addBabelPlugin, babelInclude } = require("customize-cra");
const path = require("path");

module.exports = override(
  addBabelPlugin(["react-native-web" /*, { commonjs: true } */]),
  babelInclude([
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, "node_modules", "@mobily", "stacks"),
  ])
);
