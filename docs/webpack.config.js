const path = require("path");
const loader = require("sass-loader");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/"),
    filename: "main.js",
  },
  module: {
    rules: [
      // TypeScriptのモジュール
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/react"] },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
      // CSSのモジュール
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: "web",
};
