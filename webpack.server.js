const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.js');

const extractSass = new ExtractTextPlugin({
  filename: "../public/styles.css",
  allChunks: true,
});

const config = {
  // Inform webpack that we are building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file
  // of our server application
  entry: './server/index.js',

  // Tell webpack where to put
  // the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: "style-loader",
        }),
      },
    ],
  },
  plugins: [
    extractSass,
  ],
};

module.exports = merge(baseConfig, config);
