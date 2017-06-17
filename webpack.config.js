const path = require('path');

const isProduction = (process.env.NODE_ENV || 'development') === 'production';

const buildPath = path.join(__dirname, './build');
const imgPath = path.join(__dirname, './source/assets/img');
const iconPath = path.join(__dirname, './source/assets/icons');
const jsSourcePath = path.join(__dirname, './source/js');
const sourcePath = path.join(__dirname, './source');

const options = { buildPath, imgPath, iconPath, sourcePath };

const plugins = isProduction
    ? require('./config/production.config')(options).plugins
    : require('./config/dev.config')(options).plugins;

const rules = isProduction
    ? require('./config/production.config')(options).rules
    : require('./config/dev.config')(options).rules;

module.exports = {
    devtool: isProduction ? false : 'source-map',
    context: jsSourcePath,
    entry: {
        js: './app.js',
    },
    output: {
        path: buildPath,
        publicPath: '/',
        filename: 'app-[hash].js',
    },
    module: {
        rules,
    },
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            jsSourcePath,
        ],
    },

    plugins,

    devServer: {
        contentBase: isProduction ? buildPath : sourcePath,
        historyApiFallback: true,
        port: 3000,
        compress: isProduction,
        inline: !isProduction,
        hot: !isProduction,
        host: '0.0.0.0',
        disableHostCheck: true,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            },
        },
    },
};
