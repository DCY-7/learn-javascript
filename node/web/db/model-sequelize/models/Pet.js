const db = require('../db');

module.exports = db.defineModel('pets', {
    id: db.ID,
    name: db.STRING(100),
    gender: db.BOOLEAN,
    birth: db.STRING(10),
});
