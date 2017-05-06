/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const pkg = require('./package.json');

const isDebug = !process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose');

const clientConfig = {

  name: 'client',
  target: 'web',

  entry: {
    client: ['./src/client.js'],
  },

  output: {
    path: path.resolve(__dirname, './build/public/assets'),
    publicPath: '/assets/',
    pathinfo: isVerbose,
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './src'),
        ],
        query: {
          presets: [
            'stage-2',
            'react'
          ]
        }
      } 
    ]
  },
  plugins: [
    // Define free variables
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': true,
      __DEV__: isDebug,
    }),
  ],

  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: isDebug ? 'cheap-module-source-map' : false,

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

module.exports = clientConfig;
