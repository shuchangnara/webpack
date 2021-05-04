#### loaders
webpack不能识别非js结尾的文件，loader是一种打包方案，定义不同的文件应该如何打包。
##### 常用loader
**file-loader**
作用：用来处理图片字体等文件
原理：将文件移动到打包后的文件夹（dist）中，并返回文件名称。

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
      },  
    ]
  },
}
```
##### rules的参数
| 属性 |说明  |注意事项
|--|--|--|
| test |匹配规则  | Rule.resource.test 的简写。如果你提供了一个 Rule.test 选项，就不能再提供 Rule.resource。
| use|使用的loader  | 传递字符串（如：use: [ "style-loader" ]）是 loader 属性的简写方式（如：use: [ { loader: "style-loader "} ]）。
| loader |匹配规则  |  Rule.use: [ { loader } ] 的简写。。
| loaders|匹配规则  | Rule.use的别名

##### options的参数
|参数名|参数描述  |使用示例
|--|--|--|
| name | 文件名 |name："[name]_[hash:5]_[path].[ext]"
| publicPath| 公共路径|如果使用cdn时可以使用
| outputPath| 输出目录(默认相对于webpack.config.js)|其实可以在name参数中使用"/image/[name].[ext]"取代替
| context| 文件上下文 |影响上面的path作用不大，默认webpack.config.js
##### plceholder

|参数名|参数描述  |默认值
|--|--|--|
| [ext]| 资源扩展名 |file.extname
|[name]|资源的基本名称| file.basename
|[path]|资源相对于 context的路径| file.dirname
| [hash]| 内容的哈希值 hashType : hash : digestType : length|md5
##### 字体文件的处理

#### url-loader

url loader依赖file-loader  增加limit参数 用来限制图片的打包方式
```bash
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024*5,
          name:'img/[name].[hash:7].[ext]'
        }
      },  
    ]
  },
}
```