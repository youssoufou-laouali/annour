const mongoose= require('mongoose')
const yup= require('yup')

const BookShema= new mongoose.Schema({
    nameBook:{
        type: String,
        required: true
    },
    sommaire: { 
        type : Array ,
         default : [] 
    },
    description:{
        type: String,
        minlength: 40,
        required: true
    },
    read:{
        type: Number,
        required: true
    },
    start:{
        type: Number,
        required: true
    },
    vue:{
        type: Number,
        required: true
    },
    motCles: { 
        type : Array ,
         default : [] 
    },
    lienPhoto:{
        type: String,
        required: true
    },
    lienPdf:{
        type: String,
        required: true
    },
    frequence:{
        type: Number,
        required: true
    },
    authorName:{
        type: String,
        required: true
    }
})

const validateBook = book => {
    const schema  = yup.object().shape({

        nameBook: yup.string().required(),
        sommaire: yup.array().required,
        description: yup.string().required().min(40),
        read: yup.number().required(),
        start: yup.number().required(),
        vue: yup.number().required(),
        motCles: yup.array().required(),
        lienPhoto: yup.string().required(),
        lienPdf: yup.string().required(),
        frequence: yup.number().required(),
        authorName: yup.string().required()
    })

    return schema
    .validate(book)
    .then(book => book)
    .catch(err => err.message)
}

exports.Book = new mongoose.model("Book", BookShema)
exports.validateBook= validateBook