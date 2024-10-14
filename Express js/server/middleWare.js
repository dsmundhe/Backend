const express = require('express');
const app = express();
const data = require('./data.json');
const PORT = 4000;

// get method
app.get('/api/users', (req, res) => {
    res.json(data);
})

// first middleWare
app.use((req, res, next) => {
    console.log('middle ware -1');
    req.myName = "Dipak Mundhe";
    // res.end('Hey!')
    next();
})

// get method

app.get('/users', (req, res) => {
    res.send(req.myName)
})

// second middleWare
app.use((req, res, next) => {
    console.log('middle ware -2');
    next();
})

// get user by id
app.get('/api/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = data.find((user) => user.id === id);
    res.json(user)
})


/*
Headers in express
it is an meta Data means data about the data 
which contains basic information about the request and response , lenght of packet and id address of user
*/

app.get('/users/data', (req, res) => {
    res.setHeader('X-myName', "Dipak Mundhe");
    const headData = req.headers;
    console.log(headData);
    res.send('header printed!')
})

app.listen(PORT, () => console.log(`Server started at ${PORT}`))

