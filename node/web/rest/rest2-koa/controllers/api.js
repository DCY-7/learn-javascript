const model = require('../model');

// 导入对象的映射模型
let Product = model.Product;

// service：查询所有产品信息
// const getProductsData = async () => {
//     const products = await Product.findAll();
//     return products;
// };

// service：新增产品信息

module.exports = {
    'GET /api/products': async (ctx, next) => {
        let products = await Product.findAll();
        ctx.response.type = 'application/json';
        ctx.response.body = {
            products: products
        };
    },

    'POST /api/products': async (ctx, next) => {
        let p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price
        };
        // 写入数据库
        await Product.create({
            name: p.name,
            price: p.price
        });
        ctx.response.type = 'application/json';
        ctx.response.body = p;
    }
};
