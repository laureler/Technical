## javascript 模块化

时至今日再来讲JavaScript模块化似乎有些老生常谈，但是对于新手来说，技术的历史必须要了解，否则就会陷入`为什么这个东西要这样子？`种种类似的怪圈中。

再长篇大论之前，我先来梳理一下JavaScript模块化的一些概念，你可能多多少少有涉猎，但是已经被各种CMD、AMD、common.js、sea.js、es6 module、require、import等等概念绕晕了

|名称|翻译|描述|简介|参考文档
| :---: | :---: | :--- | :--- |:--- |
|CMD     |通用模块定义(common Module Definition)|浏览器端|浏览器端:代表作sea.js|属于浏览器端的规范，目的是为了解决javascript在浏览器端越来越臃肿的情况下，命名相关问题。|
|AMD     |异步模块定义(Asynchromous Module Definition)|浏览器端：代表作：|浏览器端：代表作：require.js|s|
|CommonJS|异步模块化 CommonJS|服务端代表作：node.js|服务端代表作：node.js|s|
|umd     |异步模块化 |服务端代表作：暂无|服务端代表作：暂无|s|
|ES6规范 |异步模块化|服务端代表作：暂无|服务端代表作：暂无|s|







## JavaScript模块化的需求：
>在最早时期的时候，JavaScript只是一门脚本语言，刀耕火种的年代，JavaScript并不能够做太多的事情，用的最多的时候可能是广告横幅的飘来荡去效果吧。
随着电脑性能的进化，浏览器的发展，JavaScript的模块逐渐变得臃肿。

**举例说明**
传统模式下的JavaScript：
```html
<script>
	var M1 = {
		run: function () {
			alert('M1');
			M2.run();
		}
	}
</script>
<script>
	var M2 = {
		run: function () {
			alert('M2');
		}
	}
</script>

<script src="./M2.js"></script>
<script src="./M1.js"></script>
```
正常来讲，你写你的方法，我写我的方法是没有问题的，但是项目变得越来越大，就会出现相同命名的问题
```html
<script>
	// utils文件中定义了一个 log方法
	var log = function () {
			alert('log');
	}
</script>
<script>
	//M1.js中也定义了一个 log方法（自己用，他并不知道utils里面也有这个log方法）
	var log =function () {
		alert('M1');
	}
</script>
<script>
	// 在M2要用log的时候，才发现不知道为何没办法使用utils中的log方法了
	var log =function () {
		log() //???为什么是M1?
	}
</script>
<script>

</script>
<script src="./M1.js"></script>
<script src="./utils.js"></script>
<script src="./M2.js"></script>
```
注意：这里只是以log来说明，实际中可能还会有a方法/b方法各种方法存在冲突，甚至于变量也会命名冲突，导致了变量值不正确，却又找不到原因。
## 命名空间
所以我们引入了`命名空间`的解决方式：
```javascript
var str = "";
var result  = org.compamnay.utils.isString(str);
if(org.compamnay.utils.isArray(str)){
	org.compamnay.utils.changeToString(str)
}
```
## 文件依赖
我先举一个ui组件的例子：
```html
<script  src="jquery.js"></script>
<script  src="bootstrap.js"></script>
<script  src="bootstrap.plugin.panel.js"></script>
<script  src="bootstrap.plugin.page.js"></script>
```
在上面的示例中，bootstrap.plugin.page.js是我们要用的一个ui组件，标签页，但是想要用这个标签页，就得引入额外的三个文件（且按照顺序）
总会有人再问为什么他的bootstrap.plugin.page.js为什么不能用，其实是没有正确的引入项目依赖。
一个Ui组件就已经如此，如果我们的项目越来越复杂，项目的依赖也会变得爆炸，复杂且难以维护。
## [CMD模块定义规范](cmd规范.md)


