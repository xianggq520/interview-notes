type Animal = {
  categery: string
}

let ani: Animal = {
  categery: '哺乳'
}

type Dog = Animal & {
  color: string
}

let dog: Dog = {
  categery: 'dog',
  color: 'white'
}


interface Person {
  name: string
}

interface Person {
  age: number
}

interface Student extends Person {
  grade: number
}

let student : Student = {
  name: '小红',
  age: 12,
  grade: 6
}


// 索引签名
interface MyArr {
  [index: number]: string
}

let myarr: MyArr = ['1', '2']
// 同时具有number、string类型的属性
interface MyArr2 {
  [index: string]: string | number,
  age: number
}

// 只读属性
interface Face {
  readonly color: string
}

// 类型扩展
interface Man extends Face {
  shape: string
}

// 交叉类型
interface Pig {
  maoColor: string
}

type PigWithFace = Face & Pig

let pf : PigWithFace = {
  maoColor: 'white',
  color: 'red'
}

// type 和 interface如何选择
// 预防冲突和避免类型自动合并造成的副作用，推荐使用type，当需要一个类型多处可以扩展时，推荐interface
// interface 会自动合并重名接口的类型，type重名则会报错
interface AA {
  name: string
}
interface AA {
  age: number
}

let a: AA = {
  name: 'aa',
  age: 12
}

// 泛型对象类型
interface Box<T> {
  content: T
}

type Box1<Type> = {
  contents: Type
}
type OrNull<Type> = Type | null
type OneOrMany<Туре> = Туре | Туре[ ]
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
type OneOrManyorNullString = OneOrManyOrNull<string>

