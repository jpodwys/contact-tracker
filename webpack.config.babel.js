const webpack = require('webpack');
const { resolve } = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const dist = resolve('dist');

module.exports = {
  entry: './client/js/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
    loaders: [
      {
        test: /\.jsx?/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['env', {
              'targets': {
                'browsers': [
                  'last 2 Chrome versions',
                  'last 2 Firefox versions',
                  'last 2 Safari versions',
                  'last 2 Edge versions',
                  'last 2 iOS versions',
                  'last 2 ChromeAndroid versions'
                ]
              }
            }],
            'stage-0'
          ],
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          reduce_vars: false // see https://github.com/developit/preact/issues/961
        }
      }
    })
  ],
  output: {
    filename: 'bundle.js',
    path: dist
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      // Not necessary unless you consume a module using `createClass`
      // 'create-react-class': 'preact-compat/lib/create-react-class',
      // Not necessary unless you consume a module requiring `react-dom-factories`
      // 'react-dom-factories': 'preact-compat/lib/react-dom-factories'
    }
  }
}