const Sequelize = require('sequelize');
const config = require('./config');

console.log('init sequelize...');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

// 定义模型 pet，告诉Sequelize 如何映射数据库表
var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
    timestamps: false
});

// 插入数据
// var now = Date.now();
// (async () => {
//     var dog = await Pet.create({
//         id: 'd-' + now,
//         name: 'Odie',
//         gender: false,
//         birth: '2008-08-08',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     });
//     console.log('created: ' + JSON.stringify(dog));
// })();

// 查询数据
// (async () => {
//     var pets = await Pet.findAll();
//     console.log(`find ${pets.length} pets：`);
//     for (let p of pets){
//         console.log(JSON.stringify(p));
//     }
// })();

// 更新数据
// (async () => {
//     var pets = await Pet.findAll({
//         where: {
//             version: 0
//         }
//     })
//     for (const p of pets) {
//         console.log(JSON.stringify(p));
//         console.log('update pet...');
//         p.version ++;
//         await p.save();
//     }
// })();

// // 删除数据
// (async () => {
//     var pets = await Pet.findAll({
//         where: {
//             version: 1
//         }
//     })
//     for (const p of pets) {
//         console.log(JSON.stringify(p));
//         console.log('delete pet...');
//         await p.destroy();
//     }
// })();