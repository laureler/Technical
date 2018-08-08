# *.yml

## YAML 是专门用来写配置文件的语言，非常简洁和强大，远比 JSON 格式方便(`表示怀疑`)。

> YAML 语言（发音 /ˈjæməl/ ）的设计目标，就是方便人类读写。它实质上是一种通用的数据串行化格式。

## 基本规则：
1. 大小写敏感
2. 使用缩进表示层级关系
3. 缩进时不允许使用Tab键，只允许使用空格。
4. 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可

## 数据结构：

```yaml
#对象 ，键值对的集合，又称映射、哈希、字典
name : jack
man:{name:jack,age:24}

```
转换为JavaScript：
```javascript
var obj0 = {
	name:"jack"
}
var obj = {
	man:{
		name:"jack",
		level:"admin"
	}
}
```
# 数组，一组按次序排列的值，又称为序列、列表

```yaml
- cat
- dog
- fish
```
```javascript
	['cat','dog','fish']
```

## 你可以在数组内部嵌套数组
yaml:
```yaml
\\- 
  -cat
  -dog
  -fish
-2
```
转换为JavaScript：
```javascript
[['cat','dog','fish'],2]
```

# 纯量， 单个的，不可再分的值。
```yaml
	isSet:false
	number:10
	nullValue:~
	# 使用了 `!!`强制转型	
	e: !!str 123
    f: !!str true
```

对应的JavaScript：
```javascript
	var obj0 = {
		isSet:false
	}
	var obj1 = 	{
		number:10
	}
	var obj2 = {
		nullValue:null
	}
	var obj3 = {
		e:'123'
	}
	var obj4 ={
		f:true
	}
```

[更加详细介绍](http://www.ruanyifeng.com/blog/2016/07/yaml.html)
