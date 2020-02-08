const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('users');
})

router.post('/register', (req, res)=>{
    res.send('register')
})

router.post('/login', (req, res)=>{
    res.send('user login')
})

router.get('/logout', (req, res)=>{
    res.send('user logout')
})

router.get('/list', (req, res)=>{
    res.send('user list')
})



module.exports = router;