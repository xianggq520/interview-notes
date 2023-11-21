var raf
var frames = 0
var start = end = Date.now()

var oneFrame = function() {
  end = Date.now()
  if (end - start >= 1000) {
    console.log(`1s frames:${frames}`)
    return
  }
  frames ++
  requestFrame(oneFrame)
}

var requestFrame = function(cb) {
  raf = requestAnimationFrame(cb)
}

requestFrame(oneFrame)


// 使用场景，可以分批次渲染首屏内容，大列表分批次渲染出来，减少白屏时间。
