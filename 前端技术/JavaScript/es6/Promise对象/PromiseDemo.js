// 初次调用promise就会创建一个promise对象
var promise1 = new Promise(function () {
	console.log("1")
});
console.log('初次创建Promise时，promise默认为pending')
console.log(promise1)  //Promise { <pending> }

// promise 回调函数会传递resolve reject两个参数，由JavaScript引擎提供。
var promise = new Promise(function (resolve,reject) {
	//resolve pendding ->resolved
	if()
	console.log("1")
	// reject pending ->reject
	console.log("1")
});
console.log('初次创建Promise时，promise默认为pending')
console.log(promise1)  //Promise { <pending> }