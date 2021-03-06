const mongoose = require('mongoose');


const userSchema  = new mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        }
        ,
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            required:true
        },
        created_at: {
            type: Date,
             default: Date.now
            }
    }
); 

module.exports = mongoose.model("users",userSchema);