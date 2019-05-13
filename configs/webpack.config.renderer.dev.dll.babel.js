import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';
import { dependencies } from '../package.json';

const dist = path.join(__dirname, '..', 'dll');

export default merge.smart(baseConfig, {
  context: path.join(__dirname, '..'),
  devtool: 'eval',
  mode: 'development',
  target: 'electron-renderer',

  module: require('./webpack.config.renderer.dev.babel').default.module,

  entry: {
    renderer: Object.keys(dependencies || {})
  },

  output: {
    library: 'renderer',
    path: dist,
    filename: '[name].dev.dll.js',
    libraryTarget: 'var'
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(dist, '[name].json'),
      name: '[name]'
    }),
  ]
});
