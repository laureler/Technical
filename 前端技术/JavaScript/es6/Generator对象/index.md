##Generator对象：

二话不说 先上示例表一波敬意：
```ecmascript 6
	function* helloWorld() {
	  yield 'hello';
	  yield 'world';
	  return 'ending'
	}
	var hello = helloWorld();
```
代码定义了一个 Generator函数，内部有两个yield表达式，分别为hello/world、以及return语句
然后Generator函数的调用方法和普通函数一样，也是在函数名后面加上一对圆括号，不同的是，调用Generator韩束之后，