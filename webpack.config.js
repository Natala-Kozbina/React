const webpack = require('webpack');

path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    watch: true,
    entry: './app/js/app.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: ['eslint-loader'],
              },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
            test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader?sourceMap']
                    })
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'img/[name].[ext]'
                }
            },
        ]
  },
  plugins: [
      new CopyWebpackPlugin([{from: 'app/index.html', to: 'index.html'}]),
      new ExtractTextPlugin('css/style.css'),
      new CleanWebpackPlugin(['dist'])
  ]
}
