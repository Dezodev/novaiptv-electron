module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|jsx|mjs)$/,
                use: [{ loader: "babel-loader" }],
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{ loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]" }],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    { loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]" },
                ],
            },
        ],
    },
    target: "electron-renderer",
    stats: {
        colors: true,
        children: false,
        chunks: false,
        modules: false,
    },
};
