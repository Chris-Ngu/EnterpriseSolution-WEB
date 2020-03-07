const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//add timestamp for last login
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 4
    }
},{
    timestamps: true,
});



const User = mongoose.model('User', userSchema);

module.exports = User;