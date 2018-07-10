# typeScript： JavaScript的超集


## typeScript 使用场景

typeScript简写为ts

 JavaScript属于动态语言，随心所欲的变量类型导致了很多时候，你看到一个变量无法判断具体的类型。区别于java这种强类型语言，在变量声明之初就已
 经确定了类型
 
 例如：
 ```java
 public class Demo{
	int i = 0;
    long l = 1000L;  //最大值 9,223,372,036,854,775,807 （2^63-1）
 } 
 ```
 而JavaScript弱类型语言就变得随心所欲
 ```javascript
	var i = 0;
	// some code ……………………
	// some code ……………………
	// some code ……………………
	// some code ……………………
	i = function() {
	  console.log(23333)
	}
	// 在纷繁复杂的工程化应用里面，动态语言的世界里面是非常可怕的。 
	// 在你不知道的情况下，i变量的类型已经变化了
	console.log(i) 	
``` 
再看一下Java如何实现上述的JavaScript代码片段
```java
 public class Demo{
	int i = 0;
	Object o = null;
	public void someMethod(){
		System.out.println("somecode");
	}
	public void someMethod(){
		System.out.println("somecode");
		o = i;
		//i = someMethod  error:很显然 静态语言不支持这样操作
	}
 } 
 ```
 java 的声明明显优于JavaScript，在变量声明上变得非常的明晰，为了解决在JavaScript代码量复杂情况下出现的问题，Microsoft（微软）设计了一个
 强类型语言typescript
 
 ## 安装TypeScript
如果你的电脑从来没有运行过TypeScript你可能需要安装一下TypeScript工具
 1.  npm 用户： npm install -g typescript
 2.  Visual Studio 2017和Visual Studio 2015 Update 3 已经内置了TypeScript工具，你可以选择使用 vs 系列
 3.  jetBrains公司出品产品webstorm（2017版本之后）也内置了TypeScript工具集，你也可以选择使用。
 4.  或者你可以使用自己的IDE搜索对应的TypeScript 插件来安装使用。
 
> 为什么要安装TypeScript?

TypeScript是一门语言（JavaScript的超集,已经提过了)，但是TypeScript语言的语法并不被浏览器直接承认，而且其设计理念也需要添加编译的过程。
所以我们安装的TypeScript其实是TypeScript的编译器（把typeScript编译为JavaScript代码去执行）

> 为什么要增加编译过程?

正如上文所说,设计TypeScript的目的是为了避免弱类型对于开发人员的不友好（对于编译器其实是无所谓的）
从原来的 JavaScript直接执行
到现在的 编码->编译->执行
```uml
	code ->  compile -> run
```
多出来的这一步 编译有两个作用：

1. 语法转换，把ts语法转换为JavaScript语法（ts语法对于开发人员更友好，可以明确查看对象类型）
2. 代码类型检查，不符合规范的代码可以在编译期就检测出来（甚至于IDE就会提示你错误），避免了代码运行出错。
