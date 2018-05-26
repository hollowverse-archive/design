const path = require('path');

// PostCSSs plugins
const partialImport = require('postcss-partial-import');
const stylelint = require('stylelint');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssCalc = require('postcss-calc');
const postcssSvgo = require('postcss-svgo');
const postcssReporter = require('postcss-reporter');

const nodeModules = path.resolve(__dirname, '..', 'node_modules');

module.exports = {
  module: {
    rules: [
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

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [nodeModules],
  },
};
