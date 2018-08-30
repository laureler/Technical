##background 定位的局限性
1. background 定位只能够相对左上角来定位，不能够相对右下角

例如：
我们可以定位一个图片定位距离左边永远都是50px
但是我们不能够定位一个图片定位距离右边 永远都是50px
解决方法：
	1. 多层标签嵌套
	2. 利用border,我定位图片background-position 100%相对于右边定位的;同时border又不会被计算。
```css
.box {
	border-right:50px solid transparent;
	background-position: 100% 40px;	
}

```