path = require('path');
const webpack = require('webpack');
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
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
            test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
              ]
            }
        ]
  },
  plugins: [
      new CopyWebpackPlugin([{from: 'app/index.html', to: 'index.html'}, {from:'app/img/',to:'img/' }]),
      new ExtractTextPlugin('style.css')
  ]
}
