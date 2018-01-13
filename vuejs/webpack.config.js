var path = require('path');
var webpack = require("webpack");

module.exports = {
    // Target the output of the typescript compiler
    context: path.join(__dirname, "src"),

    // File to target
    entry: './index.js',

    // Output
    output: {
        filename: 'demo-vue.js',
        path: path.resolve(__dirname, 'dist')
    },

    // Resolve the file extensions
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        },
        extensions: [".js", ".vue"]
    },

    // Module to define what libraries with the compiler
    module: {
        // Loaders
        loaders: [
            {
                // Target the vue files
                test: /\.vue$/,
                // Exclude the npm libraries
                exclude: /node_modules/,
                // Define the compiler to use
                use: [
                    {
                        // Compile the vue code to JavaScript
                        loader: "vue-loader"
                    }
                ]
            }
        ]
    }
};
