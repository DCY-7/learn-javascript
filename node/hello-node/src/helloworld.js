const os = require('os');

console.log("Hello World!");
console.log('当前CPU的数量：'+os.cpus().length);
console.log('总内存（单位：GB）：'+os.totalmem()/1024/1024/1024);
console.log('空闲内存（单位：MB）：' + os.freemem()/1024/1024);