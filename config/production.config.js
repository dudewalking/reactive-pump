const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (options) {
    const commonConfig = require('./common.config')(options);
    const plugins = [
        ...commonConfig.plugins,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false,
            },
        }),
        new ExtractTextPlugin('workbench-[hash].css'),
    ];

    const rules = [
        ...commonConfig.rules,
        {
            test: /\.s?css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!sass-loader!import-glob-loader',
            }),
        },
    ];

    return { rules, plugins };
};
