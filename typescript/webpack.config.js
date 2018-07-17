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
        extensions: [".css", ".js", ".ts"]
    },

    // Module
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
            // TypeScript Files
            {
                // Target TypeScript files
                test: /\.ts$/,
                // Exclude the node modules
                exclude: /node_modules/,
                use: [
                    // Compile JavaScript ES5 to JavaScript ES2015
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"]
                        }
                    },
                    // Compile the TypeScript code to JavaScript ES5
                    { loader: "ts-loader" }
                ]
            }
        ]
    }
}