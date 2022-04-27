module.exports = {
    mode: "development",
    entry: "./src/scripts/index.js",
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env"
                ]
              }
            }
          ]
        }
      ]
    }
  };