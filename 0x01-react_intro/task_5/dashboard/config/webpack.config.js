const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js", // Entry point for your JavaScript
  output: {
    filename: "bundle.js", // Output bundle filename
    path: path.resolve(__dirname, "dist"), // Output directory
    publicPath: "/", // Public URL of the output directory
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i, // Match CSS files
        use: ["style-loader", "css-loader"], // Process CSS files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image files
        use: [
          "file-loader", // Handle file imports
          {
            loader: "image-webpack-loader", // Optimize images
            options: {
              bypassOnDebug: true, // Disable optimization in debug mode
              disable: true, // Disable image optimization for webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules
        use: ["babel-loader"], // Use Babel to transpile JS and JSX
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve JS and JSX file extensions
  },
  devServer: {
    static: path.join(__dirname, "dist"), // Serve static files from the dist folder
    compress: true, // Enable gzip compression
    open: true, // Open the browser on server start
    hot: true, // Enable hot module replacement
    port: 8564, // Port for the development server
  },
  devtool: "inline-source-map", // Generate inline source maps
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template for generating index.html
      inject: "body", // Inject bundle.js into the body tag
    }),
    new HotModuleReplacementPlugin(), // Enable HMR
  ],
};
