const mongoose= require('mongoose')
const Author = require('./author')
const yup= require('yup')

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

const validateBook = book => {
    const schema  = yup.object().shape({
        bookName: yup.string().required().min(3).max(50),
        authorName: yup.string().required().min(3).max(40),
        authorAge: yup.number().required().min(10).max(100)
    })

    return schema
    .validate(book)
    .then(book => book)
    .catch(err => err.message)
}

exports.Book = new mongoose.model("Book", BookShema)
exports.validateBook= validateBook