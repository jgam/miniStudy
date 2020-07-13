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
    {
        timestamps: true
    }
)

userSchema.pre('save', function(next){
    if(this.isModified('password')){
        next();
    }
    
});

module.exports = mongoose.model("User", userSchema);