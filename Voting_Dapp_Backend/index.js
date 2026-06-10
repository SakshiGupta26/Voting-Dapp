const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
const connectDB = require('./db/connect')
const authenticationRoute = require("./routes/authenticationRoute")
const candidateRoutes = require("./routes/candidateRoutes")
const voterRoutes = require(".//routes/voterRoutes")
app.use(express.json())
app.use(cors())

app.use("/api",authenticationRoute)
app.use("/api", candidateRoutes);
app.use("/api",voterRoutes)

connectDB(process.env.MONGO_URL)
.then(
    ()=>{
        console.log("Database connected")
        app.listen(3000,()=>{
            console.log("server is running")
        })
    }
)
.catch((error)=>{
    console.log(error)
})