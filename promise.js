
var _then = Promise.prototype.then

// 用于debug then的执行逻辑、then注册的回调函数返回promise时，大概是怎么处理的
Promise.prototype.then = function(r, j) {
  return _then.call(this, function rs(res) {console.log('@@@', res); return r(res)}, j)
}

Promise.resolve() // 返回promise 1
.then(function fullfilled() {
  console.log(0)
  // 此回调函数返回了一个promise x实例
  // 这个promiseX实例 fullfilled 后，promise 2才会变成fullfilled状态
  // 根据规范描述，猜测 fullfilled 回调内部大概是这么处理的：
  // 当返回promise实例时，在微任务队列中去给这个promiseX实例注册fullfilled回调，在这个fullfilled回调中调用np的resolve，将np变为fullfilled状态，从而将np的fullfilled回调放入下一次微任务队列中
  /*
    var promiseX = fullfilled()
    var np = new Promise((resolve, reject) => {
      try {
        if (promiseX instanceof Promise) {
          Promise.resolve().then(() => {
            promiseX.then((res) => resolve(res), () => {})
          })
        } else {
          resolve(promiseX)
        }
      } catch (error) {
        reject(error)
      }
    })
    return np
   */
  
  return Promise.resolve(4) // 返回promiseX
}) // 返回promise 2
.then(res => {
  console.log(res)
})

Promise.resolve().then(()=>{
  console.log(1)
})
.then(()=>{
  console.log(2)
})
.then(()=>{
  console.log(3)
})
.then(()=>{
  console.log(5)
})
.then(()=>{
  console.log(6)
})