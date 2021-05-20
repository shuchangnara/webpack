const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
module.exports={
    entry:"./index.js",
    mode:"development",
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        }),
        // new webpack.HotModuleReplacementPlugin({
        //     // Options...
        //   })
    ],
    devtool:'source-map',
    devServer:{
        contentBase:"./dist",
        hot:true,
        hotOnly:true
    },
     module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader",{
                        loader:"css-loader",
                        options: {
                            importLoaders: 2,

                        }
                }]
            },
        ]
    },
}