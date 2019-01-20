var path = require('path');

module.exports = {
    // File to target
    entry: [
        './node_modules/gd-sprest-bs/dist/gd-sprest-bs.js',
        './src/index.js'
    ],

    // Output
    output: {
        filename: 'demo-vue.js'
    },

    // External Libs
    // Since we are including the library as part of the entry point, we don't
    // want webpack to bundle the library twice.
    externals: {
        "gd-sprest": "$REST",
        "gd-sprest-bs": "$REST"
    },

    // Resolve the file extensions
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        },
        extensions: [".css", ".js", ".vue"]
    },

    // Module to define what libraries with the compiler
    module: {
        // Rules
        rules: [
            // CSS Files
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            // VueJS Files
            {
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
