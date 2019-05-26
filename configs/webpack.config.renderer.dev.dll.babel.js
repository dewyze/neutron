import baseConfig from "./webpack.config.base";
import merge from "webpack-merge";
import path from "path";
import webpack from "webpack";
import { dependencies } from "../package.json";

const dist = path.join(__dirname, "..", "dll");

export default merge.smart(baseConfig, {
  context: path.join(__dirname, ".."),
  devtool: "eval",
  mode: "development",
  target: "electron-renderer",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  module: require("./webpack.config.renderer.dev.babel").default.module,
  entry: {
    renderer: Object.keys(dependencies || {})
  },

  output: {
    library: "renderer",
    path: dist,
    filename: "[name].dev.dll.js",
    libraryTarget: "var"
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(dist, "[name].json"),
      name: "[name]"
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development"
    })
  ]
});
