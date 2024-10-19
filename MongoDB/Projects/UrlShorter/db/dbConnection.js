const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/short-url'

const dbConnection = async () => {
   try {
    await mongoose.connect(url);
    console.log('MongoDB connected....')
   } catch (error) {
    console.log('errror...')
   }
}
  module.exports={dbConnection}