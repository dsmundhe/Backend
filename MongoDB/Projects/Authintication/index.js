const express = require('express');
const app = express();
const PORT = 4000;
const { dbConnection } = require('./db/dbConnections');
const userRouter = require('./routes/routs')

//Mongo Connection
dbConnection();

//for json data
app.use(express.json())

// routers
app.use('/user', userRouter)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})