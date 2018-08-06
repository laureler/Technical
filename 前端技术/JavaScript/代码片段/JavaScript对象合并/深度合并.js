/**
 * 注意： 此方法为合并对象，而非组合对象，合并(merge) 意思为吞并，融合的意思。
 *  mergeDeep(objectA ,objectB)
 *  // objectA 将会合并objectB的属性到自身，
 *  // 本方法也会返回 合并之后的属性。
 */


/**
 * 标准对象检查
 * @param item
 * @returns {boolean}
 */
function isObject (item) {
	return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * 深度合并两个对象
 * tips: 使用方法
 *      var js1 = {name:undefined};
 *      var js2 = {name:'test'};
 *      mergeDeep(js1,js2) => return {name:'test'}
 *      //返回的是被合并的js1 所以要注意参数的传递顺序
 *
 *
 * @param target        目标对象（此对象的属性将会被新的修改对象来修改，修改之后再返回)
 * @param ...sources    新的修改对象
 * @return merged object    合并结束的对象（对象拥有两个传入对象的所有属性)
 */
function mergeDeep (target, ...sources) {
// export function mergeDeep (target, ...sources) {   //es6语法
	if (!sources.length) return target;
	const source = sources.shift();
	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) {
					Object.assign(target, {
						[key]: {} });
				}
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, {
					[key]: source[key] });
			}
		}
	}
	return mergeDeep(target, ...sources);
}

var innerObject = {
	test:"1111"
}
var innerObject2 = {
	test:"222"
}

var objectA=  {
	name:"小明",
	age:14,
	innerObject
}
var objectB = {
	name:"小明",
	school:"初中",
	innerObject2
}

// 期望获取的结果为：
var objectMerged = mergeDeep(objectA,objectB)
console.log("=========================")
console.log("objectMerged",objectMerged)   //   =>>
/*
{
	name: '小明',
	age: 14,
	innerObject: { test: '1111' },
	school: '初中',
	innerObject2: { test: '222' }
}
*/
console.log("=========================")
console.log("objectA",objectA)   //   =>>
/*
{
	name: '小明',
	age: 14,
	innerObject: { test: '1111' },
	school: '初中',
	innerObject2: { test: '222' }
}
*/
console.log("=========================")
console.log("objectB",objectB)  //   =>> { name: '小明', school: '初中', innerObject2: { test: '222' } }