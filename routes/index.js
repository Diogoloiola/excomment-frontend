const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/excomment', (req, res, next) => {
    res.render('excomment')
})

module.exports = router;