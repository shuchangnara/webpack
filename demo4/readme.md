

#### 插件
插件就是在webpack的指定时间去做只能定的操作，类似于生命周期
##### html-webpck-plugin（生成html文件，自动引入js）

[html-webpck-plugin文档](https://github.com/jantimon/html-webpack-plugin#configuration)

通常使用的参数 template

```javascript
plugins:[
    new HtmlWebpackPlugin({
      template:"./src/index.html"
    })
  ]
```
常用配置
|属性| 说明 |默认值/type|
|--|--|--|
|  template| 使用的模板 | webpack模板的相对或绝对路径。默认情况下，它将使用（src/index.ejs如果存在）|
|  inject	| 标签插入位置 | true ， 'head' ，'body' ，false， 'head'会将脚本放置在head元素中。|
|  minify| 是否压缩 | 根据打包模式|
|  hash| 是否添加hash|如果是，true则将唯一的webpack编译哈希值附加到所有包含的脚本和CSS文件中。这对于清除缓存很有用


##### clean-webpack-plugin
[clean-webpack-plugin文档](https://github.com/johnagan/clean-webpack-plugin)

#### Entry Output
配置多入口

```javascript
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: path:path.resolve(__dirname,"dist")
  }
}
```
配置cdn

```javascript
output: {
  publicPath: "http://cdn.example.com"
}
```