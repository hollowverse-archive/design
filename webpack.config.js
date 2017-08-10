const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// PostCSSs plugins
const partialImport = require('postcss-partial-import');
const stylelint = require('stylelint');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssCalc = require('postcss-calc');
const postcssSvgo = require('postcss-svgo');
const postcssReporter = require('postcss-reporter');

const isDev = process.env.NODE_ENV === 'development' || false;
const buildPath = path.resolve(__dirname, 'build');
const nodeModules = path.resolve(__dirname, 'node_modules');

// HTML templates for HtmlWebpackPlugin
const htmlTemplate = {
  template: 'src/shared/template/index.html',
  filename: 'index.html',
};

module.exports = {
  devtool: isDev ? 'eval-source-map' : false,

  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js'),
  ],

  output: {
    path: buildPath,
    filename: 'js/bundle-[hash:6].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: nodeModules,
        loader: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        exclude: nodeModules,
        loader: 'babel-loader',
      },
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
        use: [{
          loader: 'url-loader',
          options: {
            limit: 50000,
            name: 'assets/images/[name]-[hash:6].[ext]',
          },
        }],
      },
      {
        test: /\.woff|woff2|otf$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/fonts/[name]-[hash:6].[ext]',
          },
        }],
      },
    ],
  },

  plugins: isDev ? [
    new HtmlWebpackPlugin(htmlTemplate),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
  ] : [
    new HtmlWebpackPlugin(htmlTemplate),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\\\]locale$/, /en/),
    new FaviconsWebpackPlugin({
      logo: './src/shared/assets/appicon.png',
      prefix: 'assets/favicon/',
      background: '#6e63cf',
      icons: {
        android: false,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
  ],

  resolve: {
    extensions: ['.js'],
    modules: [nodeModules],
  },

  devServer: {
    hot: isDev,
    host: '0.0.0.0',
    port: 8080,
    contentBase: buildPath,
    historyApiFallback: true,
    inline: isDev,
    compress: !isDev,
    disableHostCheck: true,
  },
};
