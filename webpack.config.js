module.exports = {
    entry : __dirname + "/app/main.js",
    devtool: 'eval-source-map',
    output : {
        path : __dirname + "/public",
        filename : "bundle.js"
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
      }
}