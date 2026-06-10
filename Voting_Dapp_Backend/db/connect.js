const mongoose = require('mongoose')

const connectDB = (url) =>{
    console.log(process.env.MONGO_URL)
    return mongoose.connect(url)
}

module.exports=connectDB;