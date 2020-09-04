const path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true, // https://ui.dev/react-router-cannot-get-url-refresh/
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    // Needed because react-router checks the URL and navigates. But is loaded from index.html.
    // Since webpack-dev-server is serving all files in directory, it cannot find the file for things after the '/' unless its a file
    // Redirecting first to the index.html fixes this.
  },
};