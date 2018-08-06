# 常用概念：



## 声明式渲染：

vue.js的核心在于`模板`语法，可以使用简洁的模板语法声明式的把数据渲染到DOM系统之中。

```vue
<template>
	<div id="app">
	{{message}]
	</div>
</template>
<script>
	var app = new Vue({
		el:"#app",
		data:{
			message:"hello vue"
		}
	})
</script>
```

> 类似于JSP页面的 JSTL语法， ${variable}在这里变换成了 {{variable}} 效果都是相似的。

## 指令
> 指令前缀带有 `v-` 标志，例如 `v-bind`,一旦加上了指令，就代表他们会渲染DOM上应用特殊的响应式行为。

例如:
```html
<div id="demo" v-bind:title="message"> 绑定当前DOM元素的title信息与message保持一致</div>
<script>
	var app2 = new Vue({
	  el: '#demo',
	  data: {
	    message: '页面加载于 ' + new Date().toLocaleString()
	  }
	})
</script>
```
上述代码的含义为： #demo的title属性会跟随 message对象的数据的变化来变化。一旦发现message的对象有变化，即会发生变化。

注意：有的同学可能会误以为， new Date()返回的是当前的时间，而当前的时间是不停的变化的，所以 new Date()也在不停的变化，既然如此，message会不会是在不停地变化呢？既然如此，岂不是v-bind:title会不停地因为new date()变化而变化。

**message: new Date()方法返回的数据只会在调用的时候才调用（也就是new  Vue()的过程)，虽然时间在不停地变化，但是由于获取时间的方法没有被反复调用，所以message属性也不会有变化。**


## v-if 指令控制元素是否可见(是否存在于DOM树)
> 注意：这里所说的元素是否可见，是指dom元素节点是否存在，为了区分元素显示和隐藏的概念，我决定添加后缀(是否存在于DOM树)

用法： 根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 <template> ，将提出它的内容作为条件块。

###  表达式的值为 true/false，如果我传递其他值会有什么问题么？
没有问题，实测true/false是会控制 vue的指令的正确处理，但是JavaScript是一个神奇的语言，会有各种各样的变量混入其中，所以我大致测试了几个变量以供参考。
1.  undefined --> 认为是false
2.  null -->认为是false
3. object/1/"1" 等常见对象 -->认为是true

所以，这个表达式是 符合JavaScript真值表的。也就是说，只要你写的表达式返回的是JavaScript的真值，就认为是true。

---------------------------------------
![已经写了1300百字了，在不插一张图，你们可能已经看不下去了](./images/JavaScript真值表.jpg)
如果看不懂上面的图，可以参照：[MDN中JavaScript被认为是真的值](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)

```html
<div id="app3">
	<span v-if="isSeen">现在你可以看到我了</span>   
</div>
<script>
	var app3 = new Vue({
	  el: '#app3',
	  data: {
	    seen: true
	  }
	})
</script>
```
如果你希望元素消失不见，我们可以 修改seen的属性
```javascript
	app3.seen = false
```

## v-else 指令控制元素是否可见
用法： 前一个兄弟元素必须有v-if v-else-if指令。

--------------------
当 随机数>0.5的时候，就会出现 `你可以看到我` 字样。否则出现`你看不到`字样。
```html
<div v-if="Math.random() > 0.5">
    你可以看到我
</div>
<div v-else>
	你看不到
</div>
```

## v-else-if
用法： 前一个兄弟元素必须有v-if v-else-if指令。

如果等于A则展示A,否则，如果是B，则展示B，否则如果是C。则展示C。否则就 A/B/C.
```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  CIX
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```
类似于下面的逻辑：
```javascript
function demo(type) {
  if(type === "A"){
  	return "A"
  }else if (type == 'B'){
  	return "B"
  }else if(type == "C"){
  	return "C"
  }else {
  	return "NOT A/B/C"
  }
}

```
## v-for
[查看详细](HTMLdemo/指令/v-for/basic.html)
 
预期数据： Array | Object | number | string

用法：基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 `alias in expression`，为当前遍历的元素提供别名：

> alias(别名) expression(表达式)
```html
<div v-for="item in items">
  {{ item.text }}
</div>
```
使用第二个参数，作为键名。
```html
<div v-for="(value, key) in object">
  {{ key }}: {{ value }}
</div>
```
使用第三个参数，作为下标名称。
```html
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>
```
### 注意事项：
JavaScript的语法特性，导致了vue不能够完善的监测所有的数组变化。
例如：
```javascript
	$vm.basicArray[0] = 'newValue'; //直接利用语法特性，为数组引入一个新的值
	$vm.basicArray.length = $vm.basicArray.length - 1; //利用语法特性，删除掉数组的最后一位。
```
为了解决以上的问题，我们可以使用新的语法来实现(也会触发更新操作)：
```javascript
// Vue.set
// Vue.set(vm.items, indexOfItem, newValue)
Vue.set($vm.basicArray,0,'newValue')
// 至于修改长度，直接使用 splice()这个变异方法即可，
```
由此，引出了JavaScript与vue之间的变化的关系。

## v-on 
[查看详细](HTMLdemo/指令/v-on/basic.html)

预期数据： function | inline statement | object

用法：绑定事件监听，事件类型由参数指定。表达式可以使一个方法的名称或一个内联语句。若没有修饰符也可省略。

若监听原生的DOM元素，只能够监听普通的 DOM事件。

此时：方法只能够以事件为唯一参数，若使用了内联语句，可以使用$event属性获取当前事件引用。
```html
	<button v-on:click="console.log(1)">点我打印:1</button>
	
	<!-- 方法处理器 -->
    <button v-on:click="doThis"></button>
    
    <!-- 内联语句 -->
    <button v-on:click="doThat('hello', $event)"></button>
    
    <!-- 缩写 -->
    <!--<button v-on:click="doThis"></button>-->
    <button @click="doThis"></button>
    
    <!-- 停止冒泡 -->
    <!--<button v-on:click.stop="doThis"></button>-->
    <button @click.stop="doThis"></button>
    
    <!-- 阻止默认行为 -->
    <!--<button v-on:click.prevent="doThis"></button>-->
    <button @click.prevent="doThis"></button>
    
    <!-- 阻止默认行为，没有表达式 -->
    <!--<form v-on:submit.prevent></form>-->
    <form @submit.prevent></form>
    
    <!--  串联修饰符 -->
    <button v-on:click.stop.prevent="doThis"></button>
    <button @click.stop.prevent="doThis"></button>
    
    <!-- 键修饰符，键别名 -->
    <input @keyup.enter="onEnter">
    
    <!-- 键修饰符，键代码 -->
    <input @keyup.13="onEnter">
    
    <!-- 点击回调只会触发一次 -->
    <button v-on:click.once="doThis"></button>
    
    <!-- 对象语法 (2.4.0+) -->
    <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```
若监听了自定义元素组件
```html
	<my-component v-on:click="sayHi(123,$event)"></my-component>
```

##  v-bind
缩写： `：`  注意 真的缩写是`：`  
例子：
```html
	<button v-bind:src="data"></button>
	<!-- 缩写 -->
	<button :src="data"></button>
```
预期： any(with argument)  | object(without argument)
用法： 动态的绑定一个或者多个特性，或者一个组件prop到表达式 (你可以理解为单向绑定，从data数据绑定到当前组件。当然前提是你的dat数据要有对应的值)


```html
<!-- 绑定一个属性 -->
<img v-bind:src="imageSrc">

<!-- 缩写 -->
<img :src="imageSrc">

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName">

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 绑定一个有属性的对象 -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- 通过 prop 修饰符绑定 DOM 属性 -->
<div v-bind:text-content.prop="text"></div>

<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
<my-component :prop="someThing"></my-component>

<!-- 通过 $props 将父组件的 props 一起传给子组件 -->
<child-component v-bind="$props"></child-component>

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
```

## v-model
预期： 随表单控件类型的不同而不同。
限制： 
* input
* select
* textarea
* components


## v-pre
预期： 跳过这个元素和它的子元素的编译过程，所以我们可以用来显示原始的  Mustache标签，跳过大量没有指令的节点会加快编译。
用法：
```html
	<span v-pre>{{ this will not be compiled }}</span>
```

## v-cloak
用法：这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

用法：
```vue
<style>
	[v-vloak]{
		display: none;
	}
</style>
<template>
	<div v-cloak>
	{{message}}
	</div>
</template>
```
上述代码中，div message 会被隐藏，一直到编译结束。

## v-once
用法： 当前元素和组件只会被渲染一次。   之后的重新渲染，元素/组件以及所有的子节点都会被视为静态内容，并且跳过。 我们可以利用这个指令来优化更新的性能。

```html
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
<!-- 有子元素 -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- 组件 -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` 指令-->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```
