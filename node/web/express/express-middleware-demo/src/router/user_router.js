const express = require('express');

const router = express.Router();

router.use(function (req,res,next) {
    console.log('log from router');
    next();
})

router.get('/demo',(req,res) => {
    res.json({
        message: 'from router demo'
    })
})

module.exports = router;