## 对象改变注意事项。

> 代码不会无缘无故的 在DOM上做出自动的操作帮助你响应数据的变化，所有的变化看似自动，其实都是我们的代码做出的功劳。

vue.js的特色之一，数据驱动的概念。

![数据驱动](./images/数据驱动.png)

上图可见，
数据在Component Render Function 的时候，会创建一个虚拟的DOM树，并且会添加一个data的监听（getter/setter)
此时，就会有一个watcher存在于我们的环境中，当数据被修改的时候，就会触发(notify)监听，导致监听被执行，从而修改DOM。

简单点来说，就是创建了一个监听器，一旦对应的数据发生变化，就会触发监听器去改变页面数据，这就是数据驱动。

> 不了解设计模式的 监听模式 的同学，可以[点击这里](./../../../设计模式/设计模式简介.md)。

## JavaScript引擎的特性，总会有一些瑕疵。

> JavaScript引擎在于浏览器厂商不同的处理，不同的浏览器对于JavaScript的处理也不大一致。所以有几点要注意的地方。

受现代 JavaScript 的限制 (以及废弃 Object.observe)，Vue 不能检测到对象属性的添加或删除。
由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，
所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。例如：

```javascript
var vm = new Vue({
	data:{
		age:18
	}
})
// age = 20; age是响应的，因为在new Vue的时候，已经存在了age属性，vue会为age绑定一个监听器
// vm.name = 'ming'  name并非响应式，因为在 new Vue的时候，不存在的。
```

## 如果我不能够一开始就准备好数据，我该如何在动态的创建响应式的数据？

上面vue规定了，不可以添加响应式数据，因为没有添加监听器。但事实往往是我们需要在new Vue之后，然后才知道了数据（例如，ajax之后才知道了数据是什么，甚至于数据结构）。

**答案是：可以，我们可以添加响应式数据**

索性，vue支持这么做，只不过方法不太一样。

注意：**vue不支持在已经创建的实例上(var vm = new Vue)添加新的根级别响应式数据**

vue可以使用 `Vue.set(object,key,value)`属性来添加新的`响应式`属性。

```javascript
var vm = new Vue({
	data:{
		age:18,
		basicObject:{
			
		}
	}
})

// dosomethings 例如ajax之后获取到了异步数据

Vue.set(vm.basicObject,"name","ming")
```
