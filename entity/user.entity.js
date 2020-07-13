const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        next();
    }

    //server
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt)

    this.password = hashedPassword;
    
});

const JWT_SECRET = 'jgam';

userSchema.methods.generateToken = function(){
    const payload = {
        _id: this._id,
        email: this._id,
    }
    return jwt.sign(payload, JWT_SECRET);
}

module.exports = mongoose.model("User", userSchema);