const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../Tand.Web/wwwroot/dev')
    }
});
