参与了层叠上下文的属性
1. z-index的值不为auto的flex项（父元素display:flex|inline-flex).
2. 元素的opacity值不是1.
3. 元素的transform值不是none 例如:transform(10px,10px)二维旋转
4. 元素mix-blend-mode值normal
5. 元素的filter值不是none
6. 元素的isolation值是isolate
7. position:fiexd声明
8. will-change指定的属性值为上面任意一个
9. 元素的-webkit-overflow-scrolling设置为touch



## 注意：
1. 不支持z-index层叠上下文元素 层叠元素均为z-index:auto