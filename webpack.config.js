const path = require('path');

module.exports = [
  {
    context: path.join(__dirname, 'src'),
    entry: {
      script: './js/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist')
    }
  }
]