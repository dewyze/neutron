import path from "path";
import webpack from "webpack";

export default {
  mode: "development",
  externals: ["react", "react-dom"],
  entry: {
    main: "./renderer.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    // sourceMapFilename: "[name].map",
    libraryTarget: "commonjs2"
    // publicPath: "http://localhost:8080/assets/"
  }
};
