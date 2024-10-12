const express = require('express');
const app = express();
const PORT = 4000;

// data form mockaroo.com
const users = require('./data.json');

app.get('/users', (req, res) => {
    return res.send(users)
})

// all data for hybrid application
app.get('/api/users', (req, res) => {
    return res.json(users)
})


// user get by id
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    res.json(user);
})


//post method
app.post('/api/user', (req, res) => {
    const user = {
        id: 22070707,
        name: "Dipak Mundhe",
        email: "dipakmundhe01@gmail.com",
        age: 21,
    };

    return res.json(user);
})


// same for put, patch and delete methods

// for 404 error
app.get('*', (req, res) => {
    res.send('404 error data not found....');
})

app.listen(PORT, () => console.log("server started......"));