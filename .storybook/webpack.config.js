const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// PostCSSs plugins
const partialImport = require('postcss-partial-import');
const stylelint = require('stylelint');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssCalc = require('postcss-calc');
const postcssSvgo = require('postcss-svgo');
const postcssReporter = require('postcss-reporter');

const buildPath = path.resolve(__dirname, 'public');
const nodeModules = path.resolve(__dirname, 'node_modules');

// HTML templates for HtmlWebpackPlugin
const htmlTemplate = {
  template: 'src/shared/template/index.html',
  filename: 'index.html',
};

module.exports = {
  // devtool: 'eval-source-map',

  // entry: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],

  // output: {
  //   path: buildPath,
  //   filename: 'js/bundle-[hash:6].js',
  // },

  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: nodeModules,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      // },
      // {
      //   test: /\.js$/,
      //   exclude: nodeModules,
      //   loader: 'babel-loader',
      // },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                partialImport,
                stylelint,
                precss,
                postcssCalc,
                postcssSvgo,
                autoprefixer,
                postcssReporter({ clearMessages: true }),
              ],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
      {
        test: /\.(jpe?g|png)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              name: 'assets/images/[name]-[hash:6].[ext]',
            },
          },
        ],
      },
      {
        test: /\.woff|woff2|otf$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/fonts/[name]-[hash:6].[ext]',
            },
          },
        ],
      },
    ],
  },

  // plugins: [
  //   // new HtmlWebpackPlugin(htmlTemplate),
  //   // new webpack.HotModuleReplacementPlugin(),
  //   // new webpack.DefinePlugin({
  //   //   'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
  //   // }),
  // ],

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [nodeModules],
  },

  // devServer: {
  //   hot: true,
  //   host: '0.0.0.0',
  //   port: process.env.PORT || 8080,
  //   contentBase: buildPath,
  //   historyApiFallback: true,
  //   inline: true,
  //   compress: false,
  //   disableHostCheck: true,
  // },
};
