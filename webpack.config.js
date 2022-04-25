const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgSpritemap = require('svg-spritemap-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
// const ImageminPlugin = require("imagemin-webpack");



// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// const { extendDefaultPlugins } = require("svgo");

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


      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options:{
      //         outputpath: 'images',
      //         publicPath: 'images',
      //         emitfile: true,

      //       }
      //     },
      //     {
      //       loader: ImageminPlugin.loader,
      //       options: {
      //         bail: true,
      //         imageminOptions: {
      //           plugins: [
      //             ["pngquant",{quality : [0.5, 0.5]}],
      //             ["mozjpeg",{quality : 50, progressive:true }],
      //             ["gifsicle",{interlaced:true, optimizationlevel:3 }],
      //             })
      //           ]
      //         }
      //       }
      //     }
      //   ]
      // }

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



  // optimization: {
  //   minimizer: [

  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify,
  //         options: {
  //           plugins: [
  //             ["gifsicle", { interlaced: true }],
  //             ["jpegtran", { progressive: true }],
  //             ["optipng", { optimizationLevel: 5 }],
  //             // Svgo configuration here https://github.com/svg/svgo#configuration
  //             // [
  //             //   "svgo",
  //             //   {
  //             //     plugins: extendDefaultPlugins([
  //             //       {
  //             //         name: "removeViewBox",
  //             //         active: false,
  //             //       },
  //             //       {
  //             //         name: "addAttributesToSVGElement",
  //             //         params: {
  //             //           attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
  //             //         },
  //             //       },
  //             //     ]),
  //             //   },
  //             // ],
  //           ],
  //         },
  //       },
  //     }),
  //   ]
  // },


  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
      serveIndex: true,
    },
    compress: true,
    devMiddleware: {
      writeToDisk: true
    },
    port: 2323,
    watchFiles: {
      paths: ['./src/*.html', './src/**/*'],
      options: {
        usePolling: false,
      },
    },
  },


};
