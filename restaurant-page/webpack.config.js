const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // This ensures the dist folder is cleared before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Reference to my HTML
    }),
  ],
  devServer: {
    static: "./dist", // Serve my content from the 'dist' directory
    open: true, // Automatically open my browser
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
