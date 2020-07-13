const express = require('express');

const app = express()

app.get('/', (req,res,next) => {
    res.status(200).json({
        msg: '200 success!',
    })
})

//register
app.post('/api/user/register', (req,res,next) => {
    //get userinfo
    
    res.status(201).json({
        result: 'succesfully registered new user'
    })
})

//login
app.post('/api/user/login', (req,res,next) => {
    res.status(201).json({
        result: 'succesfully Logged in'
    })
})

//get my profile
app.get('/api/user/me', (req,res,next) => {
    res.status(201).json({
        result: 'this is my information'
    })
})


const PORT = 3333;

app.listen(PORT, () => {console.log(`running at current port ${PORT} boi!`)})