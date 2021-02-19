## Route 介绍和使用

- Route 是什么
- Express 中使用 Route 的方式

URL --》网络 --》DNS域名解析 --》 目标服务器，通过路由规则，响应这个请求

区分请求：

- 通过请求的方法类型 get/post/put/delete 来区分请求
- 通过URI 来区分请求

Express 路由API：

```js
const express = require('express');
const app = express();

app.get('/demo',(req,res) => {
    res.json({
        message: 'hello express route from get'
    })
})

app.all('*',(req,res) => {
    res.json({
        message: '可以响应任何类型的请求',
        method: req.method
    })
})

// 使用中间件
app.use()
```

路由拆分：

- member.router.js

    ```js
    const express = require('express');
    const router = express.Router();
    
    router.get('/list',(req,res) => {
        /**/
    })
    
    module.exports = router;
    
    
    ```

- sku.router.js

    ```js
    const express = require('express');
    const router = express.Router();
    
    router.get('/list',(req,res) => {
        /**/
    })
    
    module.exports = router;
    ```

- app.js

    ```js
    const express = require('express');
    const app = express();
    
    // 注册路由
    const memberRouter =  require('./member.router');
    const skuRouter =  require('./sku.router');
    app.use('/member',memberRouter);
    app.use('/sku',skuRouter);
    
    app.listen(3000,() => {
        console.log('服务器启动成功');
    })
    ```

