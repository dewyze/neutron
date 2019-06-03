import baseConfig from "./webpack.config.base"
import chalk from "chalk"
import { execSync, spawn } from "child_process"
import fs from "fs"
import merge from "webpack-merge"
import path from "path"
import webpack from "webpack"
import CheckNodeEnv from "../internals/scripts/CheckNodeEnv"

CheckNodeEnv("development")

const port = process.env.PORT || 1212
const publicPath = `http://localhost:${port}/dist`
const dist = path.join(__dirname, "..", "dist")
const dll = path.join(__dirname, "..", "dll")
const manifest = path.resolve(dll, "renderer.json")
const requiredByDLLConfig = module.parent.filename.includes(
  "webpack.config.renderer.dev.dll"
)

/**
 * Warn if the DLL is not built
 */
if (!requiredByDLLConfig && !(fs.existsSync(dll) && fs.existsSync(manifest))) {
  console.log(
    chalk.black.bgYellow.bold(
      'The DLL files are missing. Sit back while we build them for you with "npm run build-dll"'
    )
  )
  execSync("npm run build-dll")
}

export default merge.smart(baseConfig, {
  devtool: "inline-source-map",
  target: "electron-renderer",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },

  output: {
    publicPath: `http://localhost:${port}/dist/`,
    filename: "renderer.dev.js",
  },

  entry: [
    "react-hot-loader/patch",
    `webpack-dev-server/client?http://localhost:${port}/`,
    "webpack/hot/only-dev-server",
    require.resolve("../app/index.js"),
  ],

  module: {
    rules: [
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: "url-loader",
      },
    ],
  },

  plugins: [
    requiredByDLLConfig
      ? null
      : new webpack.DllReferencePlugin({
          context: path.join(__dirname, "..", "dll"),
          manifest: require(manifest),
          sourceType: "var",
        }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
    // TODO: What is this?
    // new webpack.NoEmitOnErrorsPlugin(),
  ],

  node: {
    __dirname: false,
    __filename: false,
  },

  devServer: {
    port,
    publicPath,
    compress: true,
    // noInfo: true,
    // stats: "errors-only",
    // inline: true,
    lazy: false,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    watchOptions: {
      aggregateTimeout: 500,
      ignored: /node_modules/,
      poll: 1000,
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: "false",
    },
    contentBase: path.join(__dirname, "dist"),
    before() {
      if (process.env.START_HOT) {
        console.log("Starting Main Process...")
        spawn("npm", ["run", "start-main-dev"], {
          shell: true,
          env: process.env,
          stdio: "inherit",
        })
          .on("close", code => process.exit(code))
          .on("error", spawnError => console.error(spawnError))
      }
    },
  },
})
