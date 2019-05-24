import baseConfig from './webpack.config.base';
import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';

const dist = path.join(__dirname, '..', 'dist');
const dll = path.join(__dirname, '..', 'dll');
const manifest = path.resolve(dll, 'renderer.json');

export default merge.smart(baseConfig, {
  devtool: 'inline-source-map',
  target: 'electron-renderer',

  output: {
    path: dist,
    filename: 'renderer.dev.js'
  },

  entry: {
    filename: './renderer.js'
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

  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..', 'dll'),
      manifest: require(manifest),
      sourceType: 'var'
    }),
  ],

  node: {
    __dirname: false,
    __filename: false
  },
});
