const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const colors = require("colors")
const { prototype } = require("events")
const mongoose = require('mongoose');
const connectDb = require("./config/connectDB")
const path=require("path")

// configuring dot env file
dotenv.config();

// database call
connectDb();

// rest object
const app=express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())





// routes
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello from Server</h1>')
// })

// user routes
app.use("/api/v1/users",require("./routes/userRoute"));
// transactions routes
app.use("/api/v1/transactions",require("./routes/transactionRoutes"));

//static files
app.use(express.static(path.join(__dirname,"./client/build")))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
});

const PORT=8080||process.env.PORT

// listening
app.listen(PORT,()=>{
    console.log(`Server running on server ${PORT}`)
})

