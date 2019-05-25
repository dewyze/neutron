import baseConfig from "./webpack.config.base";
import chalk from "chalk";
import { execSync } from "child_process";
import fs from "fs";
import merge from "webpack-merge";
import path from "path";
import webpack from "webpack";

const dist = path.join(__dirname, "..", "dist");
const dll = path.join(__dirname, "..", "dll");
const manifest = path.resolve(dll, "renderer.json");
const requiredByDLLConfig = module.parent.filename.includes(
  "webpack.config.renderer.dev.dll"
);

/**
 * Warn if the DLL is not built
 */
if (!requiredByDLLConfig && !(fs.existsSync(dll) && fs.existsSync(manifest))) {
  console.log(
    chalk.black.bgYellow.bold(
      'The DLL files are missing. Sit back while we build them for you with "npm run build-dll"'
    )
  );
  execSync("npm run build-dll");
}

export default merge.smart(baseConfig, {
  devtool: "inline-source-map",
  target: "electron-renderer",

  output: {
    path: dist,
    filename: "renderer.dev.js"
  },

  entry: {
    filename: "./renderer.js"
  },

  module: {
    rules: [
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: "url-loader"
      }
    ]
  },

  plugins: [
    requiredByDLLConfig
      ? null
      : new webpack.DllReferencePlugin({
          context: path.join(__dirname, "..", "dll"),
          manifest: require(manifest),
          sourceType: "var"
        })
  ],

  node: {
    __dirname: false,
    __filename: false
  }
});
