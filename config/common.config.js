const SpritePlugin = require('svg-sprite-loader/plugin');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = function (options) {
    const {buildPath, imgPath, iconPath, sourcePath} = options;

    const plugins = [
        new SpritePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-[hash].js',
            minChunks(module) {
                const context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv),
            },
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(sourcePath, 'index.html'),
            path: buildPath,
            filename: 'index.html',
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            'last 3 version',
                            'ie >= 10',
                        ],
                    }),
                ],
                context: sourcePath,
            },
        }),
    ];

    const rules = [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                'eslint-loader',
            ],
        },
        {
            test: /\.svg$/,
            use: [
                {
                    loader: 'svg-sprite-loader',
                    options: {
                        extract: true,
                        spriteFilename: 'icons-sprite.svg',
                    },
                },
                'svgo-loader',
            ],
            include: iconPath,
        },
        {
            test: /\.(png|gif|jpg|svg)$/,
            include: imgPath,
            use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
        },
    ];

    return {rules, plugins};
};
