const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const router = require('./routes/authRoutes')

const db = require('./config/db')

//load environment variables
dotenv.config()

//initialize Express app
const app = express()
db()
//Use Middleware
app.use(express.json())
app.use(cors())
app.use(router)

//start server
const PORT =5000 || process.env.PORT

app.listen(PORT,()=>{
    console.log("Server listening on the port "+PORT);
    
})

app.get('/',(req,res)=>{
    res.send("Welcome")
})
