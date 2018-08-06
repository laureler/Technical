JavaScript对象合并：
开发中我们可能会遇到这样的问题，例如：
```javascript
 var objectA=  {
	name:"小明",
	age:14
 }
 var objectB = {
	name:"小明",
	school:"初中"
 }

// 期望获取的结果为：
var objectMerged = {
	name:"小明",
	age:14,
	school:"初中"
}
```

但是我们往往会遇到这样的问题，例如:
1. objectA使我们浏览器运行的一个对象，而objectB是我们 ajax异步 访问的服务器获取的对象。
2. 甚至于我们不知道objectB的数据结构，只知道他们又相同的字段。
3. 我们要把objectB合并进入objectA中。

[对象深度合并.js](./深度合并.js)