const mongoose = require('mongoose');

const JokeScema = new mongoose.Schema({
    setup:{
        type:String,
        required:[true, "Setup is require"],
        minlength:[10,"Setup must be at least 10 characters long"],
        maxlength:[255,"Setup must be at most 255 characters long"]
    },
    punchline:{
        type:String,
        required:[true, "Punchline is require"],
        minlength:[3,"Punchline must be at least 3 characters long"],
        maxlength:[255,"Punchline must be at most 255 characters long"]
    },
}, {timestamps:true});

module.exports = mongoose.model('joke', JokeScema);