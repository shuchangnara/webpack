#### 样式文件的处理
##### css-loader
分析css文件的依赖关系，合并css（支持@import  url()）
##### style-loader
将css插入HTML中

```javascript
   {
      test:/\.scss$/,
           use:["style-loader",{
               loader:"css-loader",
               options: {
                   importLoaders: 2, 
               },
           },"postcss-loader","sass-loader"]//注意顺讯
       }
```
| 名称	 | 默认值 | 描述|
|--|--|--|
| modules |  false|启用/禁用 CSS 模块
| importLoaders| 0|前应用的 loader 的数量（在css-loader之前还要运行多少loader）

##### sass-loader
没什么好说的  处理sass文件
##### less-loader 
 处理sass文件
##### postcss-loader
使用autoprefixer增加厂商前缀`在这里插入代码片`

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
}
```
And create a postcss.config.js with:

```javascript
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}

```
浏览器列表配置一下（ 保证能显示前缀）
```
"browserslist": [
    "iOS >= 6",
    "Android >= 4",
    "IE >= 9"
  ],
  ```
  ##### 配置ES6
  

```javascript
npm install --save-dev babel-loader @babel/core
```

```javascript
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```