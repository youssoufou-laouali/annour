const mongoose= require('mongoose')
const Author = require('./author')

const BookShema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author: Author.schema,
    genre:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    }
})

module.exports = new mongoose.model("Book", BookShema)