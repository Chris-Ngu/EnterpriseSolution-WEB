const dotenv = require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const io = require('socket.io')(6000);

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//socket messaging
io.on('connection', socket => {
    console.log('New User Joined');
    socket.emit('chat-message', 'Hello World');
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', message)
    })
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established");
});

//routers
//could use this in the create login first
const adminRouter = require('./routes/users');
app.use('/admin', adminRouter)
const projectRouter = require('./routes/project');
app.use('/project', projectRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});