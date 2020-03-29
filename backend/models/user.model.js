const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

//Implement some hashing function to map into mongodb password
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
    },
    createdprojects: {
        type: Number,
        required: false,
        default: 0
    }
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;