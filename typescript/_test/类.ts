class Greeter {
  // 类的属性
  // readonly修身的属性 只能在构造函数constructor中修改，其他地方均不能修改
  readonly name: string = 'world'
  constructor(otherName?: string) {
    if (otherName = undefined) {
      this.name = otherName
    }
  }
  err() {
    this.name = 'not ok'
  }
}
const g = new Greeter('hello')
// g.name = 'a'
console.log(g.name)


class A {
  a: number

  constructor(a: number = 0) {
    this.a = a
  }
}

class B extends A {
  constructor() {
    super() // 必须调用
  }
}


// 类的属性索引签名
class MyClass {
  // 属性索引签名
  [prop: string]: boolean | ((s: string) => boolean)

  x = true

  check(s: string) {
    return this[s] as boolean
  }
}


// implements 实现接口
interface A1 {}
interface B1 {}
class C1 implements A1, B1 {}


// extends 继承基类
class AA {
  say() {
    return 'hello world'
  }
}
class BB extends AA {
  // 复写基类的方法，类型必须兼容基类
  say(word?: string) {
    return '' + word
  }
}



class A2 {
  private x =10 // 私有属性 只在本类中可以访问
  public sameAs(other: A2) {
    return other.x === this.x
  }
}

class A21 {
  private x =10
  public sameAs(other: A2) {
    // return other.x === this.x  // error 
  }
}
