const path = require("path");
module.exports = {
  entry: './index.js',
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}