const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/bank'

const dbConnect = async () => {
    await mongoose.connect(url);
    console.log('DB connected successfuly!')
}

module.exports = dbConnect;