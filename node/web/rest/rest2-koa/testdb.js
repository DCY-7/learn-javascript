const model = require('./model');

let Product = model.Product;

(async () => {
    var product = await Product.create({
        name: 'ONEPLUS 6',
        price: 2799
    });
    console.log('created: ' + JSON.stringify(product));
})();

// (async () => {
//     var products = await Product.findAll();
//     for (let p of products) {
//         console.log(''+JSON.stringify(p));
//     }
// })();
