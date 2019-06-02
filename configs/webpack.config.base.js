import path from "path"
import webpack from "webpack"
import { dependencies } from "../package.json"

export default {
  mode: "development",
  externals: [...Object.keys(dependencies || {})],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    // filename: "[name].js",
    // sourceMapFilename: "[name].map",
    libraryTarget: "commonjs2",
    // publicPath: "http://localhost:8080/assets/"
  },
}
