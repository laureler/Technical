## 使用环境：
注意：
**vue不支持ie8以上（version>ie8)的版本，但是vue支持所有兼容ECMAscript5的浏览器**

使用方法：
1. script标签 引入vue.js:

	```html
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	```
	```html
		<!-- 生产环境版本，优化了尺寸和速度 -->
		<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	```
2. 使用npm构建:

	在大型应用中，推荐使用NPM安装，NPM能够很好的配合webpack或者browserify打包器配合使用，同时也提供了配套的工具来支持单文件组件。
3. 使用vue-cli命令行工具:

	[vue-cli](https://cli.vuejs.org/)是vue提供的官方cli,用于创建单页面应用快速搭建SPA繁杂的脚手架。
	