const mongoose = require("mongoose")
const colors = require("colors")
const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server Running on ${mongoose.connection.host}`.bgGreen.white);
    }
    catch(error){
        console.log(`${error}`.bgRed);
    }
};

module.exports = connectDb;


// const db=process.env.MONGO_URL || "mongodb://127.0.0.1:27017"

// mongoose.connect(db,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(()=>{
//     console.log("connection successful");
// }).catch((e)=>{
//     console.log(e);
// })