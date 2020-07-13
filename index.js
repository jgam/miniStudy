const express = require('express');
const mongoose = require('mongoose');
const UserEntity = require('./entity/user.entity');

const app = express()

app.get('/', (req,res,next) => {
    res.status(200).json({
        msg: '200 success!',
    })
})

//register
app.post('/api/user/register', async (req,res,next) => {
    //get userinfo
    try{
    const existingUser = await UserEntity.findOne({
        email: req.body.email
    })

    if(existingUser){
        res.status(404).json({
            ok: false,
            msg: 'already registered user',
        })
    }

    const newUser = await UserEntity.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })


    res.status(201).json({
        ok: true,
        msg: `${newUser.username}, welcome abroad!`
    })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'error occurred in post'
        })
    }
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
const MONGO_URI = 'mongodb+srv://jgam:19921019@cluster0.c46hz.mongodb.net/miniTama?retryWrites=true&w=majority';

app.listen(PORT, () => {
    mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log(`running at current port ${PORT} boi!`)})