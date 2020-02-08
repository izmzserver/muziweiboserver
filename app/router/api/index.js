const express = require('express');
const router = express.Router();
const users = require('./users');
const blog = require('./blog');

router.use('/blog', blog);
router.use('/user', users);

router.get('/', (req,res) => {
    res.send('api');
})

module.exports = router;