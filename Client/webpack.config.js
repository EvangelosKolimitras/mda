const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require("path");
const SRC_DIR = path.resolve(`${__dirname}/src`);
const DIST_DIR = path.resolve(`${__dirname}/public`);

const language = ["js", "ts"];

module.exports = {
  entry: [SRC_DIR + `/index.${language[1]}x`],
  output: {
    path: DIST_DIR,
    publicPath: "/assets/js",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    port: 9000,
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
  },
};
