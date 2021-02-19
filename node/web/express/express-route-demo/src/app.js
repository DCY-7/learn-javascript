const express = require('express');

const app = express();

// 注册路由
const memberRouter =  require('./member.router');
const skuRouter =  require('./sku.router');
app.use('/member',memberRouter);
app.use('/sku',skuRouter);

// // 1. 通过请求的方法类型 get/post/put/delete 来区分请求
// // app.get() app.post()
// app.get('/demo',(req,res) => {
//     res.json({
//         message: 'hello express route from get'
//     });
// });

// app.post('/demo',(req,res) => {
//     res.json({
//         message: 'hello express route from post'
//     });
// });

// // 2.通过URI 来区分请求
// app.get('user/byname',(req,res) => {
//     let {name} = req.query;
//     res.json({
//         name
//     })
// })

// app.get('user/byid',(req,res) => {
//     let {id} = req.query;
//     res.json({
//         id
//     })
// })

// // 3. 定义一个 API/ 路由 满足任何类型（get、post、delete、put）请求的响应
// // app.all()
// app.all('/test',(req,res) => {
//     res.json({
//        message: '可以响应任何类型的请求',
//        method: req.method
//     })
// })

// // 4. 定义一个 API/ 路由 满足任何请求的响应（日志）
// // app.all app.use（中间件）
// app.all('*',(req,res) => {
//     res.json({
//        message: '可以响应任何类型的请求',
//        method: req.method,
//        uri: req.path
//     })
// })

app.listen(3000,() => {
    console.log('服务器启动成功');
})