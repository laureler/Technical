## border-width不支持百分比

#### 为什么border-width不支持百分比？
> 为什么/width/padding/margin都支持，但是border-width不支持呢？

语义和使用场景决定了他不支持
border:所谓的边框，其实边框是没有`随着内部容器的变大而变大`的属性的

## brorder-width支持关键字：
1. thin  1px
2. medium(默认值) 3px
3. thick 5px

## 为什么默认值medium要用3px
因为 border-style:double至少3px才有效果

## border-style的类型
1. solid 实线
2. dashed 虚线
	1. 虚线的比例
	2. chrome/firefox:1:1
	3. ie:2:1
3. botted 点状线
	1. 点线的状态
	2. IE为圆点||chrome/firefox为方点
	3. 利用css botted实线 IE7/IE8 圆角效果
	```css
	.box{
		width: 150px;
		height: 150px;
		overflow: hidden;
	}
	.dotted{
		width: 100%;
		height: 100%;
		border: 149px dotted #cd0000;
	}
	```
4. double 双线
	1. 计算规则： 双线宽度永远相同，中间线条正负1调整
	1. 1px:0+1+0
	2. 2px:1+0+1
	3. 3px:1+1+1
	4. 4px:1+2+1
	5. 5px:2+1+2
5. inset 内凹，大眼瞪小眼
6. outset 外凹，大眼瞪小眼
7. groove 沟槽，
8. ride 山脊

## border-color
> border-color默认颜色就是color
 outline、box-shadow、text-shadow也都是跟随color的颜色的


