const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Implement some hashing function to map into mongodb password
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
    }
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;