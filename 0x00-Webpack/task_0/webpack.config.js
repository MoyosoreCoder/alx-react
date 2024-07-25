const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for the application
  output: {
    filename: "main.js", // Name of the output file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html", // Path to your HTML template
      inject: "body", // Injects the script tag at the end of the body
    }),
  ],
  mode: "development", // Set to 'production' for production build
};
