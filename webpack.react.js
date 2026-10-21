const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { DEV_PORT, HEADERS } = require("./src/shell-config");

const production = process.env.NODE_ENV === "production";

module.exports = {
  mode: production ? "production" : "development",
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "context.js",
    publicPath: "",
    clean: true,
  },
  devtool: production ? false : "source-map",
  devServer: {
    port: DEV_PORT,
    hot: true,
    headers: HEADERS,
    static: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/html/app.html"),
      title: "SpiderFeet Context GoRules",
    }),
    new MiniCssExtractPlugin({ filename: "context.css" }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
