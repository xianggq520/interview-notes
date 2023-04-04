# type 类型别名

语法

```ts
type animal = {
  name: string;
};

let ani: animal = {
  name: '大象'
};
```

扩展已有的 type 类型

```ts
type Dog = Animal & {
  color: string;
};

let dog: Dog = {
  categery: 'dog',
  color: 'white'
};
```

# interface 接口

语法

```ts
interface Person {
  name: string;
}

// 重名扩展
interface Person {
  age: number;
}

// extends继承
interface Student extends Person {
  grade: number;
}

let student: Student = {
  name: '小红',
  age: 12,
  grade: 6
};
```

# 类型断言

先断言为更宽泛的类型，有重叠的部分才能断言

`as / <> / !`

```ts
const x = 'hello' as number; // error
const y = 'hello' as any as number; // yes
const y1 = 'hello' as unknown as number; // yes
const z = <number>'hello'; // error
const w = <number>(<any>'hello'); // yes

let aa = undefined; // aa的类型为undefined

let bb = null; // bb的类型为null

// 非null和undefined 断言

function toup(str: string | null) {
  console.log(str!.toUpperCase()); // !断言str为非null和undefined  容易有问题
  // 推荐使用 ?
  console.log(str?.toUpperCase());
}
```

# 字面量类型

```ts
const t = 'hello'; // t的类型为 字面量类型 'hello'，不能修改，更不能修改成其他字符串值

let a: 'hello' = 'hello';
// a = 'wold' // error
a = 'hello'; // yes
```

[字面量类型](_test/字面量类型.ts)

# 类型缩小

- typeof
- 真值缩小 if(a) {}
- ==、！=、===、!==
- in 操作符
- instanceof

# 控制流分析

根据不同的代码分支，分析变量的类型

# 类型谓词

语法`variable is type`

主要用来断言函数参数的类型？

```ts
interface Fish {
  swim: () => void
}
interface Bird {}

// 约束返回值类型
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let fish: Fish = { 
  swim() {}
}
let bird: Bird = {} 
let animal = Math.random() > 0.5 ? fish : bird
if(isFish(animal)) { 
  // 因为判断条件一定为trusy
  // 所以animal在这里一定是fish
  console.log(animal.swim)
}

```

# never 类型

用于代码穷尽性检查

**任何类型的值都不可以赋值给 never 类型的变量**

```ts
interface Circle {
  radius: number;
}
interface Square {
  sideLength: number;
}
interface Triangle {
  sideLength: number;
}

// type Shape = Circle | Square | Triangle
type Shape = Circle | Square;
function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      // 任何类型的值都不可以赋值给never类型的变量
      // 所以这里当shape的类型被扩展以后(添加Triangle)，便会报错，因为shape的类型没有穷举
      // 起到提示代码需要完善的作用
      const exhaustiveCheck: nover = shape;
      return exhaustiveCheck;
  }
}
```
