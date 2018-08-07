# TypeScript数据类型。

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

#### boolean
```typescript
	let isDone:boolean = false;
	let isDone2:boolean = true;	
```

#### number
```typescript
	let decLiteral:number = 6;          //decLiteral   十进制
	let binaryLiteral:number = 0b1010;  //binaryLiteral二进制
	let octalLiteral:number = 0o744;    //octalLiteral 八进制
	let hexLiteral:number = 6;          //hexLiteral  十六进制
```

#### string
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

#### array
```typescript
	let list:number[] = [1,2,3];    //使用类型定义
	let list:Array<number> =[1,2,3]  //使用数组泛型 Array<元素类型>
```

#### tuple 元组
	元祖类型允许表示一个 `已知元素数量和类型` 的数组，
	注意：哥哥元素的类型不必相同。
> 总的来说，元祖就是一个数据集合，可以存储不同类型元素

声明的时候，不符合规范会出现问题。
```typescript
// Declare a typle type
let x:[string,number];  //声明一个支持string,number的数据结构
x =['hello',10];  //符合条件
x =[10,'hello'];  //不符合条件
```

不仅仅在声明的时候，使用的时候，如果不符合语法规范，也会出现问题。
```typescript
let x:[string,number];  //声明一个支持string,number的数据结构
x =['hello',10];  //符合条件
console.log(x[0].substr(1))
console.log(x[1].substr(1))   // error 'number' dose not have 'substr'
```
特殊情况下，访问了越界的元素，会使用联合类型类代替。
```typescript
let x:[string,number];  //声明一个支持string,number的数据结构
x =['hello',10];  //符合条件
console.log(x[5].toString())   // string | number  都有tostring类型。
console.log(x[6].substr(1))   // error 因为number没有substr
console.log(x[6] == trure)   // error 因为number | string 都不是Boolean类型。
```

#### 枚举类型

enum类型是对于JavaScript标准类型的一种补充， 枚举类型可以为一组数值赋予友好的名字。
```typescript
enum Color {Red =1, Green = 2, Blue = 3}
let colorName:string = Color[2]
console.log(colorName)  // 2 因为Color[2]的值为2.
let c: Color = Color.Green;
```

#### any类型
在编程阶段，我们还不清楚类型的变量指定一个类型，这些值可能来自与动态内容，也可能来自于用户输入或者第三方库。

any类型可以在编译阶段跳过类型检查。

```typescript
	let notSure:any = 4
	notSure = "maybe string value"  
	notSure = false  
```
// 很多时候，数组也是有用的。
```typescript
	let list:any[] = [1,true,"free"] //我们可以声明一个 多类型的数组。
	
```
#### void
某种类型上来说，void与any类型相反，他表示没有任何类型，不同于null/undefined。 void表示没有任何类型。
> 当一个函数没有返回值的时候，你通常会见到返回类型是void。

```typescript
function hello():void {
  console.log("this function do not return anything")
}
// 声明一个void的方法，没什么特别大的作用，因为你只能够赋予 null / undefined
let useless:void = undefined
let useless:void = null
```

#### null undefined
typeScript中，null，undefined分别代表不同的类型
```typescript

let a:undefined = undefined;
let a:undefined = null;

let b:null = null
let b:null = undefined
```

// 如果你制定了 --strictNullChecks. 那么 null/undefined只能够赋值给void和他们自己的类型。


#### never
// todo 

#### 类型断言
有的时候，我们会遇到这种情况，你会比typescript更了解某一个值的详细信息，通常，这会发生在类型转换的过程中。
```typescript
let someValue:any = "im not sure what it is"
let numberValue:number = (<string>someValue).length;  //把someValue的类型转型为string并使用。
let numberValue:number = (someValue as string).length;  //把someValue的类型转型为string并使用。
// as语法与上面的完全相同，只有在你使用typeScript的JSX时候，此时，只有as语法生效。
// 所以建议你使用 as语法 毕竟通用嘛
```






