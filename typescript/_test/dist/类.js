"use strict";
class Greeter {
    constructor(otherName) {
        // 类的属性
        // readonly修身的属性 只能在构造函数constructor中修改，其他地方均不能修改
        this.name = 'world';
        if (otherName = undefined) {
            this.name = otherName;
        }
    }
    err() {
        this.name = 'not ok';
    }
}
const g = new Greeter('hello');
// g.name = 'a'
console.log(g.name);
class A {
    constructor(a = 0) {
        this.a = a;
    }
}
class B extends A {
    constructor() {
        super(); // 必须调用
    }
}
// 类的属性索引签名
class MyClass {
    constructor() {
        this.x = true;
    }
    check(s) {
        return this[s];
    }
}
class C1 {
}
// extends 继承基类
class AA {
    say() {
        return 'hello world';
    }
}
class BB extends AA {
    // 复写基类的方法，类型必须兼容基类
    say(word) {
        return '' + word;
    }
}
class A2 {
    constructor() {
        this.x = 10; // 私有属性 只在本类中可以访问
    }
    sameAs(other) {
        return other.x === this.x;
    }
}
class A21 {
    constructor() {
        this.x = 10;
    }
    sameAs(other) {
        // return other.x === this.x  // error 
    }
}
