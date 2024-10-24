const express = require('express');
const app = express();
const PORT = 4000;
const { dbConnection } = require('./db/dbConnections');
const userRouter = require('./routes/routs');
const path = require('path');
const cookiParser = require('cookie-parser');

//Mongo Connection
dbConnection();

//for json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// EJS set up
app.set('view engine', 'ejs');
app.set('views', path.resolve('./pages'));

// routers
app.use('/user', userRouter);

// cookie parser
app.use(cookiParser());

app.get('/', (req, res) => {
    res.render('Home');
})

app.get('/signup', (req, res) => {
    res.render('SignUp');
})
app.get('/login', (req, res) => {
    res.render('Login');
})


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})