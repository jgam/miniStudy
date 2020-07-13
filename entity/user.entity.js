const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {   
        username: {
            type: String,
            required: [true, 'username is required'],
        },
        email:{
            type: String,
            required: true,
            trim:true,
        },
        password:{
            type:String,
            required: true,
            trim: true,
        }
    },
    {timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);