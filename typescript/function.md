# function

函数类型

## 函数表达式

```ts
let a: () => void = () => {};
```

## 函数调用签名

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean; // 此处是 `:` 而不是 `=>`
};

function call(fn: DescribableFunction) {
  console.log(fn.description + 'return ' + fn(6));
}

function df(num: number) {
  console.log('df' + num);
  return true;
}

df.description = 'description';

call(df);
```

## 构造函数签名

```ts
// 构造函数签名
type DescribableFunction = {
  description: string;
  (someArg: number): boolean; // 此处是 `:` 而不是 `=>`
};

function call(fn: DescribableFunction) {
  console.log(fn.description + 'return ' + fn(6));
}

function df(num: number) {
  console.log('df' + num);
  return true;
}

df.description = 'description';

call(df);

class Car {
  name: string;
  constructor(name) {
    this.name = name;
  }
}

// 构造函数签名
type Ctor = {
  new (name: string): Car;
};

function provide(ctor: Ctor) {
  return new ctor('小汽车');
}

let car = provide(Car);
console.log(car.name);

// 构造函数签名和调用签名混合
//1
type CtorOrCall = {
  new (name: string): Car;

  (s: string): string;
};

//2
interface CallOrConstructor {
  new (name: string);
  (name: string): boolean;
}

function callFn1(fn: CtorOrCall) {
  let d = new fn('new obj');
  let e = fn('is ok');
}

function callFn2(fn: CallOrConstructor) {
  let d = new fn('new obj');
  let e = fn('is ok');
}
```

# 泛型函数

```ts
//泛型函数
function test<A,B>(name: A, age: B): B {
  return age
}
let ret = test('test', '12')
```

# 泛型约束条件

`extends`

```ts
//泛型函数
function test<A extends {length: number},B>(name: A, age: B): B {
  return age
}
let ret = test('test', '12')
```

# 泛型函数设计的3个准则

- 尽可能使用更少的泛型参数
- 如果泛型参数只约束一个地方，那么可以不引入这个泛型参数
- 尽可能的直接使用泛型参数，而不是去约束它，比如 `A extends {length: number}`

# 可选参数

**不推荐在回调函数中设置可选参数**

```ts
 // 可选参数
function testparam1(n?:number) { return n}
// function testparam2(n?:number = 10) { return n} //error
function testparam2(n:number = 10) { return n}

```

