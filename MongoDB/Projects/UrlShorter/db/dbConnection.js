const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/short-url'

const dbConnection = async () => {
    await mongoose.connect(url);
}
module.exports = { dbConnection }