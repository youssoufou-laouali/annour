const express = require('express')
const mongoose= require('mongoose')
const app= express()
require('dotenv').config()
const booksRoute= require('./routes/books')

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(()=> console.log('connected to database'))
.catch((err)=> console.log('error: ', err))

const PORT= process.env.PORT || 3000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use('/api/books', booksRoute)

app.listen(PORT, ()=> console.log("Api run at PORT", PORT))