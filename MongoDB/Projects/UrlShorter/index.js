const express = require('express');
const app = express();
const PORT = 8000;
const urlShorter = require('./routes/routes');
const { dbConnection } = require('./db/dbConnection');
dbConnection()
app.use(express.json());

app.use('/url', urlShorter)
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})