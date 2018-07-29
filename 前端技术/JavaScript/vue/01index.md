# vue.js
vue.js 是一套开发web页面的JavaScript脚本框架， 
特点是**上手难度最简单**。

## 官方网站： https://cn.vuejs.org/

## 相似产品：

1. angularJS
2. ReactJS
3. EmberJS
4. Knockout

## 技术前提：
1. 基础的HTML/css技术
2. JavaScript中级或中级以上水平
3. Node.js

> 注意：如果你是JavaScript菜鸟，对于回调函数/原型等方法都不是很了解，建议你先学好基础知识再来，但是这些基础知识并非必须的。


## 前端开发常见术语

1. 完整版： 同时包含编译器和运行时的版本
2. 编译器： 将模板字符串便已完成JavaScript渲染函数的代码
3. 运行时: 用来创建vue实例，渲染并处理虚拟dom等的代码，基本上就是除掉编译器的其他一切。
4. CommonJS commonJS版本用来配合老一点的打包工具
5. esModule: esModule版本用来配合现代打包工具例如webpack
6. 开发环境： 开发环境下使用未压缩的代码，
7. 生产环境： 生产环境下使用压缩后的代码。代码量更小。
 > 注意：一般来说，process.env.NODE_ENV变量来检测不同的版本，生产环境往往会使用production、prod、pro等，生产环境则为：devlopment、dev等。