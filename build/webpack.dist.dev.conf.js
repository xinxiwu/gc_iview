const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.conf.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

process.env.NODE_ENV = "production";

module.exports = merge(webpackBaseConfig, {
  devtool: "source-map",

  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../dist/dev"),
    publicPath: "/dist",
    filename: "index_dev.js",
    library: "gc_iview",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: [
    {
      vue: {
        root: "Vue",
        commonjs: "vue",
        commonjs2: "vue",
        amd: "vue"
      },
      iview: "iview",
      lodash: {
        root: "_",
        commonjs: "lodash",
        commonjs2: "lodash",
        amd: "lodash"
      },
      moment: {
        root: "moment",
        commonjs: "moment",
        commonjs2: "moment",
        amd: "moment"
      },
      "animate.css": {
        root: "animate.css",
        commonjs: "animate.css",
        commonjs2: "animate.css",
        amd: "animate.css"
      }
    },
    /^iview.*/
  ],
  plugins: [
    // @todo
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    })
  ]
});
