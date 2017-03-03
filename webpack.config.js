const webpack = require('webpack');

path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    watch: true,
    devtool: 'inline-source-map',
    entry: [
        //'webpack-dev-server/client?' + host,
        'webpack/hot/only-dev-server',
        './app/js/app.js'
    ],
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
            test: /\.scss$|.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                        use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
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
            {
            test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name].[ext]'
            }
          }
        ]
  },
  plugins: [
      new CopyWebpackPlugin([{from: 'app/index.html', to: 'index.html'}]),
      new ExtractTextPlugin('style.css'),
      new CleanWebpackPlugin(['dist'])
  ]
    // devServer: {
    //     port: 8080,
    //     inline: true,
    //     hot: true
    // }
}
