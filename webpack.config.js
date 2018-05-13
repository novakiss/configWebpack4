module.exports = {
    entry: './app/app',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react','es2015'],
                    }
                }
            }
        ]
    }
};