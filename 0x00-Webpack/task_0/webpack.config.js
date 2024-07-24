const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point for the application
  entry: "./src/index.js",

  // Output configuration
  output: {
    filename: "main.js", // Name of the output file
    path: path.resolve(__dirname, "dist"), // Output directory
  },

  // Plugins configuration
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html", // Path to your HTML template
      inject: "body", // Injects the script tag at the end of the body
    }),
  ],

  // Mode configuration
  mode: "development", // Set to 'production' for production build
};
