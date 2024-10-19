const express = require('express');
const app = express();
const path = require('path');
const { urlModel } = require('./models/url')

const PORT = 8000;
const urlShorter = require('./routes/routes');
const { dbConnection } = require('./db/dbConnection')
dbConnection()
 

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // If you're sending JSON data as well

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.get('/', async (req, res) => {
    const urls = await urlModel.find({});
    res.render('Home', {
        name: "URL Shortner!",
        urls: urls
    })
    
})

app.use('/url', urlShorter)
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})