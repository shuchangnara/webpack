const path =  require("path")
module.exports = {
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname,"bundle.js"),//需要绝对路径
        filename: "index.js" 
    },
    mode:"development"


}