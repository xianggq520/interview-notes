
const MyArray = [
  { name: 'Alice', age: 15 }, 
  { name: 'Bob', age: 23 }, 
  { name: 'Eve', age: 38 },
  { name: 'Eve2', age: 38, grade: '高级' },
]
// type Person = { name: string, age: number }
type Person1 = typeof MyArray[number] // number为类型，索引MyArray的下标的类型

const p: Person1 = {
  name: 'xiaoqian',
  age: 11, 
  // alive: true
}

type Age = typeof MyArray[number][ 'age']
const age: Age = 11

type Age2 = Person1[ 'age' ]
const age2: Age2 = 300
const age3: Person1['age'] = 123

// 索引 Person1 中 字符串常量'grade'类型 对应的类型 为：string ｜ undefined 
const grade: Person1['grade'] = '高级'