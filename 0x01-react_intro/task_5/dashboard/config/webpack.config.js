const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for your application
  output: {
    filename: "bundle.js", // Output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory as dist
    clean: true, // Clean the output directory before emitting
  },
  mode: "development", // Set the mode to development
  module: {
    rules: [
      {
        test: /\.css$/i, // For handling CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // For handling images
        type: "asset/resource", // Use asset/resource for image files
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // Skip optimization in debug mode
              disable: true, // Disable optimization
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/, // For handling JavaScript and JSX files
        exclude: /node_modules/,
        use: ["babel-loader"], // Use Babel loader for transpiling
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve extensions for import statements
  },
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve content from dist directory
    compress: true, // Enable gzip compression
    open: true, // Open the browser after server has been started
    hot: true, // Enable hot module replacement
    port: 3000, // Use port 8564
  },
  devtool: "inline-source-map", // Inline source maps for easier debugging
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // The name of the HTML file to be created
      template: "./public/index.html", // Template file for generating the HTML file
      inject: "body", // Inject the script tag at the end of the body
    }),
  ],
};
