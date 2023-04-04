interface Animal1 {
  live: void
}
interface Dog1 extends Animal1 {
  woof: void
}
// type Example1 = number 自动推断
type Example1 = Dog1 extends Animal1 ? number : string


interface IdLabel {
  id: string
}
interface NameLabel {
  name: string
}

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw ''
}
// type a = NameLabel
let a1 = createLabel('typescript')
// type b = IdLabe
let b = createLabel(2.8)


// 条件类型约束
type MessageOf1<T extends { message: unknown }> = T['message'] // 呆板
type MessageOf2<T> = T extends { message: unknown } ? T['message'] : never // 灵活
interface Email {
  message: string
}
interface Doger {
  bark: void
}
// type EmailMessageContents1/2 - string
type EmailMessageContents1 = MessageOf1<Email>
type EmailMessageContents2 = MessageOf2<Email>

// type EmailMessageContents3 - never
// type EmailMessageContents3 = MessageOf1<Doger> // error
type EmailMessageContents4 = MessageOf2<Doger>

type Flatten<T> = T extends any[] ? T[number] : number
// type Str = string
type Str = Flatten<string[]>
// type Num = number
type Num = Flatten<number>



// infer

type GetReturnType<Type> = Type extends (...args: never[]) => infer R ? R : never
// type Num = number
type Num1 = GetReturnType<() => number>
let num: Num1 = 100
// type Str1 = string
type Str1 = GetReturnType<(x: string) => string>
let str: Str1 = ''
// type Bools = boolean[]
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>
let bools: Bools = [true, false]
// type Never = never
type Never = GetReturnType<string>


// 分布式条件类型
type ToArray<T> = T extends any ? T[] : never
// type StrArrOrNumArr = string[] / number[]
type StrArrorNumArr1 = ToArray<string | number>
// saon1 : string[] | number[]
let saon1: StrArrorNumArr1 = [1, '2'] // error

type ToArrayNonDist<T> = [T] extends [any] ? T[] : never
// type StrArrOrNumArr = (string | number)[]
type StrArrOrNumArr2 = ToArrayNonDist<string | number>
// saon2 : (string|number)[]
let saon2: StrArrOrNumArr2 = [1, '2']
