// 导入koa
const Koa = require('koa');

// 创建一个 Koa 对象表示 web app 本身：
const app = new Koa();

app.use(async (ctx,next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
})

app.use(async (ctx,next) => {
    const start = new Date().getTime(); // 当前时间
    await necxt(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
})

// 对于任何请求，app 将调用该异步函数处理请求：
app.use(async (ctx,next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello koa2!</h1>';
});

// 在端口 3000 监听：
app.listen(3000,() => {
    console.log('app started at port 3000')
})