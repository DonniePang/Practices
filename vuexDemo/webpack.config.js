const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');

const isProd = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: {
        vendor: './src/vendor.js',
        index: './src/index.js'
    },
    output: {
        filename: isProd ? '[name]-[chunkhash].js' : '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: isProd ? config.publicPath : ''
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            postcss: [require('autoprefixer')()]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')()
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template:'./index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    devtool: 'inline-source-map',
    devServer: !isProd ? undefined : {
        hot: true,
        contentBase: './dist'
    }
}