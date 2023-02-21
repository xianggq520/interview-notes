
# WebSocket

WebSocket 是一种网络通信协议

**已经有了 HTTP 协议，为什么还需要另一个协议？**
**HTTP 协议的缺点**
- 通信只能由客户端发起
- One-way
- request/response
- stateless
- Half-Duplex protocol

只能使用"轮询"的方式来获知服务器的连续状态变化

> 半双工（half-duplex）的系统允许二台设备之间的双向资料传输，但不能同时进行。因此同一时间只允许一设备发送资料，若另一设备要发送资料，需等原来发送资料的设备发送完成后再处理。

>半双工的系统可以比喻作单线铁路。若铁道上无列车行驶时，任一方向的车都可以通过。但若路轨上有车，相反方向的列车需等该列车通过道路后才能通过。

>全双工（full-duplex）的系统允许二台设备间同时进行双向资料传输。一般的电话、手机就是全双工的系统，因为在讲话时同时也可以听到对方的声音。


# 简介

![WebSocket通讯](websocket_desc.png)

- 特点：

  1. 建立在 TCP 协议之上，服务器端的实现比较容易。
  2. 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
  3. 数据格式比较轻量，性能开销小，通信高效。
  4. 可以发送文本，也可以发送二进制数据。
  5. 没有同源限制，客户端可以与任意服务器通信。
  6. 协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。

- 协议

  ![协议](websoket协议.jpg)

- URL

    ws://example.com:80/some/path

- 客户端案例

```js
var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function(evt) { 
  console.log("Connection open ..."); 
  ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log("Connection closed.");
};

```

- ws实例状态readyState
  - CONNECTING：值为0，表示正在连接。
  - OPEN：值为1，表示连接成功，可以通信了。
  - CLOSING：值为2，表示连接正在关闭。
  - CLOSED：值为3，表示连接已经关闭，或者打开连接失败。

- onopen事件

```js

ws.onopen = function () {
  ws.send('Hello Server!');
}

//or
// 绑定多个监听程序
ws.addEventListener('open', function (event) {
  ws.send('Hello Server!');
});

```

- onclose事件

关闭连接，绑定关闭连接时的回调函数。

- onmessage事件

```js
ws.onmessage = function(event) {
  var data = event.data;
  // 处理数据
};

ws.addEventListener("message", function(event) {
  var data = event.data;
  // 处理数据
});

```

- binaryType属性

默认值"blob"，可选值"arraybuffer"

```js

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Change binary type from "blob" to "arraybuffer"
socket.binaryType = "arraybuffer";

// Listen for messages
socket.addEventListener("message", (event) => {
  if (event.data instanceof ArrayBuffer) {
    // binary frame
    const view = new DataView(event.data);
    console.log(view.getInt32(0));
  } else {
    // text frame
    console.log(event.data);
  }
});

```

- send

实例对象的send()方法用于向服务器发送数据。

```js

// 发送字符串
ws.send('your message');


// 发送 Blob 对象
var file = document
  .querySelector('input[type="file"]')
  .files[0];
ws.send(file);

// 发送 ArrayBuffer
// Sending canvas ImageData as ArrayBuffer
var img = canvas_context.getImageData(0, 0, 400, 320);
var binary = new Uint8Array(img.data.length);
for (var i = 0; i < img.data.length; i++) {
  binary[i] = img.data[i];
}
ws.send(binary.buffer);

```

- bufferedAmount

实例对象的bufferedAmount属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。

```js

var data = new ArrayBuffer(10000000);
socket.send(data);

if (socket.bufferedAmount === 0) {
  // 发送完毕
} else {
  // 发送还没结束
}
```

- onerror事件

监听异常，绑定异常处理回调函数。
