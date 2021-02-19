// 1.引入 Node.js http 模块
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// 2.创建新的 HTTP 服务器并返回它。
// 每当接受到新的请求时，request 事件会被调用，并提供两个对象：
// 一个请求（http.IncomingMessage 对象） 和一个响应（http.ServerResponse 对象），这两个对象对于处理HTTP 请求至关重要
// 第一个对象提供了请求的详细信息，这个简单示例中没有使用它
// 第二个对象用于返回数据给调用方
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end('Hello World!\n');
});

// 3.设置服务器监听指定的端口和主机名。当服务器就绪后，回调函数会被调用，在此示例中会通知我们服务器正在运行
server.listen(port,hostname, () => {
    console.log('服务器运行在 http://${hostname}:${port}/');
})