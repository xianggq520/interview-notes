let net = require('net');
let server = net.createServer();

// server.unref()

server.on('listening', () => {
  console.log('server listening cb');
});
server.on('connection', (socket) => {
  console.log('连接已建立' + '\n');
  server.getConnections((err, count) => {
    if (err) {
      console.warn(err);
    } else {
      console.log(`当前有${count}个连接`);
    }
  });
  socket.on('data', (data) => {
    console.log('收到client发送的数据', data.toString());
    socket.write('客户端你好，消息已收到！');
  });
  socket.on('error', (err) => {
    console.log('on error' + '\n');
    console.warn(err);
    // socket.destroy();
  });
  socket.on('end', () => {
    console.log('on end' + '\n');
    // server.close();
  });
});
server.on('close', () => {
  console.log('server close cb');
});
server.listen(2000, () => {
  console.log('server is listen 2000');
});
