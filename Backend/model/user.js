const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });

userSchema.methods.matchPassword = async function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
}

// middleware for password hash
userSchema.pre("save",async function(next) {
    if(!this.isModified('password')) {
        next();
    }
   this.password = await bcrypt.hash(this.password, 10)
})

const User = mongoose.model("User", userSchema)
module.exports = User