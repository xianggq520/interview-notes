var o = (function(){
  var obj = {
    a:1
  }
  return {
    get(k) {
      return obj[k]
    }
  }
})()

// 通过prototype入侵
Object.defineProperty(Object.prototype, '___a___', {
  get() {
    return this
  }
})
var t = o.get('___a___') // obj
console.log(t)
t.a = 123 // 篡改obj.a
console.log(o.get('a')) // 123  入侵成功


// 解决方案 1
var o1 = (function(){
  var obj = {
    a:1
  }
  return {
    get(k) {
      // 屏蔽prototype
      if(obj.hasOwnProperty(k)) {
        return obj[k]
      }
    }
  }
})()

// 解决方案 2
var o2 = (function(){
  var obj = Object.create(null)
  obj.a = 1
  return {
    get(k) {
      return obj[k]
    }
  }
})()
var t2 = o2.get('___a___')
console.log(t2) // undefined



// valueOf 也可以返回 调用者
var tt = {b: 1}
console.log(o, tt.valueOf())

// 但是由于丢失了函数调用者，所以此处拿不到this
// var tt = o.get('valueOf')()
// console.log('tt', tt)

//类似于
var get = o.get('valueOf')
var tt2 = get() // 函数无调用者 所以无法转成object -》error
console.log('tt2', tt2)