const express = require('express')
const router = express.Router()
const {Book, validateBook} = require('../models/books')

//POST:
router.post('/', async (req, res)=>{
    const error= await validateBook(req.body)
    //if (error.message) res.status(401).send(error.message)
    book = new Book({
        name: req.body.bookName,
        author:{
            name: req.body.authorName,
            age: req.body.authorAge
        },
        genre: req.body.genre
    })

    book.save()
    .then((book)=>{
        res.send(book)
    })
    .catch(error=>{
        res.status(500).send("Book was not saved in db", error)
    })
})

// GET
router.get('/', (req, res)=>{
    Book.find()
    .then(books=> res.send(books))
    .catch(error => res.status(500).send("error to load the documents", error))
})

//GET BOOK BY ID
router.get('/:id', async(req, res)=>{
   const book= await Book.findById(req.params.id)
        if(!book) res.status(404).send("Book not found")
        res.send(book)
})

//UPDATE BOOK BY ID
router.put('/:id', async (req, res)=>{
    const updateBook = await Book.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.bookName,
            author:{
                name: req.body.authorName,
                age: req.body.authorAge
            },
            genre: req.body.genre
        },
        { new: true }
    )
      
    if(!updateBook) res.status(404).send("book not found")
     res.send(updateBook)
})

//Delete BOOK BY ID
router.delete('/:id', async (req,res)=>{
    const book= await Book.findByIdAndRemove(req.params.id)
    if(!book) res.status(404).send("book not found")
    else res.send(book)
})



module.exports= router