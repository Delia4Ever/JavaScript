const path = require('path');

// module.exports = {
//   mode: "development",
//   entry: "./src/scripts/index.ts",
//   devServer: {
//     static: {
//     directory: path.join(__dirname, 'dist'),
//     }
//   },
//   resolve: {
//     extensions: ['.ts', '.js']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         loader: 'ts-loader'
//       }
//     ]
//   }
// };

module.exports = {
  mode: "development",
  entry: ['@babel/polyfill', "./src/scripts/index.js"],
  devServer: {
    static: {
    directory: path.join(__dirname, 'dist'),
  },
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