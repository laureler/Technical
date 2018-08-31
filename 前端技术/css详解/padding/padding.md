## padding与尺寸关系复杂

1. block水平元素
```html
<style>
.gay{
	width:40px;
	padding: 20px;
}
</style>
```

## box-sizing:border-box
此时 尺寸不会变，只会在自己内部扣除对应的控件。

```html

```

## padding不会影响元素的尺寸，其实是不严谨的
1. 只要padding的值爆走，就一定会影像尺寸
2. 当width为auto的时候，且padding不暴走，就不会影像尺寸。
3. 水平padding才会影像尺寸，垂直pdding不会影像尺寸（但是会影响背景色）


##padding不支持任何形式的负值
##padding百分比都是相对于宽度计算（类似于margin)

## 利用padding实现正方形(绝对正方形)
```css
div{
	padding: 50%;
}
```

## padding实现三道杠
![padding实现三道杠](../image/padding实现三道杠.png)

## padding实现白眼效果
![padding实现白眼效果](../image/padding实现白眼效果.png)