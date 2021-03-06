var path = require('path');

module.exports = {
    entry: './example/assets/app.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    node: {
        fs: "empty"
    }
};
