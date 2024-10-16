//import express
const expresss = require('express');

//instance of express
const app = expresss();

//import mongoose
const mongoose = require('mongoose');

//PORT for host
const PORT = 4000;

//make db connection
const db = require('./dbConnection');
db();


// middleware for dynamic data
app.use(expresss.json());

// Create schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mono: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

//Create model for user
const User = mongoose.model('user', userSchema);

// create user
app.post('/bank/user', async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        mono: req.body.mono
    }
    const userCreate = await User.create(user);
    res.status(201).json({ msg: "Successful!" })
})


//get all users
app.get('/bank/user', async (req, res) => {
    const users = await User.find({});
    if (users) {
        res.status(200).json(users);
    }
    else {
        res.status(404).json({ msg: "Something went wrong!" })
    }
})


//user findByid
app.get('/bank/user/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id);
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ msg: "Something went wrong!" })
    }
})

//update by id
app.patch('/bank/user/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.updateOne({ _id: id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
        }
    });
    res.status(200).json({ msg: "Successful!" })
})

//delete by id
app.delete('/bank/user/:id', async (req, res) => {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json({ msg: "Successful!" })
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})