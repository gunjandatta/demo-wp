var path = require("path");

// WebPack Configuration
module.exports = {
    // Entry Point
    entry: [
        "./node_modules/gd-sprest-bs/dist/gd-sprest-bs.js",
        "./src/index.ts"
    ],

    // Output
    output: {
        filename: "wpDemo.js",
        path: path.resolve(__dirname, "dist")
    },

    // External Libs
    // Since we are including the library as part of the entry point, we don't
    // want webpack to bundle the library twice.
    externals: {
        "gd-sprest": "$REST",
        "gd-sprest-bs": "$REST"
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
                            presets: ["@babel/preset-env"]
                        }
                    },
                    // Compile the TypeScript code to JavaScript ES5
                    { loader: "ts-loader" }
                ]
            }
        ]
    }
}