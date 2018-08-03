# git 冲突


## 为何会发生冲突？
>git中，代码是通过行来控制版本的，而非字节。
 
	当我们多人写作使用版本控制系统的时候，往往会遇到多人写作编辑同一个文件的场景。
	例如：
```java
	public class Demo{
		public static void main(String[] args){
		    System.out.println("hello");
		}
	}
```

// 同学a
```java
	public class Demo{
		public static void main(String[] args){
		    System.out.println("hi");
		}
	}
```

// 同学b
```java
	public class Demo{
		public static void main(String[] args){
		    System.out.println("你好");
		}
	}
```

上述的同学a和b分别都`恰巧修改`了同一行代码 `System.out.println("****");`。

此时作为版本控制系统，git系统的设计认为 两位开发者的提交都至关重要，对于这种结果的判断，就需要两个人一起来解决不同的设置。

## 解决冲突方法：
首先，解决冲突首先我们要知道冲突的概念：
> 冲突是两位开发者同时修改相同的代码，导致了版本控制系统无法明确到底应该适用谁的修改。

