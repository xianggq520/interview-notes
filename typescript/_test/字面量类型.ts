const t = 'hello' // t的类型为 字面量类型 'hello'，不能修改，更不能修改成其他字符串值

let a: 'hello' = 'hello'
// a = 'wold' // error
a = 'hello' // yes

function compare(a: number, b: number) : -1 | 0 | 1 {
  // return a === b ? 0 : a < b ? -1 : 2 //error
  return a === b ? 0 : a < b ? -1 : 1
}

// 但是对象的属性则不会这样，typescript会自动推导类型，而不会解释成 字面量类型
let obj = {
  name: 'zhangsan'
}

obj.name = 'lisi' //yes


function post(url: string, method: 'GET' | 'POST' | 'DELETE') {
  return url + method
}

let req = {
  url: 'wwww.baidu.com',
  method: 'GET'
  // method: 'GET' as 'GET'
}

// post(req.url, req.method) // error
// 两种解决方案
// 1 将req的method字段用as断言为 字面量类型 'GET' 
post(req.url, req.method as 'GET')
// 2 将req的属性用as const都转成字面量类型
let req2 = {
  url: 'wwww.baidu.com',
  method: 'GET'
} as const
post(req.url, req2.method) //yes


let synb = Symbol('name')

synb = Symbol('age') // yes

// synb = 'name' // error



