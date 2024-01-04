const mongoose = require("mongoose");

// schema design
const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,'name is requires']
        },
        email:{
            type:String,
            required:[true,'email is  required and should be unique'],
            unique:true
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
    },
    {
        timestamps: true// for each entry its time will also be recorded
    }
);

// export
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
