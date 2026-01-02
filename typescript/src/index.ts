/**
 * 基本类型
 * 
 * number, string, boolean, symbol, BigInt
 */
const a:string = '12b'


/**
 * undefined, null
 * 任何类型的子类型，
 */
const dd:string|null = null // 严格模式会报错


// void 函数无返回值

function tet(): void {}

// never
function ttt(): never {
  throw new Error()
  // while(true) {}
}

const nv:string|number|never = 'abc'

/**
 * 引用类型
 */

const arr:Array<string | number> = [1, 2, 'a']
const arr2: (string|number)[] = [1, 2, 'a']

const str1:String = "abc"
const str2:String = new String("abc")
// const str3:string = new String("abc")

// tuple
const abc:[string, number, string] = ['abc', 4, "def"]

// 枚举类型 enum
// 常量枚举 const enum
enum Tool {
  bans,
  qianzi
}

const tool:Tool = Tool.bans

console.log(tool)

const enum Animal {
  dog,
  horse,
  mouse
}

const mj:Animal = Animal.dog

console.log(mj)


// 断言
// 非空断言 expr!

const el = document.getElementById("app")
el!.style.background = 'red';

// el?.style.display js 可选链读值操作
// el??"abc"  js 控制合并操作符 null和undefined时返回 abc

//  断言 as
(el as HTMLElement).style.background = 'red';
(<HTMLElement>el).style.background = 'red'; // 不推荐


// this

const person = {
  name: "zs",
  age: 43
}
type IThis = typeof person
function getVal(this: IThis, key: keyof IThis) {
  return this[key]
}

getVal.call(person, "age")

// 重载
function toArray(value: number): number[];
function toArray(value: string): string[];
function toArray(value: number| string): number[]|string[] {
  if (typeof value === "string") {
    return value.split("");
  } else {
    return value.toString().split("").map(Number)
  }
}
// 缩小联合类型范围
const result = toArray('123')
const result2 = toArray(123)


// class
class Person { 
  // static 
  static family: string = "zs"
  static getFamily() {return this.family}
  // constructor
  constructor(public name: string, protected age: number, private sex: string, readonly parent: string) {}
  // getter 、 setter
  get _sex() { return this.sex}
  set _sex(val: string) {
    this.sex = val
  }
  // prototype fns
  print(name: string): void {
  }
}

class Zs extends Person {
  static getFamily() {return super.getFamily()} // super.getFamily() 调用 Person 类的静态方法

  // override parent fn.  parent fn 的返回值必须是 void 的才能 override 成不同的返回类型
  print(name: string): string {
    super.print("abc") // 这里的 super.print 指的是 Person 原型方法
    return "abc"
  }
}