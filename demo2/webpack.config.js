const path =  require("path")
module.exports = {
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname,"dist"),//需要绝对路径
        filename: "index.js",
        clean:true,
        assetModuleFilename:"img/[name][ext]"
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.jpeg$/,
                // use:{
                //     loader:"url-loader",
                //     options:{
                //         name:"[name]_[hash:3].[ext]",
                //         outputPath:"./images",
                //         limit:1024*2
                //         // publicPath:"www.baidu.com"
                //         // context:'src'//只会影响[path]的路径
                //         //name:"[name]_[hash:3]_[path].[ext]",
                //     },
                // },
                type:"asset",
                parser:{
                    dataUrlCondition:{
                        maxSize:20*1024
                    }
                },
                generator:{
                    filename:'static/[name][hash:3][ext]'
                }

            }
        ]
    }
}