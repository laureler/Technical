## 什么是CMD (common Module Definition) (通用的模块定义)？
CMD模块定义规范明确的定义了模块的书写格式和基本交互规则
在CMD规范中，一个模块就是一个文件，代码的书写格式如下：

1. cmd中一个模块就是一个文件，代码的书写格式如下：
```ecmascript 6
	define(factory)
```

### define Function
define 是一个全局函数(方法)，用来定义模块
### define define(factory)
* define 接受factory参数，
* factory可以是一个函数，也可以是一个对象或者字符串
* factory 为对象、字符串时，表示模块的接口就是该对象、字符串。例如：
```ecmascript 6
define({
"foo":"bar"
})
```

### 




```javascript
var str = ""
```