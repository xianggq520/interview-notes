"use strict";
function call(fn) {
    console.log(fn.description + 'return ' + fn(6));
}
function df(num) {
    console.log('df' + num);
    return true;
}
df.description = 'description';
call(df);
class Car {
    constructor(name) {
        this.name = name;
    }
}
function provide(ctor) {
    return new ctor('小汽车');
}
let car = provide(Car);
console.log(car.name);
function callFn1(fn) {
    let d = new fn('new obj');
    let e = fn('is ok');
}
function callFn2(fn) {
    let d = new fn('new obj');
    let e = fn('is ok');
}
//泛型函数
function test(name, age) {
    return age;
}
let ret = test('test', '12');
// 泛型函数 泛型约束条件
function test2(name, age) {
    return age;
}
function longest(a, b) {
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longerArray = longest([1, 2], [2, 3, 4]);
const longerString = longest('felix', "Lua");
// 可选参数
function testparam1(n) { return n; }
// function testparam2(n?:number = 10) { return n} //error
function testparam2(n = 10) { return n; }
// void
function fail(msg) {
    throw new Error(msg);
}
// never fail函数永远没有返回值
function fail1(msg) {
    throw new Error(msg);
}
let ret1 = fail('1'); // void
let ret2 = fail1('1'); //never
// 联合类型分支缩小无法达到的分支
function fn(x) {
    if (typeof x === "string") {
        //做一些事
    }
    else if (typeof x === "number") {
        //再做一些事
    }
    else {
        x; // 'never"!
    }
}
// Function
/**
 * 全局性的 Function 类型描述了诸如 bind call apply和其他存在于JavaScript中所有函数值的属性。亡还有一个特殊的属性;
 * 即Function 类型的值总是可以被调用；
 * 这些函数调用返回any;
 */
function doSomething(fn) {
    return fn(1, 2, 3);
}
// 展开运算符
// let args = [8, 5]
// const angle = Math.atan2(...args)// error 因为args的长度不确定，而Math.atan2函数的参数长度只能为2，因此会报错。
let args = [8, 5]; // args为readonly的 无法修改 
// args.push(3) // error
args[0] = 9; // error
const angle = Math.atan2(...args);
// 函数类型
// {(): T} or () => T 
function create(fn) {
    return fn();
}
function create1(fn) {
    return fn();
}
function testF() {
    return 1;
}
let ret11 = create1(testF);
function f() {
    return {
        X: 10,
        у: 3
    };
    // const p: P = 100// error
} // typeof f 获取f的类型：函数类型  ReturnType<T> 
// const p: P = 100// error
