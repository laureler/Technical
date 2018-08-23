## 什么是margin?
margin 是css中的一个属性，用来为元素设置外边距。

## margin可以改变元素尺寸
margin作为外边距，margin数据占据尺寸

## Q什么是元素尺寸？
1. 可视尺寸-clientWidth（标准）
	可视尺寸表示 元素自身的尺寸
2. 占位尺寸-outerWidth（自己设计的概念）
	占位尺寸表示 元素所站位置（往往代表元素页面所用）的尺寸
	
## margin 的百分比属性
1. 水平方向百分比/垂直方向百分比

2. 普通元素百分比/绝对定位元素百分比

>有意思的是margin的所有属性，都是按照父级元素的宽度来计算的，也就是说即使你设置了margin-top:30%;，它的值也是随着你的父元素的宽度来计算的。

>绝对定位元素的百分比是按照 第一个(祖先元素)符合(relative/absoulte/fixed)的元素来计算

## margin重叠特性
1. block水平元素
2. 不考虑流改变方向的情况下(writing-mode)，margin的重叠只会发生在垂直方向（margin-top/margin-bottom)

## margin重叠三种情况
1. 相邻的兄弟元素
2. 父级第一个/最后一个元素
	1. 父元素非块状格式化上下文元素
	2. 父元素没有border-top设置
	3. 父元素没有padding-top设置
	4. 父元素和第一个子元素之间没有Inline元素分割
3. 空的block元素（自己和自己发生重叠）
	1. 没有border
    2. 没有padding
    3. 没有inline
    4. 没有height、min-height
    
## margin重叠时候的计算规则：
1. 正正最大值
2. 负负最大值
3. 正负计算后得到值

##margin 为负值的情况
粗暴一点来说：
margin-top为负数的时候，margin的偏移会导致元素向上移动，
如果父元素出现了 overflow:hidden，元素会被遮住，然后继续增加margin-top的值，元素就会不停地向上移动，知道超过了自身高度，完全看不到
margin-left/bottom/right同理，都会与margin为正数的时候相反。

## margin失效？
1. inline水平元素的垂直margin失效
    1. 非替换元素：例如不是img
    2. 正常书写模式，例如不是垂直书写模式
2. margin重叠的时候（重叠会有一部分失效）
3. margin可以用于所有的元素，但是display=table相关的除外 。这里所定义的display=table不包括(table-caption,table,inline-table)
    
    

## 题外话 css3 
1. margin-start
2. border-start

3. margin-before(默认流 等于margin-top)/margin-after(默认流方向等同于 margin-bottom)
4. margin-collapse:<collapse默认：重叠>|<discard 取消>|<separate 分隔>