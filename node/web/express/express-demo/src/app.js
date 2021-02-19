const express = require('express');

// 创建一个 express 实例
const app = express();

// app.use('/name',(req,res) => {
//     res.json({
//         name: "张三",
//         age: 18
//     })
// });

app.get('/:name/:age',(req,res) => {
    let {name} = req.params;
    let {age} = req.params;
    res.json({
        name,
        age
    });
});

app.post('/:name/:age',(req,res) => {
    let {name} = req.params;
    let {age} = req.params;
    res.json({
        name,
        age
    });
});

app.listen(3000,() => {
    console.log('服务器启动成功: http://localhost:3000')
})