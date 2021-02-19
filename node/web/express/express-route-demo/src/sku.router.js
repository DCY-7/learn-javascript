const express = require('express');
const router = express.Router();

router.get('/list',(req,res) => {
    res.json({
        list: [
            {
                id: 001,
                price: 100,
                name: '牛仔裤'
            },
            {
                id: 002,
                price: 100,
                name: 'T恤'
            }
        ]
    })
})

module.exports = router;
