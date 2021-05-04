const path =  require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname,"dist"),//需要绝对路径
        filename: "index.js" 
    },
    mode:"production",
    module:{
        rules:[
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                   'file-loader'
                 ]
               },
            {
                test:/\.jpeg$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name:"[name]_[hash:3].[ext]",
                        outputPath:"./images",
                        limit:1024*2
                        // publicPath:"www.baidu.com"
                        // context:'src'//只会影响[path]的路径
                        //name:"[name]_[hash:3]_[path].[ext]",

                    }
                }
            },
            {
                test:/\.css$/,
                use:["style-loader",{
                        loader:"css-loader",
                        options: {
                            importLoaders: 2,

                        }
                },
                    "postcss-loader"]
            },
            {
                test:/\.scss$/,
                use:["style-loader",{
                    loader:"css-loader",
                    options: {
                        importLoaders: 2, 
                    },
                },"postcss-loader","sass-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html",
            hash:true,
            inject:"body",
            minify:false
        }),new CleanWebpackPlugin()
    ]
}