const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports={
    entry:"./index.js",
    mode:"development",
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                "presets": [
                  [
                    "@babel/preset-env",
                    // {
                    //   "useBuiltIns": "usage",
                    //   corejs:{
                    //     version:3
                    // },
                    //}
                  ]
                ]
              }
            }
          }
        ]
      },
    devServer:{
        contentBase:"./dist"
    }
}