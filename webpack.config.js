module.exports = {
    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ],
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
    ],
};
