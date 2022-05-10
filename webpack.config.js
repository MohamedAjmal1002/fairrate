const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgSpritemap = require('svg-spritemap-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].js',
  },

  module: {
    rules: [{
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },


      
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/index.html'
    }),

    new CleanWebpackPlugin(),

    new SvgSpritemap('./src/icons/*.svg', {
      output: {
        filename: 'spritemap.svg',
        svg: {
          sizes: false
        },
        svg4everybody: true,
        svgo: true,
      },
      sprite: {
        prefix: false,
        gutter: 0,
        generate: {
          title: false,
          symbol: true
        },
      },
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
      serveIndex: true,
    },
    compress: true,
    devMiddleware: {
      writeToDisk: true
    },
    port: 2222,
    watchFiles: {
      paths: ['./src/*.html', './src/**/*'],
      options: {
        usePolling: false,
      },
    },
  },


};
