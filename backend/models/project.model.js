const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projName: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    members: {
        type: String,
        required: true,
        trim: true
    },
    startdate: {
        type: Date,
        required: false
    },
    finishdate: {
        type: Date,
        required: false
    },
    createduser: {
        type: String,
        required: true
    },
    up:{
        type: Number,
        required: false,
        default: 0
    },
    down:{
        type: Number,
        required: false,
        default: 0
    }
},{
    timestamps: true,
});

const Proj = mongoose.model('Proj', projectSchema);
module.exports = Proj;