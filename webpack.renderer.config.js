const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|\.webpack)/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
  devtool: "eval-source-map",
};
