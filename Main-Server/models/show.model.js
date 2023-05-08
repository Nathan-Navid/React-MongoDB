const mongoose = require('mongoose');

const ShowScema = new mongoose.Schema({
    titie:{
        type:String,
        required:[true, "Title is require"],
        minlength:[2,"Title must be at least 2 characters"],
        maxlength:[255,"Title must be at most 255 characters"]
    },
    genre:{
        type:String,
        required:[true, "Genre is require"],
        minlength:[2,"Genre must be at least 2 characters"],
        maxlength:[255,"Genre must be at most 255 characters"]
    },
    releaseYear:{
        type:Number,
        required:[true, "Release Year is require"],
        min:[1900,"Release Year must be at least 1900"],
    }, 
}, {timestamps:true});

module.exports = mongoose.model('show', ShowScema);