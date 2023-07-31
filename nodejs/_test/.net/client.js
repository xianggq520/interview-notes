let net = require('net');

let client = new net.Socket();

client.connect(2000, '192.168.185.125', ()=>{
	console.log('已连接到服务器端');
	console.log('发送消息：你好！');
	client.write('你好！');
	console.log('发送消息：再见。');
	client.end('再见。');
});

client.on('data', (data)=>{
	console.log('接收到server发送的数据：', data.toString());
});

client.on('error', (err)=>{
	console.warn(err);
  client.end('client异常了' + err.message);
});

client.on('end', ()=>{
	console.log('ended');
});

client.on('close', ()=>{
	console.log('finally closed');
	// client.write('client finally closed');
});
