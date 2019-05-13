import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

export default merge.smart(baseConfig, {
  devtool: 'inline-source-map',
  target: 'electron-renderer',

  output: {
    filename: 'renderer.dev.js'
  },

  module: {
    rules: [
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: 'url-loader'
      }
    ]
  },

  node: {
    __dirname: false,
    __filename: false
  },
});
