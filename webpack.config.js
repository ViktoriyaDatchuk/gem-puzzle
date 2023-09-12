const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const config ={
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'cheap-module-source-map' : 'source-map',
        watch: !isProduction,
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'script.js',
            assetModuleFilename: 'asset/[name][ext]'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                        presets: ['@babel/preset-env']
                        }
                    }
                },

                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },

                {
                    test: /\.(?:ico|png|jpg|jpeg|svg|gif|webp)$/i,
                    type: 'asset/resource',
                },

                {
                    test: /\.(mp3|wav)$/i,
                    type: 'asset',
                    generator: {
                      filename: 'audio/[name][ext]'
                    }
                  }
            ]
        },

        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html',
                favicon: 'src/assets/favicon.ico'
            }),
            new CopyPlugin({
                patterns: [{ from: 'src/assets/audio' }],
            })
        ]
    }

    return config;
}