# 最佳实践原则：
1. 最小影响原则
2. 不犯二原则
3. 组件层级计数器
4. 可访问性隐藏


## 最小影响原则
>目的，避免z-index嵌套关系混乱

1. 元素的层叠水平主要由当前所在的层叠上下文来决定
2. IE7 zindex:auto也会创建层叠上下文
 
 ####解决办法：
 1. 避免使用定位属性
 2. 定位属性从大容器平级分离为私有小容器
 
## 不犯二原则
> 目的：避免zindex混乱，出现一山更比一山高（一浪更比一浪强……)

> 你设置了99的zindex，为了避免被遮盖，但是弹窗才设置了29，所以弹窗……
#### 解决办法：
1. 对于非浮层元素，避免设置z-index值，z-index没有任何道理要超过2（不超过2）

## 组件层级计数器
> 目的： 避免父层组件因为z-index被覆盖的问题

1. 总会遇到意想不到的高层级元素
2. 组建的覆盖规则具有动态性

#### 解决办法：
1. 组件层级计数器
	通过JavaScript获取body下面的子元素的最大的z-index值

## 可访问性隐藏
#### 什么是可访问性隐藏?
 人肉眼看不到，但是辅助设备可以识别，例如tab键/display:none;
 
 z-index负值元素是可以藏在层叠上下文（注意是层叠上下文）的背景上，其他元素之下。

举例说明：我们平时需要自定义按钮，一般使用label-for做关联，此时就需要隐藏原生按钮 
 ```html
<form action="/submit">
<input requyired">
<input type="submit"">
</form>
```
隐藏原生按钮位于label之下，完美的解决了问题，（当然你也可以使用display:none;)这里只是展示示例用。
```html
<style>
[type=submit]{
	position: absolute;
	z-index: -1;
}
</style>
<form action="/submit">
	<input type="text" required>
	<input type="submit" id="submit">
	<label for="submit">提交按钮</label>
</form>
```
 