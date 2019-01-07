const common = require('./webpack.common');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = Object.assign({}, common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [new ClosureCompilerPlugin({
                compiler: {
                    language_in: 'ECMASCRIPT6',
                    language_out: 'ECMASCRIPT3',
                    compilation_level: 'SIMPLE',
                    create_source_map: true
                },
                concurrency: 6
            })]
    }
});
