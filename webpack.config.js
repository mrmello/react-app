/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        // ...
        sources.push('webpack/hot/only-dev-server');
    }

    // ...
}

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
       loaders: [
           {
               test: /\.js$/,
               loader: ['react-hot-loader', 'jsx-loader'],
               exclude: /node_modules/
           }
       ]
   },
  plugins: [HtmlWebpackPluginConfig]
}
