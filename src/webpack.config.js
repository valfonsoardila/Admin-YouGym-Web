module.exports = {
    resolve: {
        extensions: [".cson"],
    },
    module: {
        loaders: [{ test: /\.cson$/, loader: "cson" }],
    },
};
