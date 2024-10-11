// require express
const express = require('express');

// make instance of express
const app = express();

// routing 

// Get method
app.get('/', (req, res) => {
    res.send('Hello DM!')
})

// post method
app.post('/login', (req, res) => {
    res.send('you are on login!');
})

//Put method
app.put('/updateprofile', (req, res) => {
    res.send('update!')
})


//Delete method
app.delete('/deletedata', (req, res) => {
    res.send('Delete data!');
})


// query parameter 

// http://localhost:4000/about/?name=Dipak&surname=Mundhe

app.get('/about', (req, res) => {
    const { name, surname } = req.query;
    res.send(`Hello ${name} ${surname} `);
})



// params parameter

// http://localhost:4000/cart/phone15

app.get('/cart/phone:Phoneid', (req, res) => {
    const id = req.params.Phoneid;
    res.send("hello");
    console.log(id)
})


// for 404 error
app.get('*', (req, res) => {
    res.send('404  Error could not find!')
})


//listen on port for server
app.listen(4000, () => {
    console.log('Server started..........');
})