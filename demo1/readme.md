#### webpack4.0
简介：webpack是一个基于node.js的模块打包工具
##### 安装/卸载
初始化目录（创建一个node的包文件）

```bash
npm init  //npm init -y   直接跳过询问
```

全局安装
```bash
cnpm install webpack webpack-cli -g
```
查看是否安装成功

```bash
webpack -v
```

局部安装
```bash
cnpm install webpack webpack-cli --save-dev
```
查看是否安装成功

```bash
npx webpack -v
或者
./node_modules/.bin/webpack
```
安装指定版本的webpack

```bash
cnpm install webpack@4.16.5 webpack-cli --save-dev
```

卸载全局webpack

```bash
npm uninstall webpack webpack-cli -g
```
webpack 4+ 版本，需要安装 CLI
webpack-cli 作用：可以在命令行运行webpack。
建议局部安装webpack，这样的话可以启动不同版本的webpack。

配置脚本

```bash
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack",
    "serve": "webpack"
  },
  "author": "",
  "license": "ISC"
}

```
运行方式
```bash
webpack ./index.js   //全局安装webpack 局部 ./node_modules/.bin/webpack ./index.js
npx webpack ./index.js   //局部安装webpack
npm run dev  ./index.js      //脚本形式(没有配置webpack.config)
```

##### 配置webpack.config.js

```bash
const path = require("path")
module.exports = {
	entry: "./index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	}
}
```
运行

```bash
npx  webpack
```

```bash
npx webpack --config a.js  //以a.js为配置文件运行 npx webpack