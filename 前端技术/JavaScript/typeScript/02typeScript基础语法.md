# TypeScript语法

> let关键字是JavaScript里面在es6版本定义的规范，如果你不理解，你可以把他当成var(与var关键字作用相同)。

这里有一段JavaScript代码，可以看出ts是完全兼容JavaScript的语法(ts是JavaScript的超集)
```typescript
	function greeter(person) {
        return "Hello, " + person;
    }
    
    let user = "Jane User";
    
    document.body.innerHTML = greeter(user);
```

## 基础类型
//boolean
```typescript
	let isDone:boolean = false;
	let isDone2:boolean = true;	
```
// number
```typescript
	let decLiteral:number = 6;          //decLiteral   十进制
	let binaryLiteral:number = 0b1010;  //binaryLiteral二进制
	let octalLiteral:number = 0o744;    //octalLiteral 八进制
	let hexLiteral:number = 6;          //hexLiteral  十六进制
```

// string
```typescript
	let name:string = "hello";
	name = "lucas";
	// string template 字符串模板(es6)语法
	let name:string  = `your name`;
	let age:number = 22;
	
	// 一下两种方式效果是相同的，但是明显后者更简单。
	let sentence: string = "Hello, my name is " + name + ".\n\n" +
        "I'll be " + (age + 1) + " years old next month.";
	let simpleSentence = `Hello, my name is ${ name }.
                         
                         I'll be ${ age + 1 } years old next month.`;
	
```

// array