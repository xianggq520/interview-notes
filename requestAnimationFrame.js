var raf;
var frames = 0;
var start = (end = Date.now());

var oneFrame = function () {
  end = Date.now();
  if (end - start >= 1000) {
    console.log(`1s frames:${frames}`);
    return;
  }
  frames++;
  requestFrame(oneFrame);
};

var requestFrame = function (cb) {
  raf = requestAnimationFrame(cb);
};

requestFrame(oneFrame);

// 使用场景，可以分批次渲染首屏内容，大列表分批次渲染出来，减少白屏时间。





// 复杂耗时任务
function task() {
  for (let i = 0; i < 10000000; i++) {
    
  }
}

function handleTask(_task, callback) {
  var start = Date.now();
  requestAnimationFrame(() => {
    // 假设1s渲染60帧
    // 下一帧执行有空闲
    if (Date.now() - start < 16.6) {
      _task();
      callback();
    } else {
      handleTask(_task, callback);
    }
  })
}

function runTask(_task) {
  return new Promise((resolve) => {
    handleTask(_task, resolve);
  });
}
var allDefer = []
for (let i = 0; i < 1000; i++) {
   
  var start = Date.now()
  allDefer.push(runTask(task))

 
}

Promise.all(allDefer).then(() => {
  console.log('all task done, time is ', Date.now() - start)
})

var max = 200
var curr = 1
var wrap = document.createElement('div')
  wrap.style.position = 'absolute'
  wrap.style.width = '200px'
  document.body.appendChild(wrap)

setInterval(() => {
  curr += 50
  curr = curr % max
  wrap.style.top = curr + 'px'
  wrap.innerText = new Date().toLocaleTimeString()
}, 1000);