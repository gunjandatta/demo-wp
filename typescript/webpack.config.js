var path = require("path");
var webpack = require("webpack");

// WebPack Configuration
module.exports = {
    // Entry Point
    entry: "./src/index.ts",

    // Output
    output: {
        filename: "wpDemo.js",
        path: path.resolve(__dirname, "dist")
    },

    // Resolve File Types
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    // Module
    module: {
        // Rules
        rules: [
            // JavaScript Files
            {
                // Target JavaScript files
                test: /\.js$/,
                // Exclude the node modules folder
                exclude: /node_modules/,
                // Compile the JavaScript ES5 code to JavaScript ES2015
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            },
            // TypeScript Files
            {
                // Target TypeScript files
                test: /\.ts$/,
                // Compile the TypeScript code to JavaScript ES5
                loader: "ts-loader"
            }
        ]
    }
}