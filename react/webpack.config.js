var path = require('path');
var webpack = require("webpack");

module.exports = {
    // Target the output of the typescript compiler
    context: path.join(__dirname, "src"),

    // File to target
    entry: './index.ts',

    // Output
    output: {
        filename: 'demo-react.js',
        path: path.resolve(__dirname, 'dist')
    },

    // Resolve the file extensions
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    // Module to define what libraries with the compiler
    module: {
        rules: [
            {
                test: /\.(s?css)$/,
                use: [
                    // Inject CSS to the page
                    { loader: "style-loader" },
                    // Translate CSS to CommonJS
                    { loader: "css-loader" },
                    // Compile SASS to CSS
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    },
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    }
};
