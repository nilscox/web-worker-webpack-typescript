const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { HOST = "0.0.0.0", PORT = "8000" } = process.env;

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  devtool: "source-map",

  entry: {
    main: "./src/main.ts",
    worker: "./src/worker.ts",
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es6",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({ chunks: ["main"] })],

  devServer: {
    host: HOST,
    port: Number(PORT),
  },
};
