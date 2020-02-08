const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('blogs');
})

router.get('/list', (req,res)=>{
    res.send('blogs list');
})

router.post('/commit', (req,res)=>{
    res.send('commit blog');
})

router.post('/delete', (req,res)=>{
    res.send('delete blog');
})

module.exports = router;