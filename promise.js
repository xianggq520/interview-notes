// debug then

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


// resolve一个promise实例，效果和return一个promise实例一样
var pp = new Promise((resolve) => {
  var p22 = Promise.resolve(22)
  console.log(22)
  resolve(p22)
}).then((res)=>{
  console.log(23)
  console.log(res)
})



// debug catch

var _then = Promise.prototype.then

// 用于debug then的执行逻辑、then注册的回调函数返回promise时，大概是怎么处理的
Promise.prototype.then = function(r, j) {
  return _then.call(this, r ? function rs(res) {console.log('@@@', res); return r(res)} : void 0, j ? function rj(err) { return j(err)} : void 0)
}

// 用于debug catch的执行逻辑
var _catch = Promise.prototype.catch
Promise.prototype.catch = function(re) {
  return _catch.call(this, function rj(err) {console.log('###', err); return re(err)})
}

var pp1 = new Promise((resolve, reject) => {
  reject(0)
})
.then((res)=>{
  console.log(1, res)
})
.catch(error => {
  console.log(2, error)
  return 2
})
.then((res)=>{
  console.log(3, res)
})


// 

