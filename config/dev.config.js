const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = function (options) {
    const commonConfig = require('./common.config')(options);

    const plugins = [
        ...commonConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
    ];

    const rules = [
        ...commonConfig.rules,
        {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader?sourceMap',
                'import-glob-loader',
            ],
        },
    ];

    return { rules, plugins };
};
