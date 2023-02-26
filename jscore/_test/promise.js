Promise.resolve().then(() => {
  console.log("1")
  return 1
}).then((data) => {
  console.log("2", data)
  return 2
}).then((data) => {
  console.log("3", data)
  return 3
}).finally((data) => {
  console.log("finally", data)
  return 4
}).then((data) => {
  console.log("5", data)
  return 5
}).then((data) => {
  console.log("6", data)
  return 6
}).finally((data) => {
  console.log("finally2", data)
  return 7
})

// then/catch函数给当前promise实例注册回调（当注册的回调函数执行并返回值后，进入fulfilled状态），并返回新的promise实例
// finally返回当前promise实例，即它的调用者，所以finally之后的then/catch是在为调用finally函数的promise实例注册回调